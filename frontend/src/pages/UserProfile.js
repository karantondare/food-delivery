import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const UserProfile = () => {
  const userData = useSelector((state) => state.auth.authData);
  const history = useHistory();

  const { name, email } = userData;
  return (
    <div className="mt-8 ml-24">
      <h3 className="font-bold text-2xl">{name}</h3>
      <h3>My email: {email}</h3>

      <Link to="/orders">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          My Orders
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;
