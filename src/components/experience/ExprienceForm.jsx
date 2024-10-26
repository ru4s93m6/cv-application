import { useState } from "react";
import ButtonLayout from "../../ui/ButtonLayout";

const initialValue = {
  id: "",
  name: "",
  title: "",
  from: "",
  to: "",
  location: "",
  description: "",
};

export default function ExprienceForm({ currentExperience, dispatch }) {
  const [state, setState] = useState(
    currentExperience === null ? initialValue : currentExperience,
  );

  const displayCondition = currentExperience === null;

  function handleCancelEdit() {
    dispatch({ type: "toggleEdit" });
  }

  function handleSaveExperience(e) {
    e.preventDefault();
    const type = currentExperience === null ? "exp/created" : "exp/edited";
    const data =
      type === "exp/created" ? { ...state, id: crypto.randomUUID() } : state;
    if (!data.name || !data.title || !data.from || !data.to) return;
    dispatch({ type, payload: data });
  }

  function handleDeleteItem() {
    const { id } = currentExperience;
    dispatch({ type: "exp/deleted", payload: id });
  }

  return (
    <form className="space-y-2">
      <div className="inputDiv">
        <label htmlFor="exp_name">
          Company Name
          <span className="mx-1 text-sm text-stone-400">required</span>
        </label>
        <input
          id="exp_name"
          className="input"
          type="text"
          placeholder="Enter Company Name"
          value={state.name}
          onChange={(e) =>
            setState((prevState) => ({ ...prevState, name: e.target.value }))
          }
          required
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="title">
          Position Title
          <span className="mx-1 text-sm text-stone-400">required</span>
        </label>
        <input
          id="title"
          className="input"
          type="text"
          placeholder="Enter Position Title"
          value={state.title}
          onChange={(e) =>
            setState((prevState) => ({ ...prevState, title: e.target.value }))
          }
          required
        />
      </div>

      <div className="flex justify-between sm:gap-4">
        <div className="inputDiv">
          <label htmlFor="from">
            Start Date
            <span className="mx-1 text-sm text-stone-400">required</span>
          </label>
          <input
            id="from"
            className="input w-40 sm:w-36"
            type="text"
            value={state.from}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                from: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="inputDiv">
          <label htmlFor="to">
            End Date
            <span className="mx-1 text-sm text-stone-400">required</span>
          </label>
          <input
            id="to"
            className="input w-40 sm:w-36"
            type="text"
            value={state.to}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                to: e.target.value,
              }))
            }
            required
          />
        </div>
      </div>

      <div className="inputDiv">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          className="input"
          type="text"
          placeholder="Enter Location"
          value={state.location}
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              location: e.target.value,
            }))
          }
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="description">Description</label>
        <textarea
          rows={8}
          id="description"
          className="input"
          placeholder="Enter Description"
          value={state.description}
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />
      </div>

      <ButtonLayout
        displayCondition={displayCondition}
        handleCancel={handleCancelEdit}
        handleSave={handleSaveExperience}
        handleDelete={handleDeleteItem}
      />
    </form>
  );
}
