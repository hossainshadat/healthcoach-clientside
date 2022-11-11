import React from "react";
import { toast } from "react-toastify";
import useTitle from "./../../Hook/DocumentTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    const img = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const addService = {
      title,
      img,
      price,
      rating,
      description,
    };

    fetch("https://server-self-seven.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully service created");
        }
      })
      .catch((er) => toast.error(er));

    form.reset();
    toast.success("Successfully service created");
  };

  return (
    <section className="p-6 dark:text-gray-100">
      <form
        onSubmit={handleSubmit}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-green-400 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Service Name
          </label>
          <input
            id="name"
            name="servicename"
            type="text"
            placeholder="Your name"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1 ml-1">
            image
          </label>
          <input
            id="image"
            name="image"
            type="url"
            placeholder="Your image"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <label htmlFor="Price" className="block mb-1 ml-1">
            Price
          </label>
          <input
            id="Price"
            name="price"
            type="number"
            placeholder="Your Price"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block mb-1 ml-1">
            Price
          </label>
          <input
            id="Price"
            name="rating"
            type="text"
            defaultValue="4.5"
            placeholder="Rating"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="description"
            type="text"
            placeholder="Description..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-yellow-400 focus:ring-violet-400 hover:bg-yellow-600 dark:text-gray-900"
          >
            Add Service
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddService;
