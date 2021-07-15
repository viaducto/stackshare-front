/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Sell parameters', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Simple option', () => {
    it('should change inputs values', () => {
      cy.get('input').eq(2).type(10);
      cy.get('input').eq(3).clear().type(50);
      cy.get('select')
        .select('Option')
        .then(() => {
          cy.get('input')
            .eq(2)
            .invoke('val')
            .then((value) => {
              expect(value.toString()).eq('10');
            });
          cy.get('input')
            .eq(3)
            .invoke('val')
            .then((value) => {
              expect(value.toString()).eq('50');
            });
          cy.get('select')
            .invoke('val')
            .then((value) => {
              expect(value).eq('Option');
            });
        });
    });

    it('should open drawer', () => {
      cy.get('button')
        .eq(1)
        .click()
        .then(() => {
          cy.then(() => {
            cy.contains(/Time preset/g).should('be.visible');
            cy.get('input').eq(4).type('Cypress testing');
          });
        });
    });
  });

  describe('Advanced option', () => {
    it('should change to advanced', () => {
      cy.contains(/Advanced/g)
        .click()
        .then(() => {
          cy.contains(/Prices and availiability/g).should('be.visible');
        });
    });

    describe('Calendar', () => {
      it('should open popover', () => {
        cy.contains(/Advanced/g)
          .click()
          .then(() => {
            cy.contains(/Uptime/g)
              .eq(0)
              .click()
              .then(() => {
                cy.contains(/Expires by/g).should('be.visible');
              });
          });
      });

      it('should open drawer', () => {
        cy.contains(/Advanced/g)
          .click()
          .then(() => {
            cy.contains(/Uptime/g)
              .eq(0)
              .click()
              .then(() => {
                cy.get('button')
                  .eq(3)
                  .click()
                  .then(() => {
                    cy.contains(/Time preset/g).should('be.visible');
                  });
              });
          });
      });
    });
  });
});
