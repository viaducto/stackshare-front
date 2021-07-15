/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Graphs option', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080).then(() => {
      cy.visit('http://localhost:3000/graphs');
    });
  });

  it('should render properly', () => {
    cy.contains(/Number/g).should('be.visible');
  });

  it('should open graph popover', () => {
    cy.get('div')
      .eq(29)
      .scrollTo(0, 200)
      .then(() => {
        cy.get('rect')
          .eq(15)
          .click()
          .then(() => {
            cy.get('.rv-discrete-color-legend').should('be.visible');
          });
      });
  });

  it('should sort table data', () => {
    cy.get('.dropzone').eq(1).click();
    cy.get('.dropzone').eq(2).click();
    cy.get('.dropzone')
      .eq(3)
      .click()
      .then(() => {
        cy.get('.dropzone').eq(3).click();
      });
  });
});
