import React from "react";
import "./MainCard.css";

type ExpertTS = {
  title: string;
  profession: string;
  description: string;
  avatar: string;
};

export default function MainCard({
  title,
  profession,
  description,
  avatar,
}: ExpertTS) {
  return (
    <article className="main__card">
      <div className="main__card-profile">
        <h4 className="main__card-avatar">{avatar}</h4>
        <div className="main__card-text">
          <p className="main__card-title">{profession}</p>
          <p className="main__card-description">{description}</p>
        </div>
      </div>

      <button className="main__card-button">Подписаться</button>
    </article>
  );
}
