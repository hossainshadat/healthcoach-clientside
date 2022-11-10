import React from "react";

const SelfReviewRow = ({ review }) => {
  const { service_id, img, message, title, price } = review;
  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>{service_id}</p>
        </td>
        <td className="p-3">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={img}
              alt=""
              className="object-cover object-center w-20 h-20 rounded dark:bg-gray-500"
            />
          </div>
        </td>
        <td className="p-3">
          <p>14 Jan 2022</p>
          <p className="dark:text-gray-400">{title}</p>
        </td>
        <td className="p-3">
          <p className="dark:text-gray-400">{message}</p>
        </td>
        <td className="p-3 text-right">
          <p>{price}</p>
        </td>
        <td className="p-3 text-right">
          <button
            type="button"
            className=" inline-flex items-center justify-center mr-2 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-700 focus:shadow-outline focus:outline-none"
          >
            Edit
          </button>
          <button
            type="button"
            className=" inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default SelfReviewRow;
