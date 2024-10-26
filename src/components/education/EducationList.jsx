import { useEducation } from "../../contexts/EducationProvider";
import EducationItem from "./EducationItem";
import EducationForm from "./EducationForm";

export default function EducationList() {
  const { educations, dispatch, currentEducation, isEdited } = useEducation();
  return (
    <div className="flex flex-col justify-between gap-2 rounded-xl bg-white px-8 py-6">
      <h2 className="text-2xl font-bold tracking-wide">Education</h2>

      {!isEdited ? (
        <>
          <div>
            <ul>
              {educations.map((edu) => (
                <EducationItem
                  education={edu}
                  key={edu.id}
                  dispatch={dispatch}
                />
              ))}
            </ul>
            <button
              className="float-right mt-3 rounded-full bg-slate-200 px-4 py-2"
              onClick={() => dispatch({ type: "toggleEdit" })}
            >
              Add Education
            </button>
          </div>
        </>
      ) : (
        <EducationForm
          currentEducation={currentEducation}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
