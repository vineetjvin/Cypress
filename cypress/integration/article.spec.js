import TrueHome from "./pageObjects/trueHome"
import Region from "./pageObjects/region"

context('trueCitiesHome', () => {
  const trueHome = new TrueHome()
  const region = new Region()

  beforeEach(() => {
    cy.visit('https://cities.trueid.net')
    trueHome.region_drpdwn().click()
    trueHome.region_bkk().click()
  })


  it('verify region is bangkok', () => {
    region.region_breadcrumb().should('have.text','กรุงเทพฯ')
  })

  
})

  

