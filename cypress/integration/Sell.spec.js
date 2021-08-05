/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Simple option', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/sell').then(() => wait(1500));
  });
  it('should change inputs values', () => {
    cy.get('input').eq(3).type(10, { force: true });
    cy.get('select')
      .select('Option')
      .then(() => {
        cy.get('input')
          .eq(3)
          .invoke('val')
          .then((value) => {
            expect(value.toString()).eq('10');
          });
        cy.get('input')
          .eq(4)
          .invoke('val')
          .then((value) => {
            expect(value.toString()).eq('95%');
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
          cy.get('input').eq(5).type('Cypress testing', { force: true });
        });
      });
  });
});

describe('Advanced option', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/sell').then(() => wait(1500));
  });

  it('should change to advanced', () => {
    cy.contains(/Advanced/g)
      .click({ force: true })
      .then(() => {
        cy.contains(/Prices and availiability/g).should('be.visible');
      });
  });

  describe('Calendar', () => {
    beforeEach(() => {
      cy.contains(/Advanced/g)
        .click({ force: true })
        .then(() => wait(1500));
    });
    it('should open popover', () => {
      cy.contains(/Uptime/g)
        .eq(0)
        .click({ force: true });

      cy.contains(/Expires by/g).should('be.visible');
    });

    it('should open drawer', () => {
      cy.get('button')
        .eq(3)
        .click({ force: true })
        .then(() => {
          cy.contains(/Time preset/g).should('be.visible');
        });
    });
  });
});
