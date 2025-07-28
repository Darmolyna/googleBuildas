/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
before(function () {
    cy.fixture('example').then(function (data) {
        this.data = data
    })
})

Given('I navigate to base URL', function () {
    cy.visit(Cypress.env("baseUrl"))
})
When('I click the Privacy Policy page button', function () {
    cy.get('a').contains('Terms').click()
})

Then('I validate the Privacy Policy page displays', function () {
    cy.get('span').contains('Privacy & Terms').should('exist')
})

When('I click the Business page button', function () {
    cy.get('a').contains('Business').click()
})

Then('I validate the Business page displays', function () {
    cy.get('a').contains('Business Profile').should('exist')
    cy.get('h1').contains('Stand out on Google with a free Business Profile').should('exist')
})