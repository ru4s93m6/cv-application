export default function ResumeExperienceItem({ experience }) {
  return (
    <div className="mt-2 flex px-3 sm:my-4">
      <div className="flex-1">
        {experience?.from} - {experience?.to}
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-xl font-semibold">
          {experience.name}
          {experience.location && (
            <span className="mx-2 space-x-1 text-xs font-normal text-stone-500">
              <i class="fa-solid fa-location-dot"></i>
              <span>{experience.location}</span>
            </span>
          )}
        </h3>
        <p>{experience.title}</p>
        <p className="text-sm text-stone-500">{experience?.description}</p>
      </div>
    </div>
  );
}
