import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { ArrowDown, Bell, Logo, Search } from "../../assets/icons";
import { Avatar } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setSearchValue } from "../../redux/search/searchSlice";

const Navbar = ({ screenWidth }: { screenWidth: number }) => {
  const [search, setSearch] = useState("");
  const pathName = useLocation().pathname;

  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue(search));
  };

  return (
    <>
      {pathName !== "/" && (
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Logo width={screenWidth < 768 && 80} />
          </div>
          <div className={styles.search_profile_container}>
            <form onSubmit={handleSubmit} className={styles.search_bar}>
              <input
                data-testid="search-input"
                value={search}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search"
              />
              <button title="Search" type="submit">
                <Search />
              </button>
            </form>
            <div className={styles.profile}>
              <Link to={"/docs"} className={styles.docs}>
                Docs
              </Link>
              <Bell
                width={screenWidth < 768 && 18}
                height={screenWidth < 768 && 18}
              />
              <div className={styles.user}>
                <img alt="user" srcSet={Avatar} />
                <p>Adedeji</p>
                <ArrowDown />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
