export default function OffCanvas() {
  function closeOffCanvas() {
    const offcanvas = document.querySelector(".offcanvas");
    const backOffCanvas = document.querySelector(".backOffCanvas");

    backOffCanvas.classList.remove("backMask_on");
    backOffCanvas.classList.add("backMask_off");
    offcanvas.classList.remove("offcanvas_show");
    offcanvas.classList.add("offcanvas_hide");
    setTimeout(() => {
      backOffCanvas.classList.remove("hidden");
    }, 600);
    document.body.style.overflow = "auto";
  }

  function showFormContact() {
    closeOffCanvas();
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
  return (
    <aside className=" backOffCanvas hidden w-full h-screen fixed top-0 left-0 right-0 z-20">
      <div className="offcanvas retrato-tablet:w-96 w-full bg-white fixed right-0 p-6 h-screen">
        <div className="w-full h-full relative">
          <header className="flex items-center w-full justify-between">
            <h6 className="font-medium text-zinc-700">Menu</h6>
            <button
              title="Fechar Menu"
              onClick={closeOffCanvas}
              className="text-zinc-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
          <nav className="mt-12">
            <ul className="flex flex-col space-y-6">
              <li>
                <a
                  onClick={closeOffCanvas}
                  href="#ofertas"
                  className="flex item_offcanvas text-zinc-700 transition-all hover:text-black items-center justify-between"
                >
                  Ofertas
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  onClick={closeOffCanvas}
                  href="#bebes"
                  className="flex item_offcanvas text-zinc-700 transition-all hover:text-black items-center justify-between"
                >
                  Bebés
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  onClick={closeOffCanvas}
                  href="#saude"
                  className="flex item_offcanvas text-zinc-700 transition-all hover:text-black items-center justify-between"
                >
                  Saúde e Beleza
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#talho"
                  onClick={closeOffCanvas}
                  className="flex item_offcanvas text-zinc-700 transition-all hover:text-black items-center justify-between"
                >
                  Talho
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  onClick={closeOffCanvas}
                  href="#quiosque"
                  className="flex item_offcanvas text-zinc-700 transition-all hover:text-black items-center justify-between"
                >
                  Serviço de Quiosque
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  onClick={closeOffCanvas}
                  href="https://www.shoprite.co.ao/pt/receitas.html"
                  target="_blank"
                  className="flex item_offcanvas text-zinc-700 transition-all hover:text-black items-center justify-between"
                >
                  Receitas
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={showFormContact}
            className="flex  justify-center w-full absolute bottom-1 transition-all ring-0 hover:ring-4 ring-opacity-60 ring-red-300 bg-red-600 py-2.5 rounded text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 me-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            Contacto
          </button>
        </div>
      </div>
    </aside>
  );
}
