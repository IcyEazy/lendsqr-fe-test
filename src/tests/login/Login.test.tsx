import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import LoginPage from "../../pages/login";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("LoginPage", () => {
  const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="*" element={ui} />
        </Routes>
      </MemoryRouter>
    );
  };

  test("should render login page correctly", () => {
    renderWithRouter(<LoginPage />);

    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
    expect(screen.getByText(/Enter details to login./i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Forget Password?/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
  });

  test("should validate email input", () => {
    renderWithRouter(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);

    expect(screen.getByTestId("email-error")).toBeInTheDocument();
  });

  test("should validate password input", () => {
    renderWithRouter(<LoginPage />);

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.blur(passwordInput);

    expect(screen.getByTestId("password-error")).toBeInTheDocument();
  });

  test("should show and hide password depending if the show/hide option is clicked", () => {
    renderWithRouter(<LoginPage />);

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const showHideButton = screen.getByText(/Show/i);

    // Initially, the password should be hidden
    expect(passwordInput).toHaveAttribute("type", "password");

    // Click the show button to show the password
    fireEvent.click(showHideButton);
    expect(passwordInput).toHaveAttribute("type", "text");
    expect(screen.getByText(/Hide/i)).toBeInTheDocument();

    // Click the hide button to hide the password again
    fireEvent.click(showHideButton);
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(screen.getByText(/Show/i)).toBeInTheDocument();
  });

  test("should show error messages for both email and password for empty fields on form submission", () => {
    renderWithRouter(<LoginPage />);

    const submitButton = screen.getByText(/Log in/i);
    fireEvent.click(submitButton);

    expect(screen.getByTestId("email-error")).toBeInTheDocument();
    expect(screen.getByTestId("password-error")).toBeInTheDocument();
  });
});
