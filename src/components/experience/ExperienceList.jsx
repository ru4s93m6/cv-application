import { useExperience } from "../../contexts/ExperienceProvider";
import ExperienceItem from "./ExperienceItem";
import ExprienceForm from "./ExprienceForm";

export default function ExperienceList() {
  const { currentExperience, experiences, isEdited, dispatch } =
    useExperience();
  return (
    <div className="flex flex-col justify-between gap-2 rounded-xl bg-white px-8 py-6">
      <h2 className="text-2xl font-bold tracking-wide">Experience</h2>
      <div className="space-y-4">
        {!isEdited ? (
          <>
            <ul>
              {experiences.map((exp) => (
                <ExperienceItem exp={exp} key={exp.id} dispatch={dispatch} />
              ))}
            </ul>
            <button
              className="float-right rounded-full bg-slate-200 px-4 py-2"
              onClick={() => dispatch({ type: "toggleEdit" })}
            >
              Add Experience
            </button>
          </>
        ) : (
          <ExprienceForm
            currentExperience={currentExperience}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
}
