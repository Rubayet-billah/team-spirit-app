import { useState } from "react";
import UserCard from "../components/UserCard";
import { useGetAllUsersQuery } from "../redux/features/user/userApi";
import ActionBar from "../components/ActionBar";
import Pagination from "../components/Pagination";

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const { data } = useGetAllUsersQuery();

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
      <div>
        <ActionBar />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 md:mt-12">
        {/* Render UserCard components based on the current page */}
        {renderUserCards()}
      </section>
      <div className="my-6 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default UsersPage;
