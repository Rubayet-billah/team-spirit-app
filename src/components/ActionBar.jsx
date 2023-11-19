import { useState } from "react";

const ActionBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform actions based on the search term
    console.log("Searched:", searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    // Handle filter change functionality
    const selectedFilter = e.target.value;
    // Perform actions based on the selected filter
    console.log("Selected filter:", selectedFilter);
  };

  const handleSortingChange = (e) => {
    // Handle sorting change functionality
    const selectedSorting = e.target.value;
    // Perform actions based on the selected sorting option
    console.log("Selected sorting:", selectedSorting);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  console.log(sortOrder, "sort order");

  return (
    <div className="flex items-center justify-between my-6">
      <div className="flex items-center">
        <form onSubmit={handleSearch}>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                onChange={handleInputChange}
                className="block py-1 px-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l border-s-gray-50 border-s-2 border border-gray-300 focus:ring-teal-300 focus:border-teal-300 outline-offset-0"
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
      <div className="flex items-center">
        <label
          htmlFor="filterOptions"
          className="block text-sm font-medium text-gray-900 mr-2"
        >
          Filter by:
        </label>
        <select
          id="filterOptions"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block py-1 px-2"
          onChange={handleFilterChange}
        >
          <option value="domain">Domain</option>
          <option value="gender">Gender</option>
          <option value="availability">Availability</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label
          htmlFor="sortingOptions"
          className="block text-sm font-medium text-gray-900 mr-2"
        >
          Sort by:
        </label>
        <select
          id="sortingOptions"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block py-1 px-2"
          onChange={handleSortingChange}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="id">ID</option>
        </select>
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
  );
};

export default ActionBar;
