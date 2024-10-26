export default function ButtonLayout({
  displayCondition,
  handleDelete,
  handleCancel,
  handleSave,
}) {
  return (
    <div className="flex justify-between px-1 pt-4">
      {!displayCondition && (
        <button
          type="button"
          className="rounded-full bg-red-500 px-4 py-3 text-slate-50"
          aria-label="Delete button"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
      <div
        className={`space-x-3 ${displayCondition && "flex justify-between"}`}
      >
        <button
          type="button"
          onClick={handleCancel}
          aria-label="Cancel button"
          className="rounded-full bg-slate-300 px-4 py-3 text-slate-800"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          aria-label="Save button"
          className="rounded-full bg-slate-500 px-4 py-3 text-slate-50"
        >
          Save
        </button>
      </div>
    </div>
  );
}
