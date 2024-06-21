import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LoadingSpinner, Navbar } from "./components";
import "./App.css";

const LoginPage = lazy(() => import("./pages/login"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const UsersPage = lazy(() => import("./pages/users"));
const UserDetailsPage = lazy(() => import("./pages/user-details"));

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Navbar screenWidth={screenWidth} />
      <Suspense
        fallback={
          <div className="fallback">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/user-details/:id" element={<UserDetailsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
