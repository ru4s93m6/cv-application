export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col gap-3 bg-gray-100 px-8 py-12 sm:flex-row sm:justify-center sm:gap-12">
      {children}
    </div>
  );
}
