/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Bytebroker Shop', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080).then(() => {
      cy.visit('http://138.197.11.134:3000/shop');
    });
  });

  describe('Store Tab', () => {
    it('should filter data in table', () => {
      cy.get('.input')
        .type('Atlassian')
        .then(() => {
          cy.get(`input[type='checkbox']`)
            .eq(1)
            .check()
            .then(() => {
              cy.get(`input[type='checkbox']`).eq(1).should('be.checked');
            });
        });
    });

    it('should resize table columns', () => {
      cy.get('.resizer').eq(0).move({ force: true, x: -500, position: 'left' });
      cy.get('.resizer').eq(1).move({ force: true, x: -500, position: 'left' });
    });

    it('should open drawer with table', () => {
      cy.get('button')
        .eq(7)
        .click()
        .then(() => {
          cy.contains(/Personal Usage/g).should('be.visible');
          cy.contains(/Add app/g).click();
        });
    });
  });

  describe('My apps tab', () => {
    beforeEach(() => {
      cy.contains(/My apps/g).click();
    });

    it('should render properly', () => {
      cy.contains(/Installed by/g).should('be.visible');
    });

    it('should scroll in billing', () => {
      cy.get('div').eq(81).scrollTo(0, 500);
    });

    it('should open drawer with table', () => {
      cy.contains(/Edit/g)
        .click()
        .then(() => {
          cy.contains(/App configuration/g).should('be.visible');
          cy.get('p').eq(164).next().click();
        });
    });

    it('should open caldendar in drawer', () => {
      cy.contains(/Edit/g)
        .click()
        .then(() => {
          cy.contains(/Configure/g).click();
        });
    });

    it('should go to July in calendar', () => {
      cy.contains(/Edit/g)
        .click()
        .then(() => {
          cy.contains(/Configure/g)
            .click()
            .then(() => {
              cy.get('button')
                .eq(20)
                .click()
                .click()
                .click()
                .then(() => {
                  cy.contains('JULY').should('be.visible');
                });
            });
        });
    });
  });

  describe('Organization Apps tab', () => {
    beforeEach(() => {
      cy.contains(/Organization Apps/g).click();
    });

    it('should change tab in table drawer', () => {
      cy.contains(/Edit/g)
        .click()
        .then(() => {
          cy.contains(/App configuration/g).should('be.visible');
        });
    });
    it('should change input value in second tab', () => {
      cy.contains(/Edit/g)
        .click()
        .then(() => {
          cy.contains(/Group Access/g)
            .click()
            .then(() => {
              cy.get('.input').eq(1).type('Cypress testing is fun');
            });
        });
    });
  });
});
