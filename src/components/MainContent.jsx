import UserCard from "../components/UserCard";
import { useGetAllUsersQuery } from "../redux/features/user/userApi";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";

const MainContent = () => {
  const { currentPage, pageLimit } = useSelector((state) => state.pagination);
  const { searchTerm, domain, gender, available, sortBy, sortOrder } =
    useSelector((state) => state.filter);

  const { data: usersData } = useGetAllUsersQuery({
    page: currentPage,
    limit: pageLimit,
    search: searchTerm,
    domain,
    gender,
    available,
    sortBy: sortBy,
    sortOrder: sortOrder,
  });

  const totalUsersCount = usersData?.count;
  const totalPages = Math.ceil(totalUsersCount / pageLimit);

  console.log("user data", usersData);

  const renderUserCards = () => {
    return usersData?.users.map((userData, index) => (
      <UserCard key={index} user={userData} />
    ));
  };

  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 md:mt-12">
        {renderUserCards()}
      </section>
      <div className="my-6 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default MainContent;
