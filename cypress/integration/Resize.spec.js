/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Testing resize props', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/').then(() => wait(1500));
  });
  it('should render top navbar', () => {
    cy.contains(/Ted Russell/).should('be.visible');
  });
  it('should render bottom navbar', () => {
    cy.viewport(570, 750).then(() => {
      cy.wait(1500).then(() => {
        cy.contains(/Ted Russell/).should('not.be.visible');
      });
    });

    cy.viewport('macbook-16').then(() => {
      cy.wait(1500).then(() => {
        cy.contains(/Ted Russell/).should('be.visible');
      });
    });
  });
  it('should open popover and hide when resize', () => {
    cy.contains(/Ted Russell/)
      .click()
      .then(() => {
        cy.contains(/Mi perfil/).should('be.visible');
        cy.viewport('iphone-x').then(() => {
          cy.contains(/Mi perfil/).should('not.be.visible');
        });
      });
  });
});

describe('Testing sidebar when resize', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/').then(() => wait(1500));
  });
  it('should render open sidebar', () => {
    cy.contains(/Auctions/).should('be.visible');
    cy.viewport('iphone-x')
      .wait(1500)
      .then(() => {
        cy.contains(/Auctions/).should('not.be.visible');
      });
  });
  it('should render closed sidebar', () => {
    cy.viewport('iphone-x')
      .wait(1500)
      .then(() => {
        cy.contains(/Auctions/).should('not.be.visible');
      });
  });
});

describe('Testing notifications', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/').then(() => wait(1500));
  });
  it('should delete notifications', () => {
    cy.get('.notification')
      .eq(0)
      .click()
      .then(() => {
        cy.contains(/Delete all/)
          .click()
          .then(() => {
            cy.contains('.notification').should('not.exist');
          });
      });
    cy.get('#bellIconTitle')
      .click({ force: true })
      .then(() => {
        cy.contains(/Is empty here/).should('be.visible');
      });
  });
});
