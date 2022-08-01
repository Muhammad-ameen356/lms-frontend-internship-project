import React from "react";
import { AiFillStar } from "react-icons/ai";
import style from "./CourseCard.module.scss";

const CourseCard = ({data}) => {
  return (
    <div className={style.cardMainContianer}>
      <div className={style.imageComtainer}>
        <img src={data?.image} alt="" />
      </div>
      <div className={style.cardBody}>
        <h6>Conceptual Art, Photography and Wild Life</h6>
        <p className={`p-14`}>
        {data?.description}
        </p>
        <h5 className={style.price}>{data?.price}</h5>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
      </div>
    </div>
  );
};

export default CourseCard;
