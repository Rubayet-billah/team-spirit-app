import { useState } from "react";
import UserCard from "../components/UserCard";
import { useGetAllUsersQuery } from "../redux/features/user/userApi";

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const { data } = useGetAllUsersQuery();
  console.log("this from page", data);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    // Considering a fixed number of pages (for demonstration purposes)
    const totalPages = 5; // Change this value according to your total pages

    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const renderUserCards = () => {
    // Logic to render UserCard components based on current page
    const cardsPerPage = 16; // Change this value to the number of cards per page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return Array.from({ length: endIndex }).map((_, index) => {
      if (index >= startIndex && index < endIndex) {
        return <UserCard key={index} />;
      }
      return null;
    });
  };

  return (
    <div className="container">
      <div></div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 md:mt-12">
        {/* Render UserCard components based on the current page */}
        {renderUserCards()}
      </section>
      <div className="my-6 flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <button
                onClick={goToPreviousPage}
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-r-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li>
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300">
                {currentPage}
              </span>
            </li>
            <li>
              <button
                onClick={goToNextPage}
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-l-1 border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === 5 /* Change '5' to total pages */
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentPage === 5 /* Change '5' to total pages */}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UsersPage;
