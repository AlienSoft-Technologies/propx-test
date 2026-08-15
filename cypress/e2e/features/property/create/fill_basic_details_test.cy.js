import basicDetailsPage from '../../../pages/property/create/basic_details_page'

describe('Fill Property Basic Details Test Suite', () => {

    beforeEach(() => {
        basicDetailsPage.navigateToBasicDetailsPage()
    })

    // ── Visibility test ─────────────────────────────────────────────────────────
    it('verifies all basic details form fields are visible', () => {
        basicDetailsPage.nameInputField.should('be.visible')
        basicDetailsPage.typeInputField.should('be.visible')
        basicDetailsPage.typeSelectorToggleBtn.should('be.visible')
        basicDetailsPage.spaceUnitInputField.should('be.visible')
        basicDetailsPage.spaceUnitSelectorToggleBtn.should('be.visible')
        basicDetailsPage.landlordInputField.should('be.visible')
        basicDetailsPage.landlordSelectorToggleBtn.should('be.visible')
        basicDetailsPage.addNewLandlordBtn.should('be.visible')
        basicDetailsPage.currencyInputField.should('be.visible')
        basicDetailsPage.currencySelectorToggleBtn.should('be.visible')
        basicDetailsPage.constructionDateSelector.should('be.visible')
        basicDetailsPage.allocationPriorityMethodInputField.should('be.visible')
        basicDetailsPage.allocationPriorityMethodSelectorToggleBtn.should('be.visible')
        basicDetailsPage.descriptionInputField.should('be.visible')
        basicDetailsPage.backBtn.should('be.visible')
        basicDetailsPage.clearDraftBtn.should('be.visible')
        basicDetailsPage.cancelBtn.should('be.visible')
        basicDetailsPage.nextBtn.should('be.visible')
    })

    // ── Fill / interaction test ─────────────────────────────────────────────────
    // it('fills in the property basic details form', () => {
    //     basicDetailsPage.fillBasicDetails({
    //         name: `${Cypress.generateRandomString(8, 'alphabetic')} Property`,
    //         type: true,
    //         spaceUnit: true,
    //         landlord: true,
    //         currency: true,
    //         allocationPriorityMethod: true,
    //         description: Cypress.generateRandomString(30, 'alphabetic'),
    //     })

    //     basicDetailsPage.nameInputField.should('not.have.value', '')
    //     basicDetailsPage.descriptionInputField.should('not.have.value', '')
    // })

    // ── State / behaviour test ──────────────────────────────────────────────────
    // it('enables the Next button only once the required fields are filled', () => {
    //     basicDetailsPage.nextBtn.should('be.disabled')

    //     basicDetailsPage.fillBasicDetails({
    //         name: `${Cypress.generateRandomString(8, 'alphabetic')} Property`,
    //         type: true,
    //         spaceUnit: true,
    //         landlord: true,
    //         currency: true,
    //     })

    //     basicDetailsPage.nextBtn.should('be.enabled')
    // })

})
