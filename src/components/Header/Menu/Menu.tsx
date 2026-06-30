import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <ul className="header__menu">
      <li>
        <a href="">База вопросов</a>
      </li>
      <li>
        <a href="">Тренажер</a>
      </li>
      <li>
        <a href="">Материалы</a>
      </li>
    </ul>
  );
}
