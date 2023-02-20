import React from "react";
import Navbar from "../../Components/Header/Navbar";
import LoginForm from "../../Components/LoginForm/LoginForm";
import MyReviewLogin from "../../Components/Sections/Reviews/MyReviewLogin/MyReviewLogin";

function Reviews() {
  return (
    <div>
      <Navbar />
      <MyReviewLogin />
    </div>
  );
}

export default Reviews;
