import { useState } from "react";
import ButtonLayout from "../../ui/ButtonLayout";
const initialValue = {
  id: "",
  name: "",
  degree: "",
  from: "",
  to: "",
  location: "",
};

export default function EducationForm({ currentEducation, dispatch }) {
  const [state, setState] = useState(
    currentEducation === null ? initialValue : currentEducation,
  );
  const displayCondition = currentEducation === null;

  function handleCancelEdit() {
    dispatch({ type: "toggleEdit" });
  }

  function handleSaveEducation(e) {
    e.preventDefault();
    const type =
      currentEducation === null ? "education/created" : "education/edited";
    const data =
      type === "education/created"
        ? { ...state, id: crypto.randomUUID() }
        : state;
    if (!data.name || !data.degree || !data.from || !data.to) return;
    dispatch({ type, payload: data });
  }

  function handleDeleteItem() {
    const { id } = currentEducation;
    dispatch({ type: "education/deleted", payload: id });
  }

  return (
    <form className="max-w-full space-y-2">
      <div className="inputDiv">
        <label htmlFor="school_name">
          School <span className="mx-1 text-sm text-stone-400">required</span>
        </label>
        <input
          id="school_name"
          type="text"
          className="input"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          required
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="degree">
          Degree <span className="mx-1 text-sm text-stone-400">required</span>
        </label>
        <input
          id="degree"
          type="text"
          className="input"
          value={state.degree}
          onChange={(e) => setState({ ...state, degree: e.target.value })}
          required
        />
      </div>

      <div className="flex justify-between sm:gap-4">
        <div className="inputDiv">
          <label htmlFor="edu_start_date">
            Start Date
            <span className="mx-1 text-sm text-stone-400">required</span>
          </label>
          <input
            id="edu_start_date"
            className="input w-40 sm:w-36"
            type="text"
            value={state.from}
            onChange={(e) => setState({ ...state, from: e.target.value })}
            required
          />
        </div>

        <div className="inputDiv">
          <label htmlFor="edu_end_date">
            End Date
            <span className="mx-1 text-sm text-stone-400">required</span>
          </label>
          <input
            id="edu_end_date"
            className="input w-40 sm:w-36"
            type="text"
            value={state.to}
            onChange={(e) => setState({ ...state, to: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="inputDiv">
        <label htmlFor="school_location">Location</label>
        <input
          id="school_location"
          type="text"
          className="input"
          value={state.location}
          onChange={(e) => setState({ ...state, location: e.target.value })}
        />
      </div>
      <ButtonLayout
        displayCondition={displayCondition}
        handleDelete={handleDeleteItem}
        handleCancel={handleCancelEdit}
        handleSave={handleSaveEducation}
      />
    </form>
  );
}
