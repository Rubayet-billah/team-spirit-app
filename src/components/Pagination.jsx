import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/features/pagination/paginationSlice";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPageLocal] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPageLocal(newPage);
      dispatch(setCurrentPage(newPage));
    }
  };

  const renderPageNumbers = () => {
    const maxPageNumbers = 7;
    const pages = [];
    const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);

    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPageNumbers) {
      if (currentPage <= halfMaxPageNumbers) {
        endPage = maxPageNumbers;
      } else if (currentPage + halfMaxPageNumbers >= totalPages) {
        startPage = totalPages - maxPageNumbers + 1;
      } else {
        startPage = currentPage - halfMaxPageNumbers;
        endPage = currentPage + halfMaxPageNumbers;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button
            onClick={() => handlePageChange(i)}
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          {/* Previous Button */}
          <li>
            <a
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
            >
              Previous
            </a>
          </li>

          {/* Render Page Numbers */}
          {renderPageNumbers()}

          {/* Next Button */}
          <li>
            <a
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
