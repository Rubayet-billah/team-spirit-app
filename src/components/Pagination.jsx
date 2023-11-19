import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setPageLimit,
} from "../redux/features/pagination/paginationSlice";

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
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={currentPage === i ? "bg-neutral-200" : ""}>
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
    <div className="md:flex items-center gap-4">
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
          <div className="flex overflow-x-auto max-w-sm">
            {renderPageNumbers()}
          </div>

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
      <div className="flex items-center">
        <label
          htmlFor="filterOptions"
          className="block text-sm font-medium text-gray-900 mr-2"
        >
          Per Page:
        </label>
        <select
          id="filterOptions"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block py-1 px-2"
          onChange={(e) => dispatch(setPageLimit(Number(e.target.value)))}
        >
          <option>select</option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
