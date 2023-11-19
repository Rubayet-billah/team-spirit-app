import UserCard from "../components/UserCard";
import { useGetAllUsersQuery } from "../redux/features/user/userApi";
import ActionBar from "../components/ActionBar";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/features/pagination/paginationSlice";

const UsersPage = () => {
  const { currentPage, cardsPerPage } = useSelector(
    (state) => state.pagination
  );
  const { searchTerm, filterBy, sortBy, sortOrder } = useSelector(
    (state) => state.filter
  );

  const { data: usersData } = useGetAllUsersQuery({
    page: currentPage,
    limit: cardsPerPage,
    search: searchTerm,
    filter: filterBy,
    sortBy: sortBy,
    sortOrder: sortOrder,
  });

  const totalUsersCount = usersData?.count;
  const totalPages = Math.ceil(totalUsersCount / cardsPerPage);

  console.log("user data", usersData);

  const renderUserCards = () => {
    return usersData?.users.map((userData, index) => (
      <UserCard key={index} user={userData} />
    ));
  };

  return (
    <div className="container mx-auto">
      <ActionBar />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 md:mt-12">
        {renderUserCards()}
      </section>
      <div className="my-6 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default UsersPage;
