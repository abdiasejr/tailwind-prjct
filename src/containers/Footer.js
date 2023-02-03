import { GrInstagram, GrTwitter } from "react-icons/gr";

export const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col bg-primary px-7 pb-20 text-white">
      <h3 className="pt-10 text-xl font-bold not-italic tracking-wide">
        About Us
      </h3>
      <a className="pt-2 text-sm font-medium not-italic tracking-wide" href="/">
        Investors
      </a>
      <a className="pt-2 text-sm font-medium not-italic tracking-wide" href="/">
        Careers
      </a>
      <a className="pt-2 text-sm font-medium not-italic tracking-wide" href="/">
        Privacy Policy
      </a>
      <a className="pt-2 text-sm font-medium not-italic tracking-wide" href="/">
        T&C
      </a>
      <a className="pt-2 text-sm font-medium not-italic tracking-wide" href="/">
        Platzi Travel, inc
      </a>
      <a className="pt-2 text-sm font-medium not-italic tracking-wide" href="/">
        Follow us
      </a>
      <div className="flex flex-row gap-2 pt-2">
        <a
          className="mt-[0.125rem] text-sm font-medium not-italic tracking-wide"
          href="/"
        >
          <GrTwitter />
        </a>
        <a className="text-lg font-medium not-italic tracking-wide" href="/">
          <GrInstagram />
        </a>
      </div>
    </footer>
  );
};
