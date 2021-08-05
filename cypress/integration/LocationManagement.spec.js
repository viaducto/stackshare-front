/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Testing Location Management', () => {
  beforeEach(() => {
    cy.viewport(550, 739).then(() => {
      cy.visit('http://138.197.11.134:3000/location-management').wait(1500);
    });
  });

  it('should open table drawer', () => {
    cy.get('button').eq(9).click({ force: true });
    cy.contains(/See details/)
      .click()
      .then(() => {
        cy.contains(/Location Name/).should('be.visible');
      });
  });
});
