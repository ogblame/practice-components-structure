import ExpertSection from "./ExpertSection";
import Alarm from "../../assets/icons/Alarm.svg";
import "./Expert.css";

export default function Expert() {
  return (
    <>
      <h3 className="title__exprerts">Эксперты YeaHub</h3>
      <p className="description__exprerts">
        Наши гуру делятся опытом в разных форматах. Смотрите разборы кейсов,
        участвуйте в стримах и перенимайте их подход к работе
      </p>
      <ExpertSection />
      <ExpertSection />
      <div className="expert__info">
        <img src={Alarm} alt="" />
        <p className="expert__info-description">
          30 минут в день на контент экспертов = +50% к вашим навыкам за год
        </p>
      </div>
    </>
  );
}
