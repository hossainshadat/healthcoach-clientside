import React from "react";

const HomeServiceCard = ({ data }) => {
  const { title, description } = data;
  return (
    <>
      <a
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src="https://source.unsplash.com/random/480x360?1"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-400">January 21, 2021</span>
          <p>{description}</p>
        </div>
      </a>
    </>
  );
};

export default HomeServiceCard;
