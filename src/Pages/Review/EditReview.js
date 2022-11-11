import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditReview = () => {
  const navigate = useNavigate();
  const router = useParams();
  const { id } = router;

  const [editReview, setEditReview] = useState({});
  const {
    _id,
    title,
    service_id,
    price,
    photoURL,
    message,
    img,
    email,
    displayName,
  } = editReview;
  console.log(editReview);

  useEffect(() => {
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEditReview(data.data);
        } else {
          toast.error(data.error);
        }
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateMessage = e.target.review.value;
    const updateReview = {
      message: updateMessage,
    };

    console.log(updateReview);

    fetch(`http://localhost:5000/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.message);
          navigate("/review");
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between"
    >
      <fieldset className="flex-grow  gap-6 p-6 rounded-md shadow-sm bg-gray-900">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full">
            <label htmlFor="review" className="text-sm text-white">
              Update Your Review
            </label>
            <textarea
              id="review"
              name="review"
              defaultValue={message}
              placeholder="Comments"
              className="w-full h-24 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              autoComplete="off"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className=" inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default EditReview;
