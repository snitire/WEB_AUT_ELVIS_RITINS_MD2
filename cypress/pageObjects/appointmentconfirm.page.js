import { BasePage } from "../pageObjects/base.page.js";

export class AppointmentConfirmPage extends BasePage {
    static get url() {
        return "/appointment.php";
    }

    static get facility() {
        return cy.get("#facility");
    }

    static get applyReadmission() {
        return cy.get("#hospital_readmission");
    }

    static get program() {
        return cy.get("#program");
    }

    static get date() {
        return cy.get("#visit_date");
    }

    static get comment() {
        return cy.get("#comment");
    }
}