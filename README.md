# Agile Tech - ELC Cypress

This project was made to present the main flows in a e-commerce website.

The main flows are:
**Checkout process
**Search and filter

The checkout flow, is the main objective of any e-commerce. Because this flow should guarantee that the final user receives the product and the company receives the payment.

The search and filter flow can define if an user will continue using the e-commerce or not. If someone search/filter for something the e-commerce should present the products if that search term or filter, facilitating the user to find what they want.

Unfortunately, the automation for checkout are not complete, because I don't have any valid test credit card to simulate a complete checkout flow.

## HOW TO INSTALL

1. To run properly the cypress test you need `node` and `npm`
2. After clone the repo to the local environment, in the terminal type `npm ci`.
3. To run locally in a headless browser type `npx cypress test`
4. To run locally in choosing a browser type `npx cypress open`

## GITHUB ACTIONS

This project have the configuration to run all e2e tests every push.
