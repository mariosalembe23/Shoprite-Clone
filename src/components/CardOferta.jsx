export default function CardOferta({ categoria, descricao, image }) {
  return (
    <div className={`h-[28rem] card  ${image}`}>
      <div className="flex flex-col justify-between w-full h-full p-5  bg-[rgba(0,0,0,0.5)]">
        <header>
          <span className="text-white font-medium uppercase">{categoria}</span> <br />
          <small className="text-white">{descricao}</small>
        </header>
        <footer>
          <button className="w-full transition-all cursor-pointer rounded bg-white ring-4 ring-slate-300 ring-opacity-40 hover:ring-[.4rem] text-black font-medium py-2.5">
            {" "}
            Todas Ofertas
          </button>
        </footer>
      </div>
    </div>
  );
}
