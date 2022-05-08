import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import {data} from "./DataSlider"
import "../Slider/MultiSlider.css"

import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";


const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <GrCaretPrevious/>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <GrCaretNext/>
    </div>
  );
};

const MultiSlider = () => {
  return (
      <div className="mx-36 multislider-img">
      <Slider
        GrCaretPrevious={<PreviousBtn />}
        GrCaretNext={<NextBtn />}
        slidesToShow={4}
      >
        {data.map((item, index) => (
            <img src={item} key={index} alt=""></img>
        ))}
      </Slider>
    </div>
  );
};

export default MultiSlider;