
import createPropertyPage from '../create_property_page'

const selectors = {
    nameInputField: () => cy.get('[data-cy="property-create-name-input"]'),
    typeInputField: () => cy.get('[data-cy="property-create-type-select-input"]'),
    typeSelectorToggleBtn: () => cy.get('[data-cy="property-create-type-select-toggle-btn"]'),
    spaceUnitInputField: () => cy.get('[data-cy="property-create-space-unit-select-input"]'),
    spaceUnitSelectorToggleBtn: () => cy.get('[data-cy="property-create-space-unit-select-toggle-btn"]'),
    landlordInputField: () => cy.get('[data-cy="property-create-landlord-select-input"]'),
    landlordSelectorToggleBtn: () => cy.get('[data-cy="property-create-landlord-select-toggle-btn"]'),
    addNewLandlordBtn: () => cy.get('[data-cy="property-create-add-new-landlord-btn"]'),
    currencyInputField: () => cy.get('[data-cy="property-create-currency-select-input"]'),
    currencySelectorToggleBtn: () => cy.get('[data-cy="property-create-currency-select-toggle-btn"]'),
    constructionDateSelector: () => cy.get('[data-cy="popover-trigger"]'),
    allocationPriorityMethodInputField: () => cy.get('[data-cy="property-create-allocation-priority-method-select-input"]'),
    allocationPriorityMethodSelectorClearBtn: () => cy.get('[data-cy="property-create-allocation-priority-method-select-clear-btn"]'),
    allocationPriorityMethodSelectorToggleBtn: () => cy.get('[data-cy="property-create-allocation-priority-method-select-toggle-btn"]'),
    descriptionInputField: () => cy.get('[data-cy="property-create-description-textarea"]'),
    backBtn: () => cy.get('[data-cy="property-create-back-btn"]'),
    clearDraftBtn: () => cy.get('[data-cy="property-create-clear-draft-btn"]'),
    cancelBtn: () => cy.get('[data-cy="property-create-cancel-btn"]'),
    nextBtn: () => cy.get('[data-cy="property-create-next-btn"]'),
}

class BasicDetailsPage {

    get nameInputField() { return selectors.nameInputField().scrollIntoView() }
    get typeInputField() { return selectors.typeInputField().scrollIntoView() }
    get typeSelectorToggleBtn() { return selectors.typeSelectorToggleBtn().scrollIntoView() }
    get spaceUnitInputField() { return selectors.spaceUnitInputField().scrollIntoView() }
    get spaceUnitSelectorToggleBtn() { return selectors.spaceUnitSelectorToggleBtn().scrollIntoView() }
    get landlordInputField() { return selectors.landlordInputField().scrollIntoView() }
    get landlordSelectorToggleBtn() { return selectors.landlordSelectorToggleBtn().scrollIntoView() }
    get addNewLandlordBtn() { return selectors.addNewLandlordBtn().scrollIntoView() }
    get currencyInputField() { return selectors.currencyInputField().scrollIntoView() }
    get currencySelectorToggleBtn() { return selectors.currencySelectorToggleBtn().scrollIntoView() }
    get constructionDateSelector() { return selectors.constructionDateSelector().scrollIntoView() }
    get allocationPriorityMethodInputField() { return selectors.allocationPriorityMethodInputField().scrollIntoView() }
    get allocationPriorityMethodSelectorClearBtn() { return selectors.allocationPriorityMethodSelectorClearBtn().scrollIntoView() }
    get allocationPriorityMethodSelectorToggleBtn() { return selectors.allocationPriorityMethodSelectorToggleBtn().scrollIntoView() }
    get descriptionInputField() { return selectors.descriptionInputField().scrollIntoView() }
    get backBtn() { return selectors.backBtn().scrollIntoView() }
    get clearDraftBtn() { return selectors.clearDraftBtn().scrollIntoView() }
    get cancelBtn() { return selectors.cancelBtn().scrollIntoView() }
    get nextBtn() { return selectors.nextBtn().scrollIntoView() }

    navigateToBasicDetailsPage() {
        createPropertyPage.navigateToCreatePropertyPage()
    }

    // ── Dedicated fill methods ──────────────────────────────────────────────

    fillPropertyName(name) {
        this.nameInputField.clear().type(name)
    }

    fillDescription(description) {
        this.descriptionInputField.clear().type(description)
    }

    // ── Dedicated dropdown selection methods ────────────────────────────────

    selectPropertyType(query) {
        this.typeSelectorToggleBtn.click()
        cy.selectDropdownItem(query)
    }

    selectSpaceUnit(query) {
        this.spaceUnitSelectorToggleBtn.click()
        cy.selectDropdownItem(query)
    }

    selectLandlord(query) {
        this.landlordSelectorToggleBtn.click()
        cy.selectDropdownItem(query)
    }

    clickAddNewLandlordButton() {
        this.addNewLandlordBtn.click()
    }

    selectReportingCurrency(query) {
        this.currencySelectorToggleBtn.click()
        cy.selectDropdownItem(query)
    }

    selectAllocationPriorityMethod(query) {
        this.allocationPriorityMethodSelectorToggleBtn.click()
        cy.selectDropdownItem(query)
    }

    clearAllocationPriorityMethod() {
        this.allocationPriorityMethodSelectorClearBtn.click()
    }

    // ── Dedicated date-picker methods ───────────────────────────────────────

    openConstructionDatePicker() {
        this.constructionDateSelector.click()
    }

    selectConstructionDate(day = 1, month, year) {
        this.openConstructionDatePicker()
        cy.selectDate(day, month, year)
    }

    // ── Button methods ───────────────────────────────────────────────────────

    clickBackButton() {
        this.backBtn.click()
    }

    clickClearDraftButton() {
        this.clearDraftBtn.click()
    }

    clickCancelButton() {
        this.cancelBtn.click()
    }

    clickNextButton() {
        this.nextBtn.click()
    }

    // ── Composite methods ────────────────────────────────────────────────────

    fillBasicDetails({ name, type, spaceUnit, landlord, currency, constructionDate, allocationPriorityMethod, description } = {}) {
        if (name) this.fillPropertyName(name)
        if (type) this.selectPropertyType(type === true ? undefined : type)
        if (spaceUnit) this.selectSpaceUnit(spaceUnit === true ? undefined : spaceUnit)
        if (landlord) this.selectLandlord(landlord === true ? undefined : landlord)
        if (currency) this.selectReportingCurrency(currency === true ? undefined : currency)
        if (constructionDate) this.selectConstructionDate(constructionDate.day, constructionDate.month, constructionDate.year)
        if (allocationPriorityMethod) this.selectAllocationPriorityMethod(allocationPriorityMethod === true ? undefined : allocationPriorityMethod)
        if (description) this.fillDescription(description)
    }
}

export default new BasicDetailsPage()
