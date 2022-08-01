import React from "react";
import style from "./AcheiveGoalCard.module.scss";

const AcheiveGoalCard = ({ data }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }
  return (
    <div className={style.box}>
      <div className={style.imageContainer}>
        <img src={data?.image} className={style.boxImage} />
      </div>
      <h6 className={style.title}>{truncate(data?.title, 60)}</h6>
      <p className={`p-14 ${style.subTitle} `}>
        {truncate(data?.description, 80)}
      </p>
    </div>
  );
};

export default AcheiveGoalCard;
