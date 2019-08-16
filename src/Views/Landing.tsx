import React from 'react';
import '../App.css';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoInstagram,
  IoMdInfinite,
  IoIosCart
} from 'react-icons/io';

const Landing: React.SFC = () => {
  return (
    <div className="wrapper">
      <div className="pattern" />

      <div className="nav">
        <div className="logo">
          <IoMdInfinite />
        </div>

        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Forum</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="cart">
          <IoIosCart />
        </div>
      </div>

      <div className="box-1 box" />
      <div className="box-2 box" />
      <div className="box-3 box" />

      <div className="title-2">Everything</div>

      <div className="runner">
        <img className={'slideUp'} src="/Runner.png" alt="runner" />
      </div>

      <div className="title-1">Fast</div>

      <div className="content">
        <p className="slideExpandUp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          nostrum itaque sequi similique, eius maxime porro tenetur magnam in
          officiis velit quisquam aspernatur voluptatum ab excepturi commodi
          suscipit id non quod dolores ad consequatur corporis nisi. Aperiam
          neque recusandae libero.
        </p>

        <button>Shop Now</button>
      </div>

      <div className="media">
        <ul>
          <li>
            <IoLogoFacebook />
          </li>
          <li>
            <IoLogoInstagram />
          </li>
          <li>
            <IoLogoTwitter />
          </li>
          <li>
            <IoLogoYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
