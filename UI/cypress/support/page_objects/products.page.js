/// <reference types="cypress" />

class ProductsPage {
    /**
     * @typedef {Object} Product
     * @property {string} productName
     * @property {string} productSize
     * @property {string} productColor
     * @property {number} productQuantity
     * @property {float} productPrice
     * @property {string} productUrl
     */

    /**
     * Visita a página de um produto específico
     * @param {string} productUrl - URL do produto
     */
    visitProductPage(productUrl) {
        cy.visit(productUrl);
    }


    /**
     * Adiciona o produto ao carrinho com a quantidade, tamanho e cor especificados
     * @param {Product} product - Objeto com dados do produto
     */
    addToCart(product) {
        if (product.productSize) {
            cy.get(`.button-variable-item-${product.productSize}`).click();
        }
        if (product.productColor) {
            cy.get(`.button-variable-item-${product.productColor}`).click();
        }
        if (product.productQuantity) {
            cy.get('.input-text').clear().type(product.productQuantity);
        }
        cy.get('.single_add_to_cart_button').click();
    }

    /**
     * Gera a mensagem de confirmação para adicionar ao carrinho
     * @param {Product} product - Objeto com dados do produto
     * @returns {string} - Mensagem de sucesso para adição ao carrinho
     */
    createAddToCartMessage(product) {
        return product.productQuantity === 1
            ? `“${product.productName}” foi adicionado no seu carrinho.`
            : `${product.productQuantity} × “${product.productName}” foram adicionados no seu carrinho.`;
    }
    decodeHtmlEntities(text) {
        const entities = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'",
            '&trade;': '™',
            '&copy;': '©',
            '&reg;': '®'
        };
        return text.replace(/&[a-zA-Z0-9#]+;/g, (entity) => entities[entity] || entity);
    }


    getRandomProduct(limit) {
        return this.getAllProducts().then((response) => {
            const responseProducts = Cypress._.sampleSize(response, limit);
            return cy.wrap(responseProducts);
        });
    }

    /**
     * Busca todos os produtos disponíveis na loja
     * @returns {Product[]} - Array com todos os produtos disponíveis
     */

    getAllProducts() {
        return cy.request({
            method: 'GET',
            url: 'wp-json/wc/store/products',
            qs: { per_page: 100 },
        }).then((response) => {
            return response.body.map(product => {
                const randomVariation = product.variations[Math.floor(Math.random() * product.variations.length)];

                const size = randomVariation.attributes.find(attr => attr.name === 'Size')?.value;
                const color = randomVariation.attributes.find(attr => attr.name === 'Color')?.value;
                let quantity = Math.max(1, parseInt((product.quantity_limit / 10) * Math.random()));

                return {
                    productName: this.decodeHtmlEntities(product.name),
                    productSize: size,
                    productColor: color,
                    productQuantity: quantity,
                    productPrice: parseFloat(product.prices.price) / 100,
                    productUrl: product.permalink,
                };
            });
        });
    }
}

export default new ProductsPage();
