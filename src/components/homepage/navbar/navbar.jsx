

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="/"
            className="text-[#1da1f2] text-3xl font-bold"
          >
            Asen Chochev
          </a>
        </div>

        <ul
  className="mt-6 flex h-screen max-h-0 w-full flex-col items-start text-lg font-medium tracking-wide opacity-0
  md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-6 md:border-0 md:opacity-100"
  id="navbar-default"
>
  {[
    { to: "/#about", label: "ABOUT" },
    { to: "/#experience", label: "EXPERIENCE" },
    { to: "/#skills", label: "SKILLS" },
    { to: "/#education", label: "EDUCATION" },
    { to: "/#projects", label: "PROJECTS" },
  ].map(({ to, label }) => (
    <li key={label} className="group relative">
      <a
        href={to}
        className="block px-4 py-2 text-white transition duration-300 hover:text-[#7c6ff9]"
      >
        {label}
        {/* underline animation */}
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#7c6ff9] transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
      </a>
    </li>
  ))}
</ul>

      </div>
    </nav>
  );
}

export default Navbar;