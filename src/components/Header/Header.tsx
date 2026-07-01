import "./Header.css";
import Actions from "./Actions/Actions";
import Menu from "./Menu/Menu";
import ArrowDown from "../../assets/icons/ArrowDown.svg";
import HamburgMenu from "../../assets/icons/Hamburger Menu.svg";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />
        <div className="header__desktop">
          <Menu />
          <Actions />
        </div>
        <div className="header__mobile-actions">
          <button className="header__mobile-button">
            Подготовка
            <img src={ArrowDown} alt="" />
          </button>
          <button className="header__mobile-burger">
            <img src={HamburgMenu} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}
