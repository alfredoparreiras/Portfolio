import ResumeButtom from "./ResumeButtom";


const HeaderMain = () => {
  return (
    <header className="xsm:hidden md:flex justify-between">
      <a href="/">
        <p className="font-JetBrains">{"{ AScode }"}</p>
      </a>
      <nav className="flex gap-3 items-center">
        <a href="/whoami" className="text-base hover:text-accentColor dark:hover:text-darkAccentColor">Who Am I</a>
        <a href="/whatidid" className=" text-base hover:text-accentColor dark:hover:text-darkAccentColor">What I Did</a>
        <a href="/howtofindme" className=" text-base hover:text-accentColor dark:hover:text-darkAccentColor">How to Find me</a>
        <ResumeButtom/>
      </nav>
    </header>
  );
};

export default HeaderMain;
