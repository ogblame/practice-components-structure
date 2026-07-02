import "./Expert.css";
import Telegram from "../../assets/icons/Telegram.svg";
import Youtube from "../../assets/icons/Youtube.svg";
import Profile from "../../assets/icons/Profile.svg";

type expertCard = {
  name: string;
  profession: string;
  url: string | undefined;
  description: string;
};

export default function ExpertCard({
  name,
  profession,
  url,
  description,
}: expertCard) {
  return (
    <div className="expert__card">
      <div className="expert__card-title">
        <img className="expert__card-avatar" src={url} alt="" />
        <div>
          <p>{name}</p>
          <p>{profession}</p>
        </div>
      </div>
      <p className="expert__card-description">{description}</p>
      <div className="expert__card-social">
        <img src={Telegram} alt="" />
        <img src={Youtube} alt="" />
        <img src={Profile} alt="" />
      </div>
    </div>
  );
}
