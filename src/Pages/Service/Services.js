import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/DocumentTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  useTitle("Service");
  const { data } = useLoaderData();

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Services
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
