class region{

    region_breadcrumb(){
        return cy.get('.breadcrumb.breadcrumb__desktop').children('.address.disabled')
    }
    
}
export default region