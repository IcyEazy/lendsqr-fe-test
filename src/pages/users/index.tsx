import React, { useEffect, useState } from "react";
import styles from "./users.module.scss";
import {
  FilterBox,
  LoadingSpinner,
  Pagination,
  Sidebar,
} from "../../components";
import {
  ArrowRight,
  FilterResults,
  IcMoreVertical,
  NpDelete,
  NpLoan,
  NpMoney,
  NpUser,
  NpUsers,
  NpUsersB,
  NpView,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../api/Users";
import { useAppSelector } from "../../redux/hooks";
import { selectSearch } from "../../redux/search/searchSlice";
import { convertDate } from "../../helper";
import { selectFilter } from "../../redux/filter/Filter";

export default function Users() {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openMoreActions, setOpenMoreOptions] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(9);

  const navigate = useNavigate();
  const searchValue = useAppSelector(selectSearch);
  const filterValues = useAppSelector(selectFilter);

  // Fetch users from API
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res);
      setIsLoading(false);
    });
  }, []);

  //Filter users based on the filter values
  const filterValueUsers = users.filter((user: any) => {
    return (
      (!filterValues.organization ||
        user.organization
          .toLowerCase()
          .includes(filterValues.organization.toLowerCase())) &&
      (!filterValues.username ||
        user.fullName
          .toLowerCase()
          .includes(filterValues.username.toLowerCase())) &&
      (!filterValues.email ||
        user.emailAddress
          .toLowerCase()
          .includes(filterValues.email.toLowerCase())) &&
      (!filterValues.date ||
        user.dateJoined
          .toLowerCase()
          .includes(filterValues.date.toLowerCase())) &&
      (!filterValues.phoneNumber ||
        user.phoneNumber
          .toString()
          .includes(filterValues.phoneNumber.toString())) &&
      (!filterValues.status ||
        user.status.toLowerCase().includes(filterValues.status.toLowerCase()))
    );
  });

  // Filter users based on search value
  const filteredUsers = searchValue
    ? filterValueUsers.filter((user: any) => {
        return (
          user?.fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
          user?.emailAddress
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          user?.organization
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          convertDate(user?.dateJoined)
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          user?.status.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
    : filterValueUsers;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nPages = Math.ceil(users.length / usersPerPage);

  // Stores the clicked user in the local storage and redirects to user details page
  const handleUserClick = (user: any) => {
    localStorage.setItem("userDetails", JSON.stringify(user));
    // Navigate to user details page
    navigate(`/user-details/${user._id}`);
  };

  const activeUsers = users.filter((user: any) => {
    return user?.status?.toLowerCase() === "active";
  });
  const usersWithLoans = users.filter((user: any) => {
    return user?.loan?.toLowerCase() === "yes";
  });
  const usersWithSavings = users.filter((user: any) => {
    return user?.savings?.toLowerCase() === "yes";
  });

  const header_content = [
    {
      id: 1,
      icon: NpUsers,
      icon_bgColor: "#DF18FF30",
      type: "users",
      value: users.length,
    },
    {
      id: 2,
      icon: NpUsersB,
      icon_bgColor: "#5718FF30",
      type: "active users",
      value: activeUsers.length,
    },
    {
      id: 3,
      icon: NpLoan,
      icon_bgColor: "#F55F4430",
      type: "users with loan",
      value: usersWithLoans.length,
    },
    {
      id: 4,
      icon: NpMoney,
      icon_bgColor: "#FF336630",
      type: "users with savings",
      value: usersWithSavings.length,
    },
  ];

  const handleBlacklistUser = (user_id: string) => {
    const userDetails: any = users.find((user: any) => user._id === user_id);
    if (userDetails.status !== "Blacklisted") {
      userDetails.status = "Blacklisted";
    } else if (userDetails.status === "Blacklisted") {
      alert("The User Is Already Blacklisted!");
    }
  };

  const handleActivateUser = (user_id: string) => {
    const userDetails: any = users.find((user: any) => user._id === user_id);
    if (userDetails.status !== "Active") {
      userDetails.status = "Active";
    } else if (userDetails.status === "Active") {
      alert("The User Is Already An Active User!");
    }
  };

  return (
    <main className={styles.users}>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
      {openMobileSidebar && (
        <section className={styles.mobile_sidebar}>
          <Sidebar />
        </section>
      )}
      {isLoading ? (
        <div className={styles.loading_spinner}>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {" "}
          <section className={styles.content}>
            {/* Content Header */}
            <div className={styles.content_header}>
              <div
                onClick={() => setOpenMobileSidebar(!openMobileSidebar)}
                className={`${styles.mobile_sidebar_arrow}`}
              >
                <ArrowRight
                  customStyle={
                    openMobileSidebar ? styles.arrow_left : styles.arrow_right
                  }
                />
              </div>
              <h1 className={styles.content_header_title}>Users</h1>
              <div className={styles.content_header_content}>
                {header_content.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.content_header_content_item}
                    >
                      <div
                        style={{ backgroundColor: item.icon_bgColor }}
                        className={styles.content_header_content_item_icon}
                      >
                        {<item.icon />}
                      </div>
                      <p className={styles.content_header_content_item_type}>
                        {item.type}
                      </p>
                      <p className={styles.content_header_content_item_value}>
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Table */}
            <div className={styles.content_table_container}>
              <div className={styles.content_table}>
                <div className={styles.content_table_header}>
                  <div
                    onClick={() => setOpenFilter(!openFilter)}
                    className={styles.content_table_header_item1}
                  >
                    <p>organization</p>
                    <FilterResults />
                  </div>
                  <div
                    onClick={() => setOpenFilter(!openFilter)}
                    className={styles.content_table_header_item2}
                  >
                    <p>username</p>
                    <FilterResults />
                  </div>
                  <div
                    onClick={() => setOpenFilter(!openFilter)}
                    className={styles.content_table_header_item3}
                  >
                    <p>email</p>
                    <FilterResults />
                  </div>
                  <div
                    onClick={() => setOpenFilter(!openFilter)}
                    className={styles.content_table_header_item4}
                  >
                    <p>phone number</p>
                    <FilterResults />
                  </div>
                  <div
                    onClick={() => setOpenFilter(!openFilter)}
                    className={styles.content_table_header_item5}
                  >
                    <p>date joined</p>
                    <FilterResults />
                  </div>
                  <div
                    onClick={() => setOpenFilter(!openFilter)}
                    className={styles.content_table_header_item6}
                  >
                    <p>status</p>
                    <FilterResults />
                  </div>
                  <div className={styles.content_table_header_item7}>
                    {/* <FilterResults /> */}
                  </div>
                </div>
                <div>
                  {currentUsers.map((user: any, index) => {
                    return (
                      <div key={index} className={styles.content_table_body}>
                        <div className={styles.content_table_body_item1}>
                          <p>{user?.organization}</p>
                        </div>
                        <div className={styles.content_table_body_item2}>
                          <p>{user?.fullName}</p>
                        </div>
                        <div className={styles.content_table_body_item3}>
                          <p>{user?.emailAddress}</p>
                        </div>
                        <div className={styles.content_table_body_item4}>
                          <p>0{user?.phoneNumber}</p>
                        </div>
                        <div className={styles.content_table_body_item5}>
                          <p>{convertDate(user?.dateJoined)}</p>
                        </div>
                        <div className={styles.content_table_body_item6}>
                          <p
                            className={`${
                              user?.status.toLowerCase() === "active" &&
                              styles.active
                            } ${
                              user?.status.toLowerCase() === "inactive" &&
                              styles.inactive
                            } ${
                              user?.status.toLowerCase() === "pending" &&
                              styles.pending
                            } ${
                              user?.status.toLowerCase() === "blacklisted" &&
                              styles.blacklisted
                            }`}
                          >
                            {user?.status}
                          </p>
                        </div>
                        <div
                          onClick={() =>
                            setOpenMoreOptions(
                              openMoreActions === index ? -1 : index
                            )
                          }
                          className={styles.content_table_body_item7}
                        >
                          <IcMoreVertical customStyle={styles.customStyle} />
                          {openMoreActions === index && (
                            <div className={styles.actions}>
                              <div
                                onClick={() => handleUserClick(user)}
                                className={styles.action}
                              >
                                <NpView />
                                <p>View Details</p>
                              </div>
                              <div
                                onClick={() => handleBlacklistUser(user._id)}
                                className={styles.action}
                              >
                                <NpDelete />
                                <p>Blacklist User</p>
                              </div>
                              <div
                                onClick={() => handleActivateUser(user._id)}
                                className={styles.action}
                              >
                                <NpUser />
                                <p>Activate User</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {openFilter && <FilterBox setOpenFilter={setOpenFilter} />}
              </div>
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              nPages={nPages}
              setCurrentPage={setCurrentPage}
              total={users.length}
              noPerPage={9}
            />
          </section>{" "}
        </>
      )}
    </main>
  );
}
