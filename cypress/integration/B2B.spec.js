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
    it('open drawer with calendar', () => {
      cy.get(`input[type='radio']`)
        .eq(1)
        .click()
        .then(() => {
          cy.get('button')
            .eq(15)
            .click()
            .then(() => {
              cy.contains(/Time preset/g).should('be.visible');
              cy.get('.input').eq(2).type('Cypress integration test');
            });
        });
    });
  });
});
