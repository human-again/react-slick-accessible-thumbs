import React, { Component } from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <label key={i}>
            <input name="form1" type="radio" id={`rdbtn${i}`} />
            <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
          </label>
        );
      },
      accessibility: true,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsBefore: true,
      waitForAnimate: true,
      appendDots: dots => <fieldset>{dots}</fieldset>
    };
    return (
      <div>
        <h2>Custom Paging 2</h2>
        <Slider {...settings}>
          <div>
            <img src={baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}
