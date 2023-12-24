import FormDialog from "./FormDialog";
import Formsearch from "./Formsearch";
import OffCanvas from "./OffCanvas";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="bg-black rounded-t-2xl p-5 relative">
      <div className="grid grid-cols-1 gap-8 retrato-tablet:grid-cols-2 max-w-5xl w-full m-auto">
        <div>
          <div className="midea flex items-center justify-center gap-5 p-3">
            <a
              href="#"
              className="text-zinc-500 transition-all hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-500 transition-all hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-500 transition-all hover:text-white"
            >
              <i className="bi bi-twitter icon_boot"></i>
            </a>
            <a
              href="#"
              className="text-zinc-500 transition-all hover:text-white"
            >
              <i className="bi bi-instagram icon_boot"></i>
            </a>
          </div>
          <div className="text-center">
            <a
              href="emailto=codejourney9@gmail.com"
              className="text-zinc-400 text-[14px] ps-4 transition-all hover:text-white"
            >
              morphosiscorporation@gmail.com
            </a>{" "}
            <br />
            <p className="text-zinc-500 ms-4 text-[14px] font-['Poppins']">
              shoprite&copy; - 2023
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="grid grid-cols-2">
            <div>
              <h6 className="text-zinc-500 font-medium pb-3">Links</h6>
              <ul className="flex flex-col space-y-1">
                <li>
                  <a
                    href="#ofertas"
                    className="text-zinc-600 text-[15px] transition-all hover:text-white hover:underline"
                  >
                    Ofertas
                  </a>
                </li>
                <li>
                  <a
                    href="#bebes"
                    className="text-zinc-600 text-[15px] transition-all hover:text-white hover:underline"
                  >
                    Bebés
                  </a>
                </li>
                <li>
                  <a
                    href="#saude"
                    className="text-zinc-600 text-[15px] transition-all hover:text-white hover:underline"
                  >
                    Saúde e Beleza
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-zinc-500 font-medium pb-3">Links</h6>
              <ul className="flex flex-col space-y-1">
                <li>
                  <a
                    href="https://www.shoprite.co.ao/pt/localizador-de-loja.html"
                    className="text-zinc-600 text-[15px] transition-all hover:text-white hover:underline"
                  >
                    Lojas
                  </a>
                </li>
                <li>
                  <a
                    href="#talho"
                    className="text-zinc-600 text-[15px] transition-all hover:text-white hover:underline"
                  >
                    Talho
                  </a>
                </li>
                <li>
                  <a
                    href="#quiosque"
                    className="text-zinc-600 text-[15px] transition-all hover:text-white hover:underline"
                  >
                    Serviços
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        title="Voltar ao Topo"
        className="buttonToTop transition-all hover:ring-4 ring-0 ring-slate-300 ring-opacity-30 hover:bg-white hover:text-black absolute right-4 top-4 text-white w-8 h-8 bg-zinc-950 flex items-center justify-center rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          data-slot="icon"
          class="w-5 h-5 stroke-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>

      <Formsearch />
      <FormDialog />
      <OffCanvas />
    </footer>
  );
}
