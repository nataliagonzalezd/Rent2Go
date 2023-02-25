import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Dashboard from "./dashboard/dashboard.jsx";
import "../../styles/myprofile.css";
import "../../styles/dashboard.css";

const MyProfile = function (props) {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(props.name);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [role, setRole] = useState(props.role);
  const [address, setAddress] = useState(props.address);
  const [phone, setPhone] = useState(props.phone);
  const [username, setUsername] = useState(props.username);
  const [imageCloudinary, setImageCloudinary] = useState();
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    const form = new FormData();
    try {
      setLoading(true);
      form.append(`file`, file);
      form.append("upload_preset", "cloudy");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxhknbsqr/image/upload",
        {
          method: "POST",
          body: form,
        }
      ).then((res) => res.json());

      const url = response.secure_url;

      setImageCloudinary(url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };

  const handleUpdateProfile = () => {
    actions.addInfo(
      props.id,
      name,
      lastName,
      address,
      role,
      phone,
      email,
      username,
      imageCloudinary
    );
  };

  useEffect(() => {
    actions.getProfile();
    console.log(imageCloudinary);
  }, []);

  return (
    <>
      <div className="right-side">
        <div className="wrapper">
          <div className="profile">
            <div className="picture">
              <img src={props.image} alt="foto de perfil" />
            </div>
            <div className="name_role">
              <p>
                {props.name}
                {props.lastName}
              </p>
              <span>{props.email}</span>
            </div>
            <div className="skills">
              <span>{props.role}</span>
            </div>
            <div className="level">
              <div className="level_data">
                <p>{props.address}</p>
              </div>
              <div className="level_bars">
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="data_item">
                <div className="icon">
                  <i className="fa fa-solid fa-box-open"></i>
                </div>
                <div className="count">8 Productos</div>
              </div>
              <div className="data_item">
                <div className="icon">
                  <i className="fa fa-solid fa-phone"></i>
                </div>
                <div className="count">{props.phone}</div>
              </div>
              <div className="data_item">
                <div className="icon">
                  <i className="fa fa-solid fa-user"></i>
                </div>
                <div className="count">{props.username}</div>
              </div>
            </div>
            <div className="bio">Me gusta la venta ea</div>
            <div className="social_media">
              <div className="icon">
                <i className="fab fa-facebook-square"></i>
              </div>
              <div className="icon">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fab fa-instagram-square"></i>
              </div>
              <div className="icon">
                <i className="fab fa-youtube"></i>
              </div>
              <div className="icon">
                <i className="fab fa-whatsapp-square"></i>
              </div>
            </div>
            <button className="btn" onClick={handleUpdateProfile}>
              Actualizar Perfil
            </button>
          </div>
          <div className="profile-left">
            <div className="name_role">
              <label htmlFor="InsertImage" className="mt-1">
                Insertar Imagen de Perfil:
              </label>
              <div>
                <input type="file" onChange={handleFileInputChange} />
              </div>
              <p></p>
              <label>Nombre</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label>Apellido</label>
              <input
                type="text"
                id="name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <label>Rol</label>
            <div className="skills">
              <input
                type="text"
                id="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>
            <div className="level">
              <div className="level_data">
                <p>
                  <label>Direccion</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </p>
              </div>
              <div className="level_bars">
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="data_item">
                <label>Teléfono</label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="data_item">
                <div className="icon"></div>
                <label>Usuario</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <button className="btn" onClick={handleUpdateProfile}>
                Actualizar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dashboard />
    </>
  );
};

export default MyProfile;
