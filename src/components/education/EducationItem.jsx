export default function EducationItem({ education, dispatch }) {
  return (
    <li
      className="cursor-pointer border-b-2 border-slate-200 py-2 font-semibold"
      onClick={() =>
        dispatch({ type: "education/toggleEdit", payload: education })
      }
    >
      {education.name}
    </li>
  );
}
