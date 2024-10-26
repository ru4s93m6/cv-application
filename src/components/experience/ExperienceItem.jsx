export default function ExperienceItem({ exp, dispatch }) {
  return (
    <li
      key={exp.id}
      className="cursor-pointer border-b-2 border-slate-200 py-2 font-semibold"
      onClick={() => dispatch({ type: "exp/toggleEdit", payload: exp })}
    >
      {exp.name}
    </li>
  );
}
