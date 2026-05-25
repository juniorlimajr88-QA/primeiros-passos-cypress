import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import InfoPage from '../pages/InfoPage.js'

const Chance = require('chance');
const chance = new Chance();

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const infoPage = new InfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.acesssLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    infoPage.fillPersonalDetails(chance.first(), 'middlename', chance.last())
    infoPage.fillEmployeeDetails('employeeId', 'Otherid', '123456', '1988-03-02')
    infoPage.saveForm()

  })

})