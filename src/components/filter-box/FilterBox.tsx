import React, { ChangeEvent, useState } from "react";
import { ArrowRight } from "../../assets/icons";
import styles from "./filter.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { setFilter } from "../../redux/filter/Filter";

const FilterBox = ({
  setOpenFilter,
}: {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openOrganizationDropdown, setOpenOrganizationDropdown] =
    useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [openStatusDropdown, setOpenStatusDropdown] = useState(false);
  const [status, setStatus] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleOrganizationChange = (org: string) => {
    setSelectedOrganization(org);
    // dispatch(setFilter({ organization: org }));
    setOpenOrganizationDropdown(false);
  };
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    // dispatch(setFilter({ username: event.target.value }));
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // dispatch(setFilter({ email: event.target.value }));
  };
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    // dispatch(setFilter({ date: event.target.value }));
  };
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
    // dispatch(setFilter({ phoneNumber: event.target.value }));
  };
  const handleStatusChange = (status: string) => {
    setStatus(status);
    // dispatch(setFilter({ status: status }));
    setOpenStatusDropdown(false);
  };

  const resetFilters = () => {
    setSelectedOrganization("");
    dispatch(setFilter({ organization: "" }));
    setUsername("");
    dispatch(setFilter({ username: "" }));
    setEmail("");
    dispatch(setFilter({ email: "" }));
    setDate("");
    dispatch(setFilter({ date: "" }));
    setPhoneNumber("");
    dispatch(setFilter({ phoneNumber: "" }));
    setStatus("");
    dispatch(setFilter({ status: "" }));
    setOpenFilter(false);
  };

  const applyFilters = () => {
    // Apply filters to the data
    dispatch(
      setFilter({
        organization: selectedOrganization,
        username,
        email,
        date,
        phoneNumber,
        status,
      })
    );
    setOpenFilter(false);
  };

  return (
    <div className={styles.filters_container}>
      <div className={styles.box}>
        <label htmlFor="organization">Organization</label>
        <div
          onClick={() => setOpenOrganizationDropdown(!openOrganizationDropdown)}
          className={styles.dropdown_input}
        >
          <input
            type="text"
            id="organization"
            placeholder="Select"
            value={selectedOrganization}
            readOnly
          />
          <span
            className={
              openOrganizationDropdown ? styles.arrow_up : styles.arrow_down
            }
          >
            <ArrowRight />
          </span>
        </div>
        {openOrganizationDropdown && (
          <div className={styles.org_dropdown_options}>
            {["Lendsqr", "Lendstar", "Irorun"].map((org, index) => {
              return (
                <p key={index} onClick={() => handleOrganizationChange(org)}>
                  {org}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.box}>
        <label htmlFor="username">Username</label>
        <div className={styles.input}>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="User"
          />
        </div>
      </div>
      <div className={styles.box}>
        <label htmlFor="email">Email</label>
        <div className={styles.input}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </div>
      </div>
      <div className={styles.box}>
        <label htmlFor="date">Date</label>
        <div className={styles.input}>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            placeholder="date"
          />
        </div>
      </div>
      <div className={styles.box}>
        <label htmlFor="phone_number">Phone Number</label>
        <div className={styles.input}>
          <input
            type="text"
            id="phone_number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className={styles.box}>
        <label htmlFor="status">status</label>
        <div
          onClick={() => setOpenStatusDropdown(!openStatusDropdown)}
          className={styles.dropdown_input}
        >
          <input
            type="text"
            id="status"
            placeholder="Status"
            value={status}
            readOnly
          />
          <span
            className={openStatusDropdown ? styles.arrow_up : styles.arrow_down}
          >
            <ArrowRight />
          </span>
        </div>
        {openStatusDropdown && (
          <div className={styles.org_dropdown_options}>
            {["Pending", "Inactive", "Active", "Blacklisted"].map(
              (status, index) => {
                return (
                  <p key={index} onClick={() => handleStatusChange(status)}>
                    {status}
                  </p>
                );
              }
            )}
          </div>
        )}
      </div>
      <div className={styles.btns}>
        <button
          onClick={resetFilters}
          type="button"
          className={styles.reset_btn}
        >
          Reset
        </button>
        <button
          onClick={applyFilters}
          type="button"
          className={styles.filter_btn}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
