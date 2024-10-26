export default function ResumeEducationItem({ education }) {
  return (
    <div className="mt-2 flex px-3 sm:my-4">
      <div className="flex-1">
        {education?.from} - {education?.to}
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-xl font-semibold">
          {education.name}
          {education.location && (
            <span className="mx-2 space-x-1 text-xs font-normal text-stone-500">
              <i class="fa-solid fa-location-dot"></i>
              <span>{education.location}</span>
            </span>
          )}
        </h3>
        <p>{education.degree}</p>
      </div>
    </div>
  );
}
