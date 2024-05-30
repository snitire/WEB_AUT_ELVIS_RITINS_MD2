import { AppointmentConfirmPage } from "../pageObjects/appointmentconfirm.page";
import { HistoryPage } from "../pageObjects/history.page";
import { HomePage } from "../pageObjects/home.page";
import { LoginPage } from "../pageObjects/login.page";

describe('CURA Healthcare website scenarios', () => {
  context("Appointments", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Make an appointment", () => {
      // Log in with demo account
      HomePage.makeAppointmentBtn.click();
      LoginPage.doLogin();

      // Create an appointment
      HomePage.facilitySelect.select("Seoul CURA Healthcare Center");
      HomePage.applyReadmissionCheckbox.click();
      HomePage.getBtnByProgram("Medicaid").click();
      HomePage.datepickerBtn.click();
      HomePage.findDatepickerDateByDay("30").click();
      // Force the datepicker to close
      HomePage.commentField.click('topRight');
      HomePage.commentField.type("CURA Healthcare Service");
      HomePage.bookAppointmentBtn.click();

      // Validate appointment details
      // Get today's date but with the day replaced with 30
      // to validate selected date
      let correctDate = new Date(Date.now()).toLocaleDateString('en-GB');
      correctDate = correctDate.split("/");
      correctDate[0] = "30";
      correctDate = correctDate.join("/");

      AppointmentConfirmPage.facility.should("have.text","Seoul CURA Healthcare Center")
      AppointmentConfirmPage.applyReadmission.should("have.text","Yes")
      AppointmentConfirmPage.program.should("have.text","Medicaid")
      AppointmentConfirmPage.date.should("have.text",correctDate)
      AppointmentConfirmPage.comment.should("have.text","CURA Healthcare Service")
    });

    it("Check that appointment history is empty", () => {
      HomePage.makeAppointmentBtn.click();
      LoginPage.doLogin();

      HomePage.menuToggleBtn.click();
      HomePage.sidebarMenu.should("have.class", "active");
      HomePage.menuHistoryBtn.click();
      HistoryPage.history.should("contain.text", "No appointment");
    });
  });
})