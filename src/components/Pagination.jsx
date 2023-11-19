import { useState } from "react";

const Pagination = ({ currentPage = 1, totalPages = 6, onPageChange }) => {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={page === i ? "active" : ""}>
          <a
            href="#"
            onClick={() => handlePageChange(i)}
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
          >
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <a
              href="#"
              onClick={() => handlePageChange(page - 1)}
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
            >
              Previous
            </a>
          </li>
          {renderPageNumbers()}
          <li>
            <a
              href="#"
              onClick={() => handlePageChange(page + 1)}
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
