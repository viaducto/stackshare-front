/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Testing dark mode', () => {
  beforeEach(() => {
    cy.visit('http://138.197.11.134:3000/').then(() => wait(1500));
  });
  it('should change to dark mode', () => {
    cy.get('div').eq(4).should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get(`input[type='checkbox']`).eq(0).check();
    cy.get('div').eq(4).should('have.css', 'background-color', 'rgb(37, 37, 41)');
  });
});
