import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { envato, google } from "../../Constant/Images";
import style from "./Carousel.module.scss";

const CarouselComponent = ({ breakPoints }) => {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <AiOutlineLeft className={style.icon} />
      ) : (
        <AiOutlineRight className={style.icon} />
      );
    return (
      <button onClick={onClick} disabled={isEdge} className={style.button}>
        {pointer}
      </button>
    );
  };
  return (
    <Carousel
      breakPoints={breakPoints}
      pagination={false}
      renderArrow={myArrow}
    >
      <img src={envato} alt="" className={style.img} />
      <img src={google} alt="" className={style.img} />
      <img src={envato} alt="" className={style.img} />
      <img src={google} alt="" className={style.img} />
      <img src={google} alt="" className={style.img} />
      <img src={envato} alt="" className={style.img} />
      <img src={google} alt="" className={style.img} />
      <img src={google} alt="" className={style.img} />
      <img src={envato} alt="" className={style.img} />
    </Carousel>
  );
};

export default CarouselComponent;
