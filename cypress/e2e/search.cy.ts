import { header, searchPage } from "../support/selectors"

describe('Search',()=>{
    const itemsToSearch = [
    {  
        itemState:'exists',
        itemName:'IPHONE',
    },
    {  
        itemState:`doesn't exists`,
        itemName:'wwwddwhgsygegywftwf',
    }
    ]
    beforeEach(()=>{
        cy.visit('www.amazon.com.br')
        cy.get(header.amazonLogo).should('exist')
    })
    itemsToSearch.forEach((item)=>{
        it(`search for an item that ${item.itemState}`,()=>{
            cy.get(header.searchField).type(`${item.itemName}{ENTER}`)
            if(item.itemState==='exists'){
                cy.get(searchPage.searchedText).should('have.text',`"${item.itemName}"`)
                cy.get(searchPage.refinements).should('be.visible')
                cy.get(searchPage.sortByCombobox).should('be.visible')
                cy.get(searchPage.searchResultsQuantity).should('be.visible')
            }else{
                cy.get(searchPage.searchedText).should('not.exist')
                cy.get(searchPage.refinements).should('not.be.visible')
                cy.get(searchPage.sortByCombobox).should('not.exist')
                cy.get(searchPage.searchResultsQuantity).should('not.exist')
                cy.get(searchPage.noResultsTitleText).should('have.text',`Nenhum resultado para ${item.itemName}.`)
                cy.get(searchPage.noResultsSubtitleText).should('have.text','Tente verificar a ortografia ou usar termos mais genéricos');

            }
        })
    })
    it(`filter works as expected`,()=>{
        let length:number=0
        let previousUrl='/'
        
        cy.get('body').then((body)=>{
            length=body.find(header.searchDropdownOption).length
            for(let i=0;i<length;i++){
                cy.log(previousUrl)
                cy.get(header.searchDropdown).select(i,{force:true})
                cy.get(header.searchButton).click();
                cy.url().should('not.be.equal',previousUrl)
                previousUrl=cy.url()

            }            
        })
    })
})