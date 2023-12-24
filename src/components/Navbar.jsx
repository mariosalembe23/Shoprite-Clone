export default function Navbar() {
  const scrollPage = () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
      return;
    }

    if (window.scrollY === 0) {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("shadow-md");
      navbar.classList.remove("bg-red-600");
    } else {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("shadow-md");
      navbar.classList.add("bg-red-600");
    }
  };

  scrollPage();

  function showOffCanvas() {
    const offcanvas = document.querySelector(".offcanvas");
    const backOffCanvas = document.querySelector(".backOffCanvas");
    backOffCanvas.classList.remove("hidden");
    backOffCanvas.classList.remove("backMask_off");
    backOffCanvas.classList.add("backMask_on");
    offcanvas.classList.remove("offcanvas_hide");
    offcanvas.classList.add("offcanvas_show");
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("scroll", scrollPage);

  function showFormContact() {
    const formContact = document.querySelector(".form_contact");
    const nameInput = document.getElementById("name");
    const backMaskForm = document.querySelector(".backMaskForm");
    backMaskForm.classList.remove("hidden");
    backMaskForm.classList.remove("backMask_off");
    backMaskForm.classList.add("backMask_on");
    formContact.classList.remove("hidden");
    formContact.classList.remove("form_contact_hide");
    formContact.classList.add("form_contact_show");
    document.body.style.overflow = "hidden";
    nameInput.focus();
  }

  function openSearchBox() {
    const searchInput = document.getElementById("search");
    const backMask = document.querySelector(".backMask");
    const cardSearch = document.querySelector(".cardSearch");
    backMask.classList.remove("hidden");
    backMask.classList.remove("backMask_off");
    backMask.classList.add("backMask_on");
    cardSearch.classList.remove("hidden");
    cardSearch.classList.remove("cardSearch_unvisible");
    cardSearch.classList.add("flex");
    cardSearch.classList.add("cardSearch_visible");
    document.body.style.overflow = "hidden";
    searchInput.focus();
  }

  return (
    <div className="w-full navbar fixed top-0 left-0 right-0 px-4 py-3 z-10 transition-all flex justify-between items-center">
      <div>
        <a href="index.html">
          <img
            src="/img/logo.png"
            className="w-40"
            alt="logomarca do Supermercado Shoprite"
          />
        </a>
      </div>

      <div className="px-2">
        <ul className="flex items-center space-x-6">
          <li>
            <button
              onClick={openSearchBox}
              title="Pesquisar"
              className="text-white transition-all hover:text-opacity-60 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </li>
          <li className="retrato-tablet:inline-block hidden">
            <button
              onClick={showFormContact}
              title="Contacto"
              className="text-white transition-all hover:text-opacity-60 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={showOffCanvas}
              title="Menu"
              className="text-white transition-all hover:text-opacity-60 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
