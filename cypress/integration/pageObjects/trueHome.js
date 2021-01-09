class trueHome{

    region_drpdwn() {
        return cy.get('.navbar__option-text').contains('ภูมิภาค')
    }
    
    region_bkk(){
        return cy.get('a[href="https://cities.trueid.net/bangkok"]')
    }
}
export default trueHome