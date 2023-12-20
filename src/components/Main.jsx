import CardOferta from "./CardOferta";
import React, { useEffect, useRef } from "react";
import CardTalho from "./CardTalho";

export default function Main() {
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        const cardDown = document.querySelectorAll(".cardDown");
        const cardUp = document.querySelectorAll(".cardUp");
        if (entry.isIntersecting) {
          cardDown.forEach((card) => {
            card.classList.remove("RemoveanimationDown");
            card.classList.add("animationDown");
          });

          cardUp.forEach((card) => {
            card.classList.remove("RemoveanimationUp");
            card.classList.add("animationUp");
          });
        } else {
          cardDown.forEach((card) => {
            card.classList.remove("animationDown");
            card.classList.add("RemoveanimationDown");
          });

          cardUp.forEach((card) => {
            card.classList.remove("animationUp");
            card.classList.add("RemoveanimationUp");
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <main className=" m-auto w-full">
      <section className="w-full mt-20" id="ofertas">
        <header className="text-center p-5">
          <h2 className="paisagem-tablet:text-5xl retrato-tablet:text-4xl text-3xl text-slate-900 font-semibold">
            As Melhores Ofertas
          </h2>
          <hr className="m-auto w-14  rounded h-2 bg-red-600 border-0 mt-5" />
          <p className="max-w-4xl w-full m-auto py-5 text-slate-800">
            Descubra o mundo de descontos e economia em nossa loja! Temos o
            prazer de apresentar nossas irresistíveis ofertas que foram
            cuidadosamente selecionadas para proporcionar a você o máximo de
            valor em cada compra.
          </p>
        </header>

        <div className=" mb-20 grid paisagem-tablet:grid-cols-4 retrato-tablet:grid-cols-2 grid-cols-1  items-center mt-5  w-full">
          <CardOferta
            categoria={"Mobílias e Acessórios"}
            descricao={" Equipamentos e Aparelhos para sua Casa!"}
            image={'bg-[url("/img/mobilia.jpg")]'}
          />
          <CardOferta
            categoria={"Alimentos e Pratos Deliciosos"}
            descricao={"A Melhor Qualidade e Sabor!"}
            image={'bg-[url("/img/food.jpg")]'}
          />{" "}
          <CardOferta
            categoria={"Aparelhos Domésticos"}
            descricao={"Aparelhos para Lhe Poupar Tempo!"}
            image={'bg-[url("/img/domesticos.jpg")]'}
          />
          <CardOferta
            categoria={" Moda e Cosméticos"}
            descricao={"Mude de Visual com nossos Produtos!"}
            image={'bg-[url("/img/woman.jpg")]'}
          />
        </div>
      </section>

      <section className="p-5" id="bebe">
        <header className="text-center">
          <h2 className="paisagem-tablet:text-5xl retrato-tablet:text-4xl text-3xl text-slate-900 font-semibold">
            Cuide da Saúde de seu Bebê!
          </h2>
          <hr className="m-auto w-14  rounded h-2 bg-red-600 border-0 mt-5" />
          <p className="max-w-4xl text-slate-800 w-full m-auto py-5">
            Cuidar dos bebês é uma responsabilidade vital e gratificante que
            desempenha um papel crucial no desenvolvimento saudável e no
            bem-estar emocional e físico das futuras gerações.
          </p>
        </header>

        <article className="max-w-4xl mt-10 w-full m-auto items-center justify-center grid grid-cols-1 retrato-tablet:gap-0 gap-3 retrato-tablet:grid-cols-3">
          <div className="bg-white rounded-l shadow-xl h-80 retrato-tablet:p-3 p-4 flex justify-center items-center relative">
            <div>
              <header>
                <h3 className="text-center text-zinc-800 text-xl font-medium">
                  E-books e Livros
                </h3>
              </header>
              <p className="text-[13px] text-zinc-800 text-center mt-3">
                Descubra o mundo encantador da maternidade e paternidade com
                nossos e-books e livros em PDF exclusivos sobre cuidados com
                bebês! Em cada página, oferecemos orientações práticas,
                conselhos especializados!
              </p>
              <footer className="text-center mt-5">
                <button className="text-[14px] transition-all hover:bg-red-700 ring-4 ring-red-200  px-3 py-2 bg-red-600 text-white font-medium rounded">
                  Acessar
                </button>
              </footer>
            </div>
          </div>
          <div className="bg-red-600 rounded h-96 flex justify-center items-center retrato-tablet:p-3 p-4">
            <div>
              <header>
                <h3 className="text-center text-white text-xl font-medium">
                  Produtos Intantis
                </h3>
              </header>
              <p className="text-[13px] text-white text-center mt-3">
                Explore nossa incrível variedade de produtos cuidadosamente
                selecionados para tornar a infância dos seus pequenos ainda mais
                especial! Em nossa coleção, você encontrará desde brinquedos
                educativos e roupas adoráveis!
              </p>
              <footer className="text-center mt-5 px-4">
                <button className="text-[14px] w-full transition-all  ring-4 ring-opacity-30 ring-zinc-100  px-3 py-2 bg-white text-red-600 font-medium rounded">
                  Ver Tudo
                </button>
              </footer>
            </div>
          </div>
          <div className="bg-white rounded-r shadow-xl h-80 retrato-tablet:p-3 p-4 flex justify-center items-center relative">
            <div>
              <header>
                <h3 className="text-center text-zinc-800 text-xl font-medium">
                  Dicas Rápidas
                </h3>
              </header>
              <p className="text-[13px] text-zinc-800 text-center mt-3">
                Desvende os segredos para uma parentalidade tranquila com nossas
                dicas rápidas e práticas para cuidados com bebês! Em um mundo
                onde o tempo é precioso, oferecemos orientações eficientes que
                se encaixam perfeitamente na agitada rotina dos pais modernos.
              </p>
              <footer className="text-center mt-5">
                <button className="text-[14px] transition-all hover:bg-red-700 ring-4 ring-red-200  px-3 py-2 bg-red-600 text-white font-medium rounded">
                  Acessar
                </button>
              </footer>
            </div>
          </div>
        </article>
      </section>

      <section className="p-5 mt-12 care" ref={elementRef}>
        <div className="grid items-center gap-5 grid-cols-1 retrato-tablet:grid-cols-2 max-w-6xl w-full m-auto">
          <div className="p-3">
            <header>
              <h3 className="text-3xl font-semibold retrato-tablet:text-start text-center text-slate-900">
                Cuide de seu Corpo, Pele e Cabelo!
              </h3>
              <p className="mt-4 text-slate-800">
                Desperte a beleza natural que existe em você com nossa exclusiva
                gama de produtos e dicas dedicadas a aprimorar a saúde da sua
                pele e cabelo! Na busca pela radiância e confiança, oferecemos
                uma seleção cuidadosamente escolhida para atender às suas
                necessidades específicas.
              </p>
            </header>
            <div className="grid mt-6 paisagem-tablet:grid-cols-2 grid-cols-1 items-center gap-3">
              <a
                href="#"
                className="flex items-center justify-between py-3 transition-all hover:ring-slate-800 hover:text-black px-3 bg-white ring-2 ring-slate-300 text-slate-800 rounded"
              >
                <span className="text-[14px] font-medium">
                  Cuidados da Pele
                </span>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-between transition-all hover:ring-4 ring-opacity-10 hover:ring-zinc-400 py-3 px-3 bg-black  ring-black text-white rounded"
              >
                <span className="text-[14px]">Cuidados do Cabelo</span>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-between transition-all hover:ring-4 ring-opacity-10 hover:ring-zinc-400 py-3 px-3 bg-black  ring-black text-white rounded"
              >
                <span className="text-[14px]">Pele Saudável</span>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-between py-3 px-3 bg-white ring-2 transition-all hover:ring-slate-800 hover:text-black  ring-slate-300 text-slate-800 rounded"
              >
                <span className="text-[14px] font-medium">Bodycare</span>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 paisagem-tablet:px-3 px-0">
            <div className="grid retrato-tablet:grid-cols-4 grid-cols-1 gap-1">
              <div className="p-5  h-80 shadow-lg cardDown  ring-2 ring-slate-200  card__image"></div>
              <div className="p-5  h-80 shadow-lg cardUp  ring-2 ring-slate-200  card__image"></div>
              <div className="p-5  h-80 shadow-lg cardDown  ring-2 ring-slate-200  card__image"></div>
              <div className="p-5  h-80 shadow-lg cardUp  ring-2 ring-slate-200  card__image"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28">
        <header className="text-center mb-8">
          <h2 className="paisagem-tablet:text-5xl retrato-tablet:text-4xl text-3xl text-slate-900 font-semibold">
            Talho
          </h2>
          <hr className="m-auto w-14  rounded h-2 bg-red-600 border-0 mt-5" />
        </header>
        <div className="grid grid-cols-1 retrato-tablet:grid-cols-3 paisagem-tablet:grid-cols-4 items-center">
          <CardTalho image={"bg-[url('/img/carne1.jpg')]"} hours={2} />
          <CardTalho image={"bg-[url('/img/carne2.jpg')]"} hours={4} />
          <CardTalho image={"bg-[url('/img/carne3.jpg')]"} hours={1} />
          <CardTalho image={"bg-[url('/img/carne4.jpg')]"} hours={5} />
          <CardTalho image={"bg-[url('/img/carne5.jpg')]"} hours={3} />
          <CardTalho image={"bg-[url('/img/carne6.jpg')]"} hours={7} />
          <CardTalho
            image={
              "bg-[url('/img/carne7.jpg')] retrato-tablet:hidden paisagem-tablet:inline-block"
            }
            hours={6}
          />
          <CardTalho
            image={
              "bg-[url('/img/carne8.jpg')] retrato-tablet:hidden paisagem-tablet:inline-block"
            }
            hours={9}
          />
        </div>
      </section>
    </main>
  );
}
