import "flowbite";
import UsersPage from "../pages/UsersPage";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  setSearchTerm,
  setSortBy,
  setSortOrder,
} from "../redux/features/filter/filterSlice";
import FilterSection from "./FilterSection";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const [sortOrder, setSortOrderLocal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
    console.log("Searched:", searchTermLocal);
  };

  const handleInputChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  const handleSortingChange = (e) => {
    const selectedSorting = e.target.value;
    dispatch(setSortBy(selectedSorting));
    console.log("Selected sorting:", selectedSorting);
  };

  const handleSortChange = (e) => {
    const selectedSortOrder = e.target.value;
    setSortOrderLocal(selectedSortOrder);
    dispatch(setSortOrder(selectedSortOrder));
  };
  console.log(sortOrder, "sort order");
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <div className="space-y-6 py-24 px-6">
            <div className="flex items-center">
              <form onSubmit={handleSearch}>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      onChange={handleInputChange}
                      className="block py-1 px-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l border border-gray-300 focus:ring-teal-300 focus:border-teal-300 outline-offset-0"
                      placeholder="Search Mockups, Logos, Design Templates..."
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 py-1 px-2 text-sm font-medium h-full text-white bg-teal-400 rounded-e border border-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <FilterSection />

            <div className="space-y-2">
              <label
                htmlFor="sortingOptions"
                className="block text-lg font-medium text-gray-900 mr-2"
              >
                Sort by:
              </label>
              <select
                id="sortingOptions"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block py-1 px-2"
                onChange={handleSortingChange}
              >
                <option value="">Select</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="id">ID</option>
              </select>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <input
                    id="sort-radio-asc"
                    type="radio"
                    value="asc"
                    name="sort-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    onChange={handleSortChange}
                  />
                  <label
                    htmlFor="sort-radio-asc"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Asc
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-radio-desc"
                    type="radio"
                    value="desc"
                    name="sort-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    onChange={handleSortChange}
                  />
                  <label
                    htmlFor="sort-radio-desc"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Desc
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <UsersPage />
      </div>
    </div>
  );
};

export default Sidebar;
