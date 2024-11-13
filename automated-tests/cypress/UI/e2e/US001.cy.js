/// <reference types="cypress" />

import ProductsPage from "../../support/page_objects/products.page";
import CartPage from "../../support/page_objects/cart.page";

before(() => {
    cy.fixture('perfil').then(userProfile => {
        cy.visit('minha-conta');
        cy.login(userProfile.login, userProfile.password);
    })
});

after(() => {
    CartPage.visitCart();
    CartPage.clearCart();
});

it('Deve adicionar 3 produtos diferentes ao carrinho', () => {
    ProductsPage.getRandomProduct(3).then(randomProducts => {
        randomProducts.forEach(product => {
            ProductsPage.visitProductPage(product.productUrl);
            ProductsPage.addToCart(product);
            cy.get('.woocommerce-message').invoke('text').then((text) => {
                expect(text).to.contain(ProductsPage.createAddToCartMessage(product));
            });
        });
        CartPage.visitCart();
        let total = 0;
        randomProducts.forEach(product => {
            total += product.productPrice * product.productQuantity;
            CartPage.verifyProductInCart(product.productName);
        });
        CartPage.getTotal().then(cartTotal => {
            expect(total).to.be.closeTo(cartTotal, 0.01);
        });
    });
});