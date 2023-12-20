export default function Banner() {
  return (
    <section className="banner max-w-5xl w-full p-5">
      <div className="text-center">
        <h1 className="paisagem-tablet:text-7xl retrato-tablet:text-5xl text-4xl font-bold text-white">
          Encontre Aqui Preços{" "}
          <span className="bg-red-700 rounded text-white px-5 ">Baixos</span> e
          de Confiança!
        </h1>
        <p className="retrato-tablet:pt-8  retrato-tablet:text-xl pt-5 text-white max-w-3xl w-full m-auto">
          Aqui, no coração da conveniência, oferecemos uma variedade imbatível
          de produtos de qualidade para atender às suas necessidades diárias.
        </p>

        <div className="flex flex-row justify-center gap-4 mt-5 items-center">
          <a
            href="#"
            className="retrato-tablet:w-48 w-full transition-all hover:bg-red-700 bg-red-600  ring-red-500 ring-4 ring-opacity-60 py-3 text-white font-medium rounded"
          >
            Encontre Lojas
          </a>
        </div>
      </div>
    </section>
  );
}
