/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Buy parameters', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://138.197.11.134:3000/buy').then(() => cy.wait(1500));
  });

  it('should open new bid drawer', () => {
    cy.get('button').eq(3).click({ force: true });
    cy.contains(/Bid type/).should('be.visible');
  });

  it('should change new bid input', () => {
    cy.get('button')
      .eq(3)
      .click({ force: true })
      .then(() => {
        cy.get('.input').eq(0).type('2021-12-12');
        cy.get('.input').eq(1).clear().type('1000');
        cy.get('.input').eq(2).should('be.disabled');
        cy.get(`input[type='radio']`)
          .eq(1)
          .click({ force: true })
          .then(() => {
            cy.get('.input').eq(2).should('not.be.disabled');
            cy.get('.input').eq(2).type('12:30');
          });
        cy.get('.input').eq(3).type('2021-12-12');
        cy.get('.input').eq(4).type('2021-12-12');
        cy.get(`input[type='radio']`)
          .eq(3)
          .click({ force: true })
          .then(() => {
            cy.get('.input').eq(5).clear().type('100');
          });
        cy.get(`input[type='radio']`)
          .eq(5)
          .click({ force: true })
          .then(() => {
            cy.get('.input').eq(6).clear().type('Cypress limit order');
          });
      });
  });

  it('should select a row in table', () => {
    cy.get(`input[type='checkbox']`)
      .eq(2)
      .click({ force: true })
      .then(() => {
        cy.get(`input[type='checkbox']`).eq(2).should('be.checked');
      });
  });

  it('should open row details', () => {
    cy.get('button').eq(6).click({ force: true });
    cy.contains('See details').click({ force: true });
    cy.contains(/Pending/g).should('be.visible');
    cy.contains(/24hrs/g).should('be.visible');
  });

  it('should resize columns in table', () => {
    cy.get('.resizer').eq(1).move({ force: true, x: -100, position: 'right' });
    cy.get('.resizer').eq(2).move({ force: true, x: -100, position: 'right' });
    cy.get('.resizer').eq(3).move({ force: true, x: -100, position: 'right' });
  });
});
