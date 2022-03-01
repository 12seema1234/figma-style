import React from "react";
import image from "../image/Group 10215.png";
import hash_img from "../image/image 3.png";
import Card from "./card";
import "./page1.css";
import twitter_img from '../image/twitter.png'

function Page1() {
  return (
    <div className="contaner">
      <div className="logo">
        <img src={image} alt="logo" />
      </div> 
      <div className="content_area">
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
          finibus nisl, ut porta felis. Etiam vitae mollis purus. Ut ultricies
          sodales tortor, nec dictum velit lacinia vel. Suspendisse sed maximus
          dui. Suspendisse quis ornare enim, laoreet euismod ante. Ut dapibus
          vel tortor consequat dictum. Etiam rhoncus facilisis ligula, sed
          imperdiet est viverra vitae. Pellentesque suscipit arcu sit amet elit
          dignissim cursus. Nulla ultrices orci ut nisl rutrum, a vehicula nibh
          imperdiet. Suspendisse potenti. Mauris iaculis metus non tellus
          sagittis.
        </p>
        </div>

        <div className="main_div">
          <div className="div_1">
            <h5 className="head_cont">Connect your wallet</h5>
            <div className="card_div_1">
              <Card cardFor=" Connect Hashpack" iconSrc={hash_img}/>-
            </div>
          </div>

         <div className="div_2">
         <h5>Connect your brand</h5>
          <div className="checkbox_area">
            <input type="checkbox" />
            <span className="span_1">I want to run a campaign</span>
            <input type="checkbox" />
            <span>I want to earn hbars</span>
          </div>

          <div className="card_div_2">
            <Card cardFor=" Connect Twitter" iconSrc={twitter_img}/>
          </div>
          <div className="card_div_3">
            <Card cardFor="Enter Personal Twitter Handle" iconSrc={twitter_img}/>
          </div>
        </div>

        </div>
      
      <div className="start_button">
        <button>start</button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
