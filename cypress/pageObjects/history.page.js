import { BasePage } from "../pageObjects/base.page.js";

export class HistoryPage extends BasePage {
    static get url() {
        return "/history.php";
    }

    static get history() {
        return cy.get("#history");
    }
}