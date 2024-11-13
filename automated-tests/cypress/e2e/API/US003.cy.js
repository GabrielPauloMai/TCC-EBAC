import couponSchema from '../../support/schemas/couponSchema';

describe('API de Cupons', () => {

    beforeEach(() => {
        cy.fixture('coupon').as('newCoupon');
    });

    it('Deve listar todos os cupons cadastrados', () => {
        cy.listCoupons().then((response) => {
            cy.log(response.body);
            expect(response.status).to.equal(200);
            expect(response.body[0]).to.have.property('id');
            expect(response.body).to.have.length.greaterThan(1);
        });
    });

    it('Deve cadastrar um novo cupom', function () {
        const timestamp = new Date().getTime();
        this.newCoupon.code = `${this.newCoupon.code}_${timestamp}`;
        cy.addCoupon(this.newCoupon).then((response) => {
            cy.log(response);
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('code', this.newCoupon.code);
        });
    });

    it('Deve validar o contrato da resposta dos cupons', () => {
        cy.listCoupons().then((response) => {
            cy.log(response.body);
            response.body.forEach((coupon) => {
                couponSchema.validateAsync(coupon);
            });
        });
    });

    it.only('Deve listar um cupom específico', function () {
        const timestamp = new Date().getTime();
        this.newCoupon.code = `${this.newCoupon.code}_${timestamp}`;

        cy.addCoupon(this.newCoupon).then((response) => {
            cy.log(response);
            expect(response.status).to.equal(201);
            const couponId = response.body.id;

            cy.listCouponbyId(couponId).then((listResponse) => {
                cy.log(listResponse);
                expect(listResponse.status).to.equal(200);
                expect(listResponse.body).to.have.property('id', couponId);
                couponSchema.validateAsync(listResponse.body);
            });
        });

    });


    it('Deve deletar um cupom específico', function () {
        const timestamp = new Date().getTime();
        this.newCoupon.code = `${this.newCoupon.code}_${timestamp}`;

        cy.addCoupon(this.newCoupon).then((response) => {
            cy.log(response);
            expect(response.status).to.equal(201);
            const couponId = response.body.id;

            cy.deleteCoupon(couponId).then((deleteResponse) => {
                cy.log(deleteResponse);
                expect(deleteResponse.status).to.equal(200);
                expect(deleteResponse.body.id).to.equal(couponId);
            });
        });
    });
});
