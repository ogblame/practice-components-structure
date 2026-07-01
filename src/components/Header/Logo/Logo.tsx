import "./Logo.css";
import logo from "../../../assets/images/logo.svg";

export default function Logo() {
  return (
    <div className="header__logo">
      <img src={logo} alt="" />
      <h1 className="header__logo-title">Yeahub</h1>
    </div>
  );
}
