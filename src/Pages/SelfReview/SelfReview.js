import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SelfReviewRow from "./SelfReviewRow";

const SelfReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  console.log(reviews?.data?.map((review) => console.log(review)));

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
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
              <SelfReviewRow key={review._id} review={review} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelfReview;
