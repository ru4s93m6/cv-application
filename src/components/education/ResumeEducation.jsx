import { useEducation } from "../../contexts/EducationProvider";
import ResumeEducationItem from "./ResumeEducationItem";

export default function ResumeEducation() {
  const { educations } = useEducation();
  return (
    <div className="mx-auto max-w-[80%] py-4">
      <h2 className="bg-slate-500 py-2 text-center text-lg tracking-wider text-slate-50 sm:py-3 sm:text-xl">
        Education
      </h2>
      {educations.map((edu) => (
        <ResumeEducationItem education={edu} key={edu.id} />
      ))}
    </div>
  );
}
