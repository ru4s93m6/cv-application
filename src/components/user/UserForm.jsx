import { useUser } from "../../contexts/UserProvider";

export default function UserForm() {
  const { name, email, phone, location, dispatch } = useUser();
  return (
    <div className="flex flex-col justify-between gap-2 rounded-xl bg-white px-8 py-6 sm:w-96">
      <h2 className="text-xl font-bold">Personal Information</h2>

      <div className="inputDiv">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          className="rounded-lg bg-zinc-200 px-4 py-2"
          value={name}
          onChange={(e) =>
            dispatch({ type: "name/updated", payload: e.target.value })
          }
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="rounded-lg bg-zinc-200 px-4 py-2"
          value={email}
          onChange={(e) =>
            dispatch({ type: "email/updated", payload: e.target.value })
          }
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          className="rounded-lg bg-zinc-200 px-4 py-2"
          value={phone}
          onChange={(e) =>
            dispatch({ type: "phone/updated", payload: e.target.value })
          }
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          className="rounded-lg bg-zinc-200 px-4 py-2"
          value={location}
          onChange={(e) =>
            dispatch({ type: "location/updated", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
}
