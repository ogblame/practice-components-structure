import Photo1 from "../../assets/images/Experts photos/1.jpg";
import Photo2 from "../../assets/images/Experts photos/2.jpg";
import Photo3 from "../../assets/images/Experts photos/3.jpg";
import Photo4 from "../../assets/images/Experts photos/4.jpg";
import ExpertCard from "./ExpertCard";
import "./Expert.css";

const experts = [
  {
    name: "Денис",
    profession: "Frontend Developer",
    description: "Учитесь у тех, кто уже решил Ваши проблемы",
    urlPhoto: Photo1,
  },
  {
    name: "Светлана О.",
    profession: "Дизайнер",
    description: "Учитесь у тех, кто уже решил Ваши проблемы",
    urlPhoto: Photo2,
  },
  {
    name: "Юрий К.",
    profession: "Frontend Developer",
    description: "Учитесь у тех, кто уже решил Ваши проблемы",
    urlPhoto: Photo3,
  },
  {
    name: "Дмитрий",
    profession: "Дизайнер",
    description: "Учитесь у тех, кто уже решил Ваши проблемы",
    urlPhoto: Photo4,
  },
];

export default function ExpertSection() {
  return (
    <>
      {" "}
      <div className="experts__grid-container">
        {experts.map((expert) => (
          <ExpertCard
            name={expert.name}
            profession={expert.profession}
            url={expert.urlPhoto}
            description={expert.description}
          />
        ))}
      </div>
    </>
  );
}
