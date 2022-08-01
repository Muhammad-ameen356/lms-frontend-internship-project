import React from "react";
import style from "./BlogCard.module.scss";
import { AiFillStar } from "react-icons/ai";
import { Col } from "react-bootstrap";
import { GoCalendar } from "react-icons/go";
import { BsFillPersonFill, BsArrowRight } from "react-icons/bs";

const BlogCard = ({ data }) => {
  return (
    <div className={style.cardMainContianer}>
      <div className={style.imageContainer}>
        <img src={data?.image} alt="" />
      </div>
      <div className={style.cardBody}>
        <div className={style.dateAndName}>
          <div>
            <p>
              <GoCalendar /> April 5, 2017
            </p>
          </div>
          <div>
            <p>
              <BsFillPersonFill /> John Doe
            </p>
          </div>
        </div>
        <h6>Conceptual Art, Photography and Wild Life</h6>
        <p className={`p-14`}>{data?.description}</p>
        <div>
          <h6 className={style.price}>Read More <BsArrowRight /> </h6>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
