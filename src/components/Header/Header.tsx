import logo from "../../assets/images/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="" />
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
        <div className="header__actions">
          <button className="header__login-button">Вход</button>
          <button className="header__register-button">Регистрация</button>
        </div>
      </nav>
    </header>
  );
}
