/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Subscription and Billing', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/profile/billing').wait(1500);
  });
  it('should enable inputs', () => {
    cy.get('input').eq(3).should('have.attr', 'readonly');
    cy.get('button')
      .eq(7)
      .click({ force: true })
      .then(() => {
        cy.get('input').eq(3).should('not.have.attr', 'readonly');
      });
  });
  it('should disable first switch', () => {
    const input = cy.get(`input[type='checkbox']`).eq(1);
    input.uncheck();
    input.should('not.be.checked');
  });
});
