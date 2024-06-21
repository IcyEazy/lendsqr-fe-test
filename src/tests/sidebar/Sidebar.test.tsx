import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../../components";

describe("Sidebar", () => {
  const renderWithRouter = (ui: any, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="*" element={ui} />
        </Routes>
      </MemoryRouter>
    );
  };

  test("should render the Sidebar correctly", () => {
    renderWithRouter(<Sidebar />, { route: "/dashboard" });

    expect(screen.getByText(/Switch Organization/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/customers/i)).toBeInTheDocument();
    expect(screen.getByText(/businesses/i)).toBeInTheDocument();
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

  test("should render all the customer links and their correct hrefs", () => {
    renderWithRouter(<Sidebar />, { route: "/dashboard" });

    const customerLinks = [
      "Users",
      "Guarantors",
      "Loans",
      "Decision Models",
      "Savings",
      "Loan Requests",
      "Whitelist",
      "Karma",
    ];
    const customerLinksUrl = [
      "/users",
      "/guarantors",
      "/loans",
      "/decision-models",
      "/savings",
      "/loan-requests",
      "/whitelist",
      "/karma",
    ];
    customerLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
      expect(screen.getByText(link)).toHaveAttribute(
        "href",
        customerLinksUrl[customerLinks.indexOf(link)]
      );
    });
  });

  test("should render all the business links and their hrefs", () => {
    renderWithRouter(<Sidebar />, { route: "/dashboard" });

    const businessLinks = [
      "Organization",
      "Loan Products",
      "Savings Products",
      "Fees and Charges",
      "Transactions",
      "Services",
      "Service Account",
      "Settlements",
      "Reports",
    ];
    const businessLinksUrls = [
      "/organization",
      "/loan-products",
      "/savings-products",
      "/fees-and-charges",
      "/transactions",
      "/services",
      "/service-account",
      "/settlements",
      "/reports",
    ];
    businessLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
      expect(screen.getByText(link)).toHaveAttribute(
        "href",
        businessLinksUrls[businessLinks.indexOf(link)]
      );
    });
  });

  test("should render all the setting links and their hrefs", () => {
    renderWithRouter(<Sidebar />, { route: "/dashboard" });

    const settingLinks = [
      "Preferences",
      "Fees and Pricing",
      "Audit Logs",
      "Systems Messages",
    ];
    const settingLinksUrls = [
      "/preferences",
      "/fees-and-pricing",
      "/audit-logs",
      "/systems-messages",
    ];
    settingLinks.forEach((link) => {
      expect(screen.getByText(new RegExp(link, "i"))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(link, "i"))).toHaveAttribute(
        "href",
        settingLinksUrls[settingLinks.indexOf(link)]
      );
    });
  });

  test("should render the logout link and version text", () => {
    renderWithRouter(<Sidebar />, { route: "/dashboard" });

    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    expect(screen.getByText(/v1.2.0/i)).toBeInTheDocument();
  });
});
