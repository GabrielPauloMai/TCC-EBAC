/// <reference types="cypress" />

class CartPage {

    /**
     *Abrir a página do carrinho
     */
    visitCart() {
        cy.visit('carrinho');
    }


    /**
     * Verifica se um produto está presente no carrinho.
     * @param {string} productName - Nome do produto a ser verificado
     */
    verifyProductInCart(productName) {
        cy.get('.cart_item .product-name').should('contain', productName);
    }

    /**
     * Limpa o carrinho removendo todos os itens.
     */
    clearCart() {
        cy.get('.cart_item').each(() => {
            cy.get('.remove > .fa').first().click();
        });
    }

    /**
     * Retorna o valor total do carrinho
     * @returns {number} - Valor total do carrinho
     */
    getTotal() {
        return cy.get('.cart_totals .amount').invoke('text').then((text) => {
            let valor = text.replace('R$', '').replace('.', '').replace(',', '.');
            return parseFloat(valor);
        });
    }
}

export default new CartPage();
