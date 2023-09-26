import { cartPage, checkout, header, loginPage, productCard, productDetailsPage, searchPage } from "../support/selectors"

describe('Checkout',()=>{
    const itemToBuy = 'PLAYSTATION 5'
    beforeEach(()=>{
        cy.visit('www.amazon.com.br')
        cy.get(header.amazonLogo).should('exist')
        cy.get(header.searchField).type(`${itemToBuy}{ENTER}`)     
        cy.get(searchPage.searchedText).should('have.text',`"${itemToBuy}"`)
    })

    it(`should present the login page if the user clicks on the "Proceed to checkout" button not logged in`,()=>{
        cy.get(searchPage.refinements).should('be.visible')
        cy.get(searchPage.sortByCombobox).should('be.visible')
        cy.get(searchPage.searchResultsQuantity).should('be.visible')
        cy.get(productCard.image).eq(0).click()
        cy.get(header.cartCount).should('have.text',0)
        cy.get(productDetailsPage.addToCartButton).click()
        cy.get(header.cartCount).should('have.text',1)
        cy.get(checkout.proceedToCheckoutButton).click()
        cy.get(loginPage.emailField).should('be.visible')
    })
    it(`should present the login page if the user clicks on the "Buy Now" button not logged in`,()=>{
        cy.get(searchPage.refinements).should('be.visible')
        cy.get(searchPage.sortByCombobox).should('be.visible')
        cy.get(searchPage.searchResultsQuantity).should('be.visible')
        cy.get(productCard.image).eq(0).click()
        cy.get(header.cartCount).should('have.text',0)
        cy.get(productDetailsPage.buyNowButton).click()
        cy.get(loginPage.emailField).should('be.visible')
    })
    it.only(`should present cart page when the user to "Go to Cart" button`,()=>{
        cy.get(searchPage.refinements).should('be.visible')
        cy.get(searchPage.sortByCombobox).should('be.visible')
        cy.get(searchPage.searchResultsQuantity).should('be.visible')
        cy.get(productCard.image).eq(0).click()
        cy.get(header.cartCount).should('have.text',0)
        cy.get(productDetailsPage.addToCartButton).click()
        cy.get(header.cartCount).should('have.text',1)
        cy.get(checkout.goToCart).click()
        cy.get(cartPage.cartItems).should('be.visible')
        cy.get(checkout.proceedToCheckoutButton).click()
        cy.get(loginPage.phoneField).should('be.visible')
    })
})