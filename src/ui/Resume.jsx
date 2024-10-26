import ResumeBody from "../components/ResumeBody";
import ResumeHeader from "../components/ResumeHeader";

export default function Resume({ children }) {
  return (
    <div className="min-w-96 max-w-4xl">
      <ResumeHeader />
      <ResumeBody />
    </div>
  );
}
