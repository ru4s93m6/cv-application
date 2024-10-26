import { useExperience } from "../../contexts/ExperienceProvider";
import ResumeExperienceItem from "./ResumeExperienceItem";

export default function ResumeExperience() {
  const { experiences } = useExperience();
  return (
    <div className="mx-auto max-w-[80%] py-4">
      <h2 className="bg-slate-500 py-2 text-center text-lg tracking-wider text-slate-50 sm:py-3 sm:text-xl">
        Experience
      </h2>
      {experiences.map((experience) => (
        <ResumeExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
