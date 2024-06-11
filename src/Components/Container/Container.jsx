export function Container({ children }) {
  return (
    <div className="sm:w-[600px] md:w-[800px] lg:w-[1200px] m-auto">
      {children}
    </div>
  );
}
