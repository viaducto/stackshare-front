/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('B2B option', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/b2b');
  });
  describe('Simple option', () => {
    it('should change input values', () => {
      cy.get('.input').eq(0).type(10);
      cy.get('.input').eq(0).clear().type(99);
    });
  });
  describe('Advanced option', () => {
    it('open popover with data', () => {
      cy.get(`input[type='radio']`)
        .eq(1)
        .click()
        .wait(1500)
        .then(() => {
          cy.contains(/comer/)
            .click({ force: true })
            .wait(5)
            .then(() => {
              cy.contains(/March 4, 2021. 4:00 am/g).should('be.visible');
            });
        });
    });
  });
});
