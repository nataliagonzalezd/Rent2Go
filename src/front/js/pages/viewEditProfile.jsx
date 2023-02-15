import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { EditProfile } from "../component/editprofile.jsx";

//create your first component
const ViewEditProfile = () => {
  const { store } = useContext(Context);

  return (
    <div className="mx-5">
      {store.profile.map((profile, index) => (
        <EditProfile
          key={index}
          id={index + 1}
          name={profile.name}
          lastName={profile.price}
          phone={profile.phone}
          address={profile.address}
          rol={profile.rol}
        />
      ))}
    </div>
  );
};

export default ViewEditProfile;
