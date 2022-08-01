import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import style from "./CourseCategories.module.scss";

const CourseCategories = ({ title }) => {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.innerMainContainer}>
          <BsCodeSlash className={style.icon} />
          <h6 className={style.title}>{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
