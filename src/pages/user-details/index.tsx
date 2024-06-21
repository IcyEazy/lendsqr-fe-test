import React, { useEffect, useState } from "react";
import { LoadingSpinner, Sidebar } from "../../components";
import styles from "./user-details.module.scss";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, NpBack } from "../../assets/icons";
import { getAllUsers } from "../../api/Users";
import { formatCurrency, formatCurrency2 } from "../../helper";

const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

export default function UserDetails() {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [userDetails, setUserDetails] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const storedUser = localStorage.getItem("userDetails");
      if (storedUser) {
        setUserDetails(JSON.parse(storedUser));
        setIsLoading(false);
      } else {
        const users = await getAllUsers();
        const user = users.find((user: any) => user._id === id);
        if (user) {
          setUserDetails(user);
          localStorage.setItem("userDetails", JSON.stringify(user));
        }
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  const handleBlacklistUser = (user_id: string) => {
    if (userDetails._id === user_id && userDetails.status !== "Blacklisted") {
      const newUserDetails = { ...userDetails, status: "Blacklisted" };
      setUserDetails(newUserDetails);
      localStorage.setItem("userDetails", JSON.stringify(newUserDetails));
    } else if (
      userDetails._id === user_id &&
      userDetails.status === "Blacklisted"
    ) {
      alert("The User Is Already Blacklisted!");
    }
  };

  const handleActivateUser = (user_id: string) => {
    if (userDetails._id === user_id && userDetails.status !== "Active") {
      const newUserDetails = { ...userDetails, status: "Active" };
      setUserDetails(newUserDetails);
      localStorage.setItem("userDetails", JSON.stringify(newUserDetails));
    } else if (userDetails._id === user_id && userDetails.status === "Active") {
      alert("The User Is Already An Active User!");
    }
  };

  return (
    <main className={styles.user_container}>
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
          <section className={styles.content}>
            {/* User Details Header */}
            <div className={styles.user_header}>
              <Link to={"/users"} className={styles.back_to_user}>
                <NpBack />
                <span>Back to Users</span>
              </Link>
              <div className={styles.user_details_status}>
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
                <h5>User Details</h5>
                <div className={styles.user_status_btns}>
                  <button
                    onClick={() => handleBlacklistUser(userDetails?._id)}
                    type="button"
                    className={styles.blacklist_btn}
                  >
                    Blacklist User
                  </button>
                  <button
                    onClick={() => handleActivateUser(userDetails?._id)}
                    type="button"
                    className={styles.activate_btn}
                  >
                    Activate User
                  </button>
                </div>
              </div>
            </div>

            {/* User Details Content */}
            <div className={styles.user_content}>
              {/* User Details Content Header */}
              <div className={styles.user_content_header}>
                <div className={styles.user_content_header_top}>
                  <div>
                    <img srcSet={userDetails?.avatar} alt="" />
                  </div>
                  <div className={styles.user_name_id}>
                    <p>{userDetails?.fullName}</p>
                    <span>{userDetails?._id}</span>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.user_tier}>
                    <p>User's Tier</p>
                    <div className={styles.user_tier_stars}>
                      {userDetails?.tiersLevel === 1 ? (
                        <span>★&#9734;&#9734;</span>
                      ) : userDetails?.tiersLevel === 2 ? (
                        <span>★★&#9734;</span>
                      ) : (
                        <span>★★★</span>
                      )}
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.user_bank}>
                    <p>{formatCurrency(userDetails?.accountBalance)}</p>
                    <p className={styles.user_bank_details}>
                      <span>{userDetails?.accountNumber}</span>/
                      <span>{userDetails?.bankName}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.user_content_header_tabs}>
                  {tabs.map((tab, i) => (
                    <p
                      key={i}
                      onClick={() => handleTabClick(i)}
                      className={
                        activeTab === i
                          ? styles.user_content_header_tab_active
                          : styles.user_content_header_tab
                      }
                    >
                      {tab}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 0 && (
                <div className={styles.user_general_details}>
                  {/* Personal Information */}
                  <div className={styles.user_details}>
                    <h6>Personal Information</h6>
                    <div className={styles.user_contents}>
                      <div className={styles.user_content}>
                        <p>Full Name</p>
                        <span>{userDetails?.fullName}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Phone Number</p>
                        <span>0{userDetails?.phoneNumber}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Email Address</p>
                        <span>{userDetails?.emailAddress}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>BVN</p>
                        <span>{userDetails?.bvn}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Gender</p>
                        <span>{userDetails?.gender}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Marital Status</p>
                        <span>{userDetails?.maritalStatus}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Children</p>
                        <span>
                          {userDetails?.children === 0
                            ? "None"
                            : userDetails?.children}
                        </span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Type of Residence</p>
                        <span>{userDetails?.typeOfResidence}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.divider} />

                  {/* Education and Employment */}
                  <div className={styles.user_details}>
                    <h6>Education and Employment</h6>
                    <div className={styles.user_contents}>
                      <div className={styles.user_content}>
                        <p>Level of Education</p>
                        <span>{userDetails?.levelOfEducation}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Employment Status</p>
                        <span>{userDetails?.employmentStatus}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Sector of Employment</p>
                        <span>{userDetails?.sectorOfEmployment}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Duration of Employment</p>
                        <span>{userDetails?.durationOfEmployment}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Office Email</p>
                        <span>{userDetails?.officeEmail}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Monthly Income</p>
                        <span>
                          {formatCurrency2(userDetails?.monthlyIncomeRange)}
                        </span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Loan Repayment</p>
                        <span>
                          {formatCurrency2(userDetails?.loanRepayment)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.divider} />

                  {/* Socials */}
                  <div className={styles.user_details}>
                    <h6>Socials</h6>
                    <div className={styles.user_contents}>
                      <div className={styles.user_content}>
                        <p>Twitter</p>
                        <span>{userDetails?.twitter}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Facebook</p>
                        <span>{userDetails?.facebook}</span>
                      </div>
                      <div className={styles.user_content}>
                        <p>Instagram</p>
                        <span>{userDetails?.instagram}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.divider} />

                  {/* Guarantors */}
                  <div className={styles.user_details}>
                    <h6>Guarantors</h6>
                    {userDetails?.guarantors &&
                      userDetails.guarantors.map(
                        (guarantor: any, i: number) => (
                          <div key={i}>
                            <div className={styles.user_contents}>
                              <div className={styles.user_content}>
                                <p>Full Name</p>
                                <span>{guarantor?.guarantorFullName}</span>
                              </div>
                              <div className={styles.user_content}>
                                <p>Phone Number</p>
                                <span>0{guarantor?.guarantorPhoneNumber}</span>
                              </div>
                              <div className={styles.user_content}>
                                <p>Email Address</p>
                                <span>{guarantor?.guarantorEmailAddress}</span>
                              </div>
                              <div className={styles.user_content}>
                                <p>Relationship</p>
                                <span>
                                  {guarantor?.relationshipWithGuarantor}
                                </span>
                              </div>
                            </div>
                            <div className={styles.divider} />
                          </div>
                        )
                      )}
                  </div>
                </div>
              )}

              {/* User's Document Tab */}
              {activeTab === 1 && (
                <div className={styles.tab_content}>
                  <p>This Is The User's Document Tab</p>
                </div>
              )}

              {/* User's Bank Details Tab */}
              {activeTab === 2 && (
                <div className={styles.tab_content}>
                  <p>This Is The User's Bank Details Tab</p>
                </div>
              )}

              {/* User's Loan Details Tab */}
              {activeTab === 3 && (
                <div className={styles.tab_content}>
                  <p>This Is The User's Loan Details Tab</p>
                </div>
              )}

              {/* User's Savings Tab */}
              {activeTab === 4 && (
                <div className={styles.tab_content}>
                  <p>This Is The User's Savings Tab</p>
                </div>
              )}

              {/* User's App and System Tab */}
              {activeTab === 5 && (
                <div className={styles.tab_content}>
                  <p>This Is The User's App and System Tab</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
