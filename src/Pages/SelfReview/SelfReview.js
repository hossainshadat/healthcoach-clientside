import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import SelfReviewRow from "./SelfReviewRow";

const SelfReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email, reviews]);

  // Review delete
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this review"
    );
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            LoadingSpinner();
            toast.success(data.message);
          } else {
            toast.error(data.error);
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };

  // review edit

  const handleEdit = (id) => {
    console.log(id);
    navigate(`/review/edit/${id}`);
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Your Personal Review
      </h2>
      <div className="overflow-x-auto">
        {reviews?.data?.length > 0 ? (
          <>
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gray-700">
                <tr className="text-left">
                  <th className="p-3">Id</th>
                  <th className="p-3">Service Image</th>
                  <th className="p-3">Service Name</th>
                  <th className="p-3">Message</th>

                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {reviews?.data?.map((review) => (
                  <SelfReviewRow
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <div className="flex justify-center my-20 ">
              <h2 className=" font-extrabold text-5xl dark:text-gray-600">
                No review found 🔥🔥🔥🔥🔥
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SelfReview;
