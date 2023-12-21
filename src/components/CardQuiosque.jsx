export default function CardQuiosque({
  icon,
  title,
  introText,
  alternativeText,
}) {
  return (
    <div className="p-5 shadow-lg flex flex-col justify-between space-y-10 ring-red-400 rounded bg-white">
      <header>
        <img src={icon} className="w-7 h-7" alt={alternativeText} />
      </header>

      <footer>
        <h6 className="py-3 text-red-600 font-normal">{title}</h6>
        <p className="text-[14px] text-slate-900">{introText}</p>

        <button className="mt-5 cursor-pointer text-[14px] hover:ring-4 right-0 ring-red-500 transition-all ring-opacity-30 float-right bg-red-600 font-medium rounded px-5 py-2 text-white">
          Aderir
        </button>
      </footer>
    </div>
  );
}
