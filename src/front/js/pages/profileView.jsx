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
    <div>
      {store.profile.map((cadaDato, index) => (
        <MyProfile
          key={index}
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
  );
};

export default ProfileView;
