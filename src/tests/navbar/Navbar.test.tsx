import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Navbar } from "../../components";
import store from "../../redux/store";

describe("Navbar", () => {
  test("should render Navbar on non-root pathname", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]} initialIndex={0}>
          <Navbar screenWidth={800} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  test("should not render Navbar on root pathname", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <Navbar screenWidth={800} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument();
  });

  test("should updates search input value on change", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]} initialIndex={0}>
          <Navbar screenWidth={800} />
        </MemoryRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: "test search" } });

    expect(searchInput).toHaveValue("test search");
  });

  test("Logo and Bell icon sizes change based on screen width", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]} initialIndex={0}>
          <Navbar screenWidth={500} />
        </MemoryRouter>
      </Provider>
    );

    const logo = screen.getByTestId("logo");
    const notification_icon = screen.getByTestId("notification");

    expect(logo).toHaveAttribute("width", "80");
    expect(notification_icon).toHaveAttribute("width", "18");
    expect(notification_icon).toHaveAttribute("height", "18");
  });
});
