import React from "react";
import "./Media.css";
import bookBack from "../../assets/images/bookBack.svg";
import bookFront from "../../assets/images/bookFront.svg";

export default function Media() {
  return (
    <div className="media__container">
      <div className="media__info">
        <h2 className="media__title">Наши медиа</h2>
        <p className="media__description">
          Профессионализм — это привычка. Читайте, смотрите и анализируйте
          каждый день. Мы собрали все ресурсы, которые помогут вам расти
          быстрее.
        </p>
      </div>

      <div className="media__images">
        <img className="media__image media__image-back" src={bookBack} alt="" />
        <img
          className="media__image media__image-front"
          src={bookFront}
          alt=""
        />
      </div>
    </div>
  );
}
