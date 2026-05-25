import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
  
  
  firstNameField: "[name='firstName']",
  middleNameFiedl: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField:"[placeholder='yyyy-dd-mm']", 
  dateCloseButton: ".--close",
  submmitButton: "[type='submit']"


}
  

  it.only('Login - Success', () => {
    loginPage.acesssLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
     menuPage.accessMyInfo()
   


    
    cy.get(selectorsList.firstNameField).clear().type('firstname')
    cy.get(selectorsList.middleNameFiedl).clear().type('middlename')
    cy.get(selectorsList.lastNameField).clear().type('lastname')
    cy.get(selectorsList.genericField).eq(3).clear().type('employeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('Otherid')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicense')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submmitButton).eq(1).click()



  })
   it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentialAlert)
})
})