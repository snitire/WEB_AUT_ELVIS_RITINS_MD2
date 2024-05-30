import { BasePage } from "../pageObjects/base.page.js";

export class HomePage extends BasePage {
    static get url() {
        return "/";
    }

    static get makeAppointmentBtn() {
        return cy.get("#btn-make-appointment");
    }

    static get facilitySelect() {
        return cy.get("#combo_facility");
    }

    static get applyReadmissionCheckbox() {
        return cy.get("#chk_hospotal_readmission");
    }

    static getBtnByProgram(program) {
        return cy.get("input[value='"+program+"']");
    }

    static get datepickerBtn() {
        return cy.get("#txt_visit_date").parent().find(".input-group-addon");
    }

    static findDatepickerDateByDay(day) {
        return cy.get(".datepicker-days").find(".day").not(".old").not(".new").contains(day);
    }

    static get commentField() {
        return cy.get("#txt_comment");
    }

    static get bookAppointmentBtn() {
        return cy.get("#btn-book-appointment");
    }

    static get menuToggleBtn() {
        return cy.get("#menu-toggle");
    }

    static get sidebarMenu() {
        return cy.get("#sidebar-wrapper");
    }

    static get menuHistoryBtn() {
        return this.sidebarMenu.find("a").contains("History");
    }
}