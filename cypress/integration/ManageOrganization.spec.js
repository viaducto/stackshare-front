/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Testing Location Management', () => {
  describe('Overview', () => {
    beforeEach(() => {
      cy.visit('http://138.197.11.134:3000/organization/10/manage')
        .wait(1500)
        .then(() => {
          cy.viewport(550, 739);
        });
    });

    it('should scroll div', () => {
      cy.get('div').eq(83).scrollTo(0, 500);
    });

    it('should change input values', () => {
      cy.get(`input[type='text']`)
        .eq(0)
        .clear({ force: true })
        .then(() => {
          cy.get(`input[type='text']`).eq(0).type('Cypress', { force: true });
          cy.get(`input[type='text']`)
            .eq(1)
            .clear({ force: true })
            .then(() => {
              cy.get(`input[type='text']`).eq(1).type('Testing', { force: true });
            });
          cy.get(`input[type='text']`)
            .eq(2)
            .clear({ force: true })
            .then(() => {
              cy.get(`input[type='text']`).eq(2).type('is fun', { force: true });
            });
        });
    });
  });
  describe('Security', () => {
    beforeEach(() => {
      cy.visit('http://138.197.11.134:3000/organization/10/manage').then(() => {
        cy.contains(/Security/)
          .click()
          .wait(1500)
          .then(() => {
            cy.viewport('iphone-x');
          });
      });
    });
    it('should disable the first switch', () => {
      cy.get(`input[type='checkbox']`)
        .eq(1)
        .uncheck({ force: true })
        .then(() => {
          cy.get(`input[type='checkbox']`).should('be.checked');
        });
    });
  });
  describe('Brand Localization', () => {
    beforeEach(() => {
      cy.visit('http://138.197.11.134:3000/organization/10/manage').then(() => {
        cy.contains(/Brand Localization/)
          .click()
          .wait(1500)
          .then(() => {
            cy.viewport('iphone-x');
          });
      });
    });
    it('should change palette color', () => {
      cy.get('div')
        .eq(83)
        .scrollTo(0, 550)
        .then(() => {
          cy.get(`input[type='radio']`).eq(2).click();
        });
    });
  });
});
