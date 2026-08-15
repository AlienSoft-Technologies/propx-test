
import { SEGMENTS } from "../../../support/routes/segments"
import { ROUTES } from "../../../support/routes/routes"

class CreatePropertyPage {

    navigateToCreatePropertyPage() {
        cy.loginAsSuperAdmin()
        cy.visit(ROUTES.app.child(SEGMENTS.APP.PROPERTYMANAGEMENT, SEGMENTS.FACILITIES, SEGMENTS.CREATE))
    }
}

export default new CreatePropertyPage()