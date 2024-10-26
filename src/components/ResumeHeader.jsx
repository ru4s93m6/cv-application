import { useUser } from "../contexts/UserProvider";

export default function ResumeHeader() {
  const { name, email, phone, location } = useUser();
  return (
    <div className="flex flex-col items-center gap-4 bg-slate-900 px-8 py-10 text-slate-50 sm:py-16">
      <h1 className="text-5xl font-bold">{name}</h1>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-8">
        <p className="space-x-2 text-lg">
          <i className="fa-solid fa-envelope"></i>
          <span>{email}</span>
        </p>
        <p className="space-x-2 text-lg">
          <i className="fa-solid fa-phone"></i>
          <span>{phone}</span>
        </p>
        <p className="space-x-2 text-lg">
          <i className="fa-solid fa-location-dot"></i>
          <span>{location}</span>
        </p>
      </div>
    </div>
  );
}
