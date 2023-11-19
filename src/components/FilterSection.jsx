import { useDispatch } from "react-redux";
import {
  setAvailability,
  setDomain,
  setGender,
} from "../redux/features/filter/filterSlice";
import { useGetAllDomainsQuery } from "../redux/features/user/userApi";

const FilterSection = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllDomainsQuery();

  const handleDomainFilterChange = (e) => {
    dispatch(setDomain(e.target.value));
    // Additional logic or actions related to domain filter change
  };

  const handleGenderFilterChange = (e) => {
    dispatch(setGender(e.target.value));
    // Additional logic or actions related to gender filter change
  };

  const handleAvailabilityFilterChange = (e) => {
    dispatch(setAvailability(e.target.value));
    // Additional logic or actions related to availability filter change
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="domainFilter"
        className="block text-lg font-medium text-gray-900 mr-2"
      >
        Filter By:
      </label>
      <div className="flex items-center gap-2">
        <span className="text-sm">Domain:</span>
        <select
          id="domainFilter"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block py-1 px-2"
          onChange={handleDomainFilterChange}
        >
          <option value="" disabled>
            Select
          </option>
          {data?.domains?.map((domain, idx) => (
            <option key={idx} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Gender:</span>
        <select
          id="genderFilter"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block py-1 px-2"
          onChange={handleGenderFilterChange}
        >
          <option value="" disabled>
            Select
          </option>
          {/* Add gender options */}
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* ... */}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Availability:</span>
        <select
          id="availabilityFilter"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block py-1 px-2"
          onChange={handleAvailabilityFilterChange}
        >
          <option value="" disabled>
            Select
          </option>
          {/* Add availability options */}
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          {/* ... */}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
