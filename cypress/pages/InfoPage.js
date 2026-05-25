class InfoPage {

    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField:"[placeholder='yyyy-dd-mm']", 
            dateCloseButton: ".--close",
            submmitButton: "[type='submit']"


        }
        
        return selectors

    
        }

        fillPersonalDetails(firstname, middleName, lastName) {
            cy.get(this.selectorsList().firstNameField).clear().type(firstname)
            cy.get(this.selectorsList().middleNameField).clear().type(middleName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        }

        fillEmployeeDetails(employeeId, Otherid, DriverLicenseNumber, dateField) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(Otherid)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(DriverLicenseNumber)
            cy.get(this.selectorsList().dateField).eq(0).clear().type(dateField)
            cy.get(this.selectorsList().dateCloseButton).click()
        }

            saveForm() {
            cy.get(this.selectorsList().submmitButton).eq(1).click({force: true})
            }
}
    export default InfoPage