import React from "react";
import { ArrowRight } from "../../assets/icons";
import styles from "./pagination.module.scss";

interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  total?: number;
  noPerPage?: number;
}

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  total,
  noPerPage,
}: PaginationProps) => {
  const pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
    return currentPage;
  };

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage((prev) => prev + 1);
    }
    return currentPage;
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.out_of}>
        <p>Showing</p>
        <div className={styles.out_of_box}>
          <p>{noPerPage && currentPage * noPerPage}</p>
          <span className={styles.rotate}>
            <ArrowRight />
          </span>
        </div>
        <p>out of {total}</p>
      </div>
      <div className={styles.pagination_box}>
        <button className={styles.arrow_btn} onClick={prevPage}>
          {<ArrowRight customStyle={styles.customStyle} />}
        </button>

        <div>
          {pageNumbers.length > 5 ? (
            <div className={styles.page_numbers}>
              <div className={styles.page_numbers}>
                {pageNumbers.slice(0, 3).map((pgNumber) => {
                  return (
                    <span
                      key={pgNumber}
                      className={` ${
                        currentPage === pgNumber && styles.span_active
                      }`}
                      onClick={() => setCurrentPage(pgNumber)}
                    >
                      {pgNumber}
                    </span>
                  );
                })}
              </div>
              <div>
                <span
                  className={`${
                    currentPage > 3 &&
                    currentPage < nPages - 1 &&
                    styles.span_active
                  }`}
                >
                  ...
                </span>
              </div>
              <div className={styles.page_numbers}>
                {pageNumbers.slice(-2).map((pgNumber) => {
                  return (
                    <span
                      key={pgNumber}
                      className={`${
                        currentPage === pgNumber && styles.span_active
                      }`}
                      onClick={() => setCurrentPage(pgNumber)}
                    >
                      {pgNumber}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : (
            pageNumbers.map((pgNumber) => {
              return (
                <span
                  key={pgNumber}
                  className={` ${
                    currentPage === pgNumber && styles.span_active
                  }`}
                  onClick={() => setCurrentPage(pgNumber)}
                >
                  {pgNumber}
                </span>
              );
            })
          )}
        </div>

        <button className={styles.arrow_btn} onClick={nextPage}>
          {<ArrowRight />}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
