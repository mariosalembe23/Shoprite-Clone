
import { useState } from "react";
import LinksSearch from "./LinkSearch";

export default function Formsearch() {
  const linksSearch = [
    { nameLink: "Ofertas", url: "#ofertas" },
    { nameLink: "Bebés", url: "#bebes" },
    { nameLink: "Saúde e Beleza", url: "#saude" },
    {
      nameLink: "Encontrar uma Loja",
      url: "https://www.shoprite.co.ao/pt/localizador-de-loja.html",
    },
    { nameLink: "Talho", url: "#talho" },
    { nameLink: "Serviços de Quiosque", url: "#quiosque" },
    {
      nameLink: "Receitas",
      url: "https://www.shoprite.co.ao/pt/receitas.html",
    },
    {
      nameLink: "Mobílias e Acessórios",
      url: "#ofertas",
    },
    {
      nameLink: "Alimentos e Pratos",
      url: "#ofertas",
    },
    {
      nameLink: "Moda e Cosméticos",
      url: "#ofertas",
    },
    {
      nameLink: "E-books Infantis",
      url: "#bebes",
    },
    {
      nameLink: "Bodycare",
      url: "#saude",
    },
    {
      nameLink: "Carne e Pratos",
      url: "#talho",
    },
    {
      nameLink: "Cartão de Negócio",
      url: "#quiosque",
    },
  ];

  const [data, setData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [inputEmpty, setinputEmpty] = useState("");

  function findResults(e) {
    const valueInput = e.target.value;
    if (valueInput === "") {
      setData([]);
      setNoResults(false);
      setinputEmpty("");
      return;
    }

    setinputEmpty(valueInput);
    const results = linksSearch.filter(
      (link) =>
        link.nameLink.toLowerCase().startsWith(valueInput.toLowerCase()) ||
        link.nameLink.toLowerCase() === valueInput.toLowerCase() ||
        link.nameLink.toLowerCase().includes(valueInput.toLowerCase())
    );
    setData(results);
    setNoResults(results.length == 0);
  }

  function closeSearchBox() {
    const searchInput = document.getElementById("search");
    const backMask = document.querySelector(".backMask");
    const cardSearch = document.querySelector(".cardSearch");
    backMask.classList.remove("hidden");
    backMask.classList.remove("backMask_on");
    backMask.classList.add("backMask_off");
    cardSearch.classList.remove("cardSearch_visible");
    cardSearch.classList.add("cardSearch_unvisible");
    setTimeout(() => {
      cardSearch.classList.add("hidden");
    }, 600);
    document.body.style.overflow = "auto";
    setinputEmpty("");
    searchInput.value = "";
  }
  return (
    <aside className="backMask w-full hidden h-screen fixed top-0 p-4 left-0 right-0 z-20">
      <div className="cardSearch hidden max-w-5xl h-96  flex-col shadow-xl w-full bg-white rounded mx-auto mt-20">
        <header className="px-5  border-b">
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="formInput w-full space-x-2 flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  data-slot="icon"
                  class="w-6 h-6 stroke-zinc-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
              
                onInput={findResults}
                className="px-3 placeholder:text-zinc-700 py-4 retrato-tablet:text-base text-[15px] border-r outline-none  w-full"
                type="text"
                name="search"
                id="search"
                placeholder="Pesquise por Serviços ou Produtos"
              />
              <button
                type="button"
                onClick={closeSearchBox}
                title="Fechar"
                className="ps-2 font-medium text-zinc-900 transition-all hover:text-red-600"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </form>
        </header>
        <div className="w-full h-full overflow-y-auto">
          {inputEmpty == "" ? (
            <div className="w-full h-full flex items-center justify-center px-5 pt-3 ">
              <div className="w-full text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  class="w-6 h-6 m-auto text-zinc-600 icon_wating"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
                <p className="mt-2 text-zinc-700 font-medium text_wating">
                  Aguardando Pesquisas...
                </p>
              </div>
            </div>
          ) : (
            <div className="p-5 mt-2">
              {noResults ? (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-medium text-[14px] font-['Poppins'] text-white bg-black rounded-full px-5 py-1.5 ">
                    Sem Resultados da Pesquisa!
                  </p>
                </div>
              ) : (
                <div>
                  <header className="mb-2">
                    <span className=" text-zinc-600 ">Resultados</span>
                  </header>
                  {data.map((link, index) => (
                    <div className="grid grid-cols-1 gap-2">
                      <LinksSearch
                        keyName={index}
                        nameLink={link.nameLink}
                        url={link.url}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
{
  /*  */
}

{
  /* {noResults ? (
                <p>Sem Resultados Encontrados!</p>
              ) : (
                <ul>
                  {data.map((link, index) => (
                    <li key={index}>{link.nameLink}</li>
                  ))}
                </ul>
              )} */
}
