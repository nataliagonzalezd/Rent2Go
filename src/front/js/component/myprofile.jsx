import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/myprofile.css";

const MyProfile = function (props) {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(props.name);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [role, setRole] = useState(props.role);
  const [address, setAddress] = useState(props.address);
  const [phone, setPhone] = useState(props.phone);
  const [username, setUsername] = useState(props.username);

  const handleUpdateProfile = () => {
    actions.addInfo(
      props.id,
      name,
      lastName,
      address,
      role,
      phone,
      email,
      username
    );
  };

  useEffect(() => {
    actions.getProfile();
  }, []);

  return (
    <>
      <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

      <div className="wrapper">
        <div className="profile">
          <div className="picture">
            <img src="https://i.imgur.com/2QKIaJ5.png" alt="profile_pic" />
          </div>
          <div className="name_role">
            <p>
              {props.name}
              {props.lastName}
            </p>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              id="name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <span>{props.email}</span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="skills">
            <span>{props.role}</span>
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
                {props.address}
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <span>Calle 45</span>
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
          <button className="btn" onClick={handleUpdateProfile}>
            Editar Perfil
          </button>
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
              <div className="icon">
                <i className="fa fa-solid fa-user"></i>
              </div>
              <div className="count">{props.username}</div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
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
          <div className="btn">
            <a href="#">Follow</a>
          </div>

          <div className="popup">
            <div className="shadow"></div>
            <div className="inner_popup">
              <div className="total_skill">
                <div className="close_btn">
                  <i className="fas fa-times"></i>
                </div>
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>Jquery</span>
                <span>ReactJS</span>
                <span>AngularJS</span>
                <span>SASS</span>
                <span>GIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
