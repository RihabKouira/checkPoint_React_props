import React from "react";
import PropTypes from "prop-types";

const Profile = ({
  fullName = "Celine Dion",
  bio = "parag",
  profession = "Canadian pop singer",
  children,
}) => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "60px", fontFamily: "Parisienne" }}>
        {fullName}
      </h1>
      <p style={{ fontSize: "30px", fontFamily: "cursive" }}>{bio}</p>
      <h4 style={{ color: "silver", fontSize: "20px", fontFamily: "serif" }}>
        {profession}
      </h4>
      {children}
    </div>
  );
};
Profile.proTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
