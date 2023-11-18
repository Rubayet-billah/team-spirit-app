import { useState } from "react";

const ActionBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          onChange={handleFilterChange}
        >
          <option value="domain">Domain</option>
          <option value="gender">Gender</option>
          <option value="availability">Availability</option>
        </select>
      </div>
      <div className="flex items-center">
        <label
          htmlFor="sortingOptions"
          className="block text-sm font-medium text-gray-900 mr-2"
        >
          Sort by:
        </label>
        <select
          id="sortingOptions"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          onChange={handleSortingChange}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="id">ID</option>
        </select>
      </div>
    </div>
  );
};

export default ActionBar;
