import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceReviewForm = ({ handleReview }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    handleReview(review);

    e.target.reset();
  };
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Add Your Review
      </h2>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between"
      >
        <fieldset className="flex-grow  gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full">
              <label htmlFor="review" className="text-sm text-white">
                Add Your Review
              </label>
              <textarea
                id="review"
                name="review"
                placeholder="Comments"
                className="w-full h-24 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                autoComplete="off"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            {user?.email ? (
              <button
                type="submit"
                className=" inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              >
                Submit
              </button>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className=" inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                >
                  Submit
                </button>
              </Link>
            )}
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default ServiceReviewForm;
