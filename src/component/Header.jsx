import { CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <header className="w-full">
      <div className="bg-[#F2B21E]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-8">
          <div className="flex items-start gap-2 text-xs text-black sm:text-sm">
            <CiLocationOn className="mt-0.5 shrink-0 text-lg text-[#d78b41]" />
            <span className="leading-snug">
              House No, 17A Street 31, Islamabad
            </span>
          </div>

          <div className="flex items-center gap-4 self-start bg-white px-4 py-2 text-black md:self-auto md:py-0 md:h-10">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="transition hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.x.com"
              aria-label="Twitter"
              className="transition hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="transition hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com"
              aria-label="YouTube"
              className="transition hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
