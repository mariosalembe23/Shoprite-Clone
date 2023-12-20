export default function CardTalho({ image, hours }) {
  return (
    <div className={`cardTalho cursor-pointer h-56 ${image}`}>
      <div className="w-full maskTalho h-full p-3 flex flex-col justify-between">
        <header>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-5 h-5 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-white font-medium">{hours}h</p>
          </div>
        </header>

        <footer className="text-end">
          <button className="bg-transparent transition-all hover:bg-red-600 hover:ring-0 ring-4 ring-white px-5 p-1.5 ring-opacity-30 text-white rounded font-medium text-[14px]">
            Provar
          </button>
        </footer>
      </div>
    </div>
  );
}
