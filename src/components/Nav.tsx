import logoTxt from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="border-b-2 border-solid border-gray-200 sticky top-0 bg-[#f8f8f8]">
      <div className="flex container mx-auto justify-between items-center py-3">
        <img src={logoTxt} alt="logo-text" />

        <ul className="flex gap-3 text-[#4a515a]">
          <li>
            <a
              className="hover:text-pink-500 transition active:text-pink-300"
              href="#home">
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-pink-500 transition active:text-pink-300"
              href="#technologies">
              Technologies
            </a>
          </li>
          <li>
            <a
              className="hover:text-pink-500 transition active:text-pink-300"
              href="#projects">
              Projects{" "}
            </a>
          </li>
          <li>
            <a
              className="hover:text-pink-500 transition active:text-pink-300"
              href="#about">
              About{" "}
            </a>
          </li>
          <li>
            <a
              className="hover:text-pink-500 transition active:text-pink-300"
              href="#contact">
              Contact{" "}
            </a>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <a
            className="active:text-pink-500 text-[#4a515a]"
            href="#">
            Sign In
          </a>
          <button className="cursor-pointer text-white px-3 py-2 bg-pink-500 rounded-4xl border-solid  border-2 border-pink-500 hover:bg-white hover:text-pink-500 active:text-pink-300 active:border-pink-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
