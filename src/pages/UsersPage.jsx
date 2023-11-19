import UserCard from "../components/UserCard";
import { useGetAllUsersQuery } from "../redux/features/user/userApi";
import ActionBar from "../components/ActionBar";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/features/pagination/paginationSlice";

const UsersPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const cardsPerPage = 50;

  const startIndex = (currentPage - 1) * cardsPerPage;

  const { data: usersData } = useGetAllUsersQuery({
    page: currentPage,
    limit: cardsPerPage,
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
    <div className="container">
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
