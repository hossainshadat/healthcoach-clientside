import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, title, img, description, price, rating } = service;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} className="object-cover w-full h-64" alt="" />
        </PhotoView>
      </PhotoProvider>
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-green-900 hover:text-green-700"
            aria-label="Category"
            title="traveling"
          >
            Rating
          </a>
          <span className="text-green-600"> — {rating} Star ⭐⭐⭐⭐🌟</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Film It!"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {title}
        </a>
        <p className="mb-2 text-gray-700">
          {description.length > 300 ? description.slice(0, 200) : description}
        </p>
        <p className="inline-block mb-3 text-1xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
          Price : ${price}
        </p>
        <div className="flex justify-end">
          <Link
            to={`/service/${_id}`}
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
