import { Children } from "react";

export const Main = ({ children }) => {
  return (
    <main className="flex w-full flex-col items-center gap-5">
      {Children.map(children, (child) => (
        <div className="flex w-full flex-col">{child}</div>
      ))}
    </main>
  );
};
