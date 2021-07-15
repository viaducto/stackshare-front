/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Menu Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should render properly', () => {
    cy.contains(/Auctions/g).should('be.visible');
  });

  it('should open a dropdown', () => {
    cy.contains(/Auctions/g)
      .click()
      .then(() => {
        cy.contains(/Buy parameters/g).should('be.visible');
        cy.contains(/Sell parameters/g).should('be.visible');
        cy.contains(/B2B/g).should('be.visible');
      });
  });

  it('should go to another page', () => {
    cy.contains(/Graphs/g)
      .click()
      .then(() => {
        cy.contains(/Numbers/g);
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/graphs');
        });
      });
  });

  it('should hide and show the menu', () => {
    cy.get('.bare-button')
      .click()
      .then(() => {
        cy.contains(/Graphs/g).should('not.be.visible');
        cy.get('.bare-button')
          .click()
          .then(() => {
            cy.contains(/Graphs/g).should('be.visible');
          });
      });
  });
});
