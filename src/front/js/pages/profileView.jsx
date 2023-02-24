import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import MyProfile from "../component/myprofile.jsx";

const ProfileView = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProfile();
    console.log(store.profile);
  }, []);

  return (
    <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
      <div className="col-12">
        {store.profile.map((cadaDato, index) => (
          <MyProfile
            id={cadaDato.id}
            name={cadaDato.name}
            lastName={cadaDato.lastName}
            email={cadaDato.email}
            address={cadaDato.address}
            phone={cadaDato.phone}
            image={cadaDato.image}
            role={cadaDato.role}
            username={cadaDato.username}
            costumer_id={cadaDato.costumer_id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileView;
