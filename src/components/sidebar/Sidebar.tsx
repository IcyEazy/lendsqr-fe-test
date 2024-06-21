import React from "react";
import styles from "./sidebar.module.scss";
import {
  ArrowRight,
  BadgePercent,
  Bank,
  Briefcase,
  ChartBar,
  ClipBoard,
  CoinsSolid,
  Galaxy1,
  Handshake,
  Home1,
  Loan,
  PiggyBank,
  Preferences,
  Sack1,
  Scroll1,
  SignOut,
  Tire,
  Transaction,
  UserCheck,
  UserCog1,
  UserFriends,
  UserTimes1,
  Users1,
} from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";

const customers = [
  {
    id: 1,
    title: "Users",
    icon: UserFriends,
    link: "users",
  },
  {
    id: 2,
    title: "Guarantors",
    icon: Users1,
    link: "guarantors",
  },
  {
    id: 3,
    title: "Loans",
    icon: Sack1,
    link: "loans",
  },
  {
    id: 4,
    title: "Decision Models",
    icon: Handshake,
    link: "decision-models",
  },
  {
    id: 5,
    title: "Savings",
    icon: PiggyBank,
    link: "savings",
  },
  {
    id: 6,
    title: "Loan Requests",
    icon: Loan,
    link: "loan-requests",
  },
  {
    id: 7,
    title: "Whitelist",
    icon: UserCheck,
    link: "whitelist",
  },
  {
    id: 8,
    title: "Karma",
    icon: UserTimes1,
    link: "karma",
  },
];

const businesses = [
  {
    id: 1,
    title: "Organization",
    icon: Briefcase,
    link: "organization",
  },
  {
    id: 2,
    title: "Loan Products",
    icon: Loan,
    link: "loan-products",
  },
  {
    id: 3,
    title: "Savings Products",
    icon: Bank,
    link: "savings-products",
  },
  {
    id: 4,
    title: "Fees and Charges",
    icon: CoinsSolid,
    link: "fees-and-charges",
  },
  {
    id: 5,
    title: "Transactions",
    icon: Transaction,
    link: "transactions",
  },
  {
    id: 6,
    title: "Services",
    icon: Galaxy1,
    link: "services",
  },
  {
    id: 7,
    title: "Service Account",
    icon: UserCog1,
    link: "service-account",
  },
  {
    id: 8,
    title: "Settlements",
    icon: Scroll1,
    link: "settlements",
  },
  {
    id: 9,
    title: "Reports",
    icon: ChartBar,
    link: "reports",
  },
];

const settings = [
  {
    id: 1,
    title: "Preferences",
    icon: Preferences,
    link: "preferences",
  },
  {
    id: 2,
    title: "Fees and Pricing",
    icon: BadgePercent,
    link: "fees-and-pricing",
  },
  {
    id: 3,
    title: "Audit Logs",
    icon: ClipBoard,
    link: "audit-logs",
  },
  {
    id: 4,
    title: "Systems Messages",
    icon: Tire,
    link: "systems-messages",
  },
];

const Sidebar = () => {
  const pathName = useLocation().pathname;
  const active = pathName.split("/")[1];

  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.switch}>
          <Briefcase />
          <p>Switch Organization</p>
          <span>
            <ArrowRight />
          </span>
        </div>
        <div className={styles.dashboard}>
          <Home1 />
          <p>Dashboard</p>
        </div>
        <div className={styles.dashboard_items}>
          <p>customers</p>
          <div className={styles.items}>
            {customers.map((customer, index) => (
              <div
                key={index}
                className={`${
                  active === customer.link ? styles.item_active : styles.item
                } ${
                  active === "dashboard" && index === 0 && styles.item_active
                }`}
              >
                <div>{<customer.icon />}</div>
                <Link to={`/${customer.link}`} className={styles.link}>
                  {customer.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dashboard_items}>
          <p>businesses</p>
          <div className={styles.items}>
            {businesses.map((business, index) => (
              <div
                key={index}
                className={
                  active === business.link ? styles.item_active : styles.item
                }
              >
                <div>{<business.icon />}</div>
                <Link to={`/${business.link}`} className={styles.link}>
                  {business.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dashboard_items}>
          <p>settings</p>
          <div className={styles.items}>
            {settings.map((setting, index) => (
              <div
                key={index}
                className={
                  active === setting.link ? styles.item_active : styles.item
                }
              >
                <div>{<setting.icon />}</div>
                <Link to={`/${setting.link}`} className={styles.link}>
                  {setting.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.logout}>
          <div className={styles.item}>
            <SignOut />
            <Link to={"/"} className={styles.link}>
              Logout
            </Link>
          </div>
          <p>v1.2.0</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
