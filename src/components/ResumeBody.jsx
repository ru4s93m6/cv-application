import ResumeEducation from "./education/ResumeEducation";
import ResumeExperience from "./experience/ResumeExperience";
export default function ResumeBody() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white py-4">
      <ResumeEducation />
      <ResumeExperience />
    </div>
  );
}
