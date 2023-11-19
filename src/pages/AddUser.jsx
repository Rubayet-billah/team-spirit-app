const AddUser = () => {
  return (
    <div className="w-full">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Add a new user
          </h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                  placeholder="Roxanna"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                  placeholder="Skipton"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                  placeholder="rskipton2s@constantcontact.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                  required
                >
                  <option value="" disabled selected>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="avatar"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Avatar URL
                </label>
                <input
                  type="text"
                  name="avatar"
                  id="avatar"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                  placeholder="https://robohash.org/ullamnobisquia.png?size=50x50&set=set1"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="domain"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Domain
                </label>
                <input
                  type="text"
                  name="domain"
                  id="domain"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                  placeholder="UI Designing"
                  required
                />
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="available"
                    name="available"
                    className="text-teal-500 focus:ring-teal-500 rounded"
                  />
                  <label
                    htmlFor="available"
                    className="ml-2 text-sm text-gray-900"
                  >
                    Available
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-teal-400 rounded focus:ring-4 focus:ring-teal-200 hover:bg-teal-500"
            >
              Add User
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddUser;
