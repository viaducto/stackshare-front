/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Testing Location Management', () => {
  beforeEach(() => {
    cy.viewport(550, 739).then(() => {
      cy.visit('http://138.197.11.134:3000/organization/10/manage').wait(1500);
    });
  });

  it('should scroll div', () => {
    cy.get('div').eq(83).scrollTo(0, 500);
  });
});
