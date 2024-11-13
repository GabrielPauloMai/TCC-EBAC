/// <reference types="cypress" />

describe('API de Cupons', () => {
    const authorizationToken = 'código_da_autorização_aqui';

    it('Deve listar todos os cupons cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'coupons',
            headers: {
                authorization: authorizationToken
            }
        }).should((response) => {
            cy.log(response);
            expect(response.status).to.equal(200);
        });
    });

    it('Deve cadastrar um novo cupom', () => {
        const newCoupon = {
            code: 'DESCONTO10',
            discount_type: 'percent',
            amount: '10',
            individual_use: true,
            exclude_sale_items: true,
            usage_limit: 100,
            expiry_date: '2024-12-31'
        };

        cy.request({
            method: 'POST',
            url: 'coupons',
            headers: {
                authorization: authorizationToken,
                'Content-Type': 'application/json'
            },
            body: newCoupon
        }).should((response) => {
            cy.log(response);
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('code', newCoupon.code);
        });
    });
});
