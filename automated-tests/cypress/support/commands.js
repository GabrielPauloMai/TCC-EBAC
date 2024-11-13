const authorizationToken = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy';
const all_coupons = 'wp-json/wc/v3/coupons';
const coupon_by_id = (id) => `wp-json/wc/v3/coupons/${id}`;

Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password, {log: false});
    cy.get('.woocommerce-form > .button').click();
});

Cypress.Commands.add('listCoupons', () => {
    return cy.request({
        method: 'GET',
        url: all_coupons,
        headers: {
            authorization: authorizationToken
        }
    }).then((response) => {
        cy.wrap(response);
    });
});

Cypress.Commands.add('addCoupon', (couponData) => {
    return cy.request({
        method: 'POST',
        url: all_coupons,
        headers: {
            authorization: authorizationToken,
            'Content-Type': 'application/json'
        },
        body: couponData
    }).then((response) => {
        cy.wrap(response);
    });
});

Cypress.Commands.add('listCouponbyId', (couponId) => {
    return cy.request({
        method: 'GET',
        url: coupon_by_id(couponId),
        headers: {
            authorization: authorizationToken
        }
    }).then((response) => {
        cy.wrap(response);
    });
});


Cypress.Commands.add('deleteCoupon', (couponId) => {
    return cy.request({
        method: 'DELETE',
        url: coupon_by_id(couponId),
        headers: {
            authorization: authorizationToken
        },
        qs: {
            force: true
        }
    }).then((response) => {
        cy.wrap(response);
    });
});
