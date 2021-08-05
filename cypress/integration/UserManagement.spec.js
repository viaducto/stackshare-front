/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('User management', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/organization/5/user-management')
      .wait(1500)
      .then(() => {
        cy.viewport('iphone-x').viewport('iphone-xr');
      });
  });

  it.skip('should open table drawer', () => {
    cy.get('.bare-button').eq(1).click({ force: true });
    cy.get('button').eq(8).click({ force: true });
    cy.contains(/Install/).click({ force: true });
  });
  it('should scroll in drawer', () => {
    cy.get('.bare-button').eq(1).click({ force: true });
    cy.get('button').eq(9).click({ force: true });
    cy.contains(/Edit/)
      .click({ force: true })
      .then(() => {
        cy.contains(/Apps/)
          .click()
          .then(() => {
            cy.get('.hide').eq(0).should('be.visible');
            cy.get('.ref').scrollTo(0, 500);
            cy.contains(/john@doe.com/).should('not.be.visible');
          });
      });
  });
});
