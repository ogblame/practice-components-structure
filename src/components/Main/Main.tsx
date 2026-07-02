import React from "react";
import "./Main.css";
import { experts } from "../../data/mockData.ts";
import MainCard from "./MainCard/MainCard.tsx";

export default function Main() {
  return (
    <div className="main__section">
      <h3 className="main__title">Telegram-каналы</h3>
      <p className="main__description">
        Подпишитесь на узкоспециализированные каналы по вашему направлению.
        Здесь — вакансии, гайды, обсуждения трендов и поддержка комьюнити
      </p>
      <div className="main__section-grid">
        {experts.map((expert) => (
          <MainCard
            title={expert.title}
            profession={expert.profession}
            description={expert.description}
            avatar={expert.avatar}
          />
        ))}
      </div>
    </div>
  );
}
