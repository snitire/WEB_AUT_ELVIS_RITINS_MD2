import { BasePage } from "../pageObjects/base.page.js";

export class LoginPage extends BasePage {
    static get url() {
        return "/profile.php#login";
    }

    static get demoUsername() {
        return cy.get("#demo_username_label").parent()
        .find("input")
        .invoke("val")
    }

    static get usernameInput() {
        return cy.get("#txt-username");
    }

    static get demoPassword() {
        return cy.get("#demo_password_label").parent()
        .find("input")
        .invoke("val")
    }

    static get passwordInput() {
        return cy.get("#txt-password");
    }

    static get loginBtn() {
        return cy.get("#btn-login");
    }

    static doLogin() {
        LoginPage.demoUsername.then((username) => {
            LoginPage.usernameInput.type(username);
        });
    
        LoginPage.demoPassword.then((password) => {
            LoginPage.passwordInput.type(password);
        });
    
        LoginPage.loginBtn.click();
    }
}