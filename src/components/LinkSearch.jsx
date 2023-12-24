export default function LinksSearch({ keyName, nameLink, url }) {
  function closeCardSearch() {
    const backMask = document.querySelector(".backMask");
    const cardSearch = document.querySelector(".cardSearch");
    backMask.classList.remove("hidden");
    backMask.classList.remove("backMask_on");
    backMask.classList.add("backMask_off");
    cardSearch.classList.remove("cardSearch_visible");
    cardSearch.classList.add("cardSearch_unvisible");
    document.body.style.overflow = "auto";
  }
  return (
    <a
      href={url}
      key={keyName}
      onClick={closeCardSearch}
      className="py-4 link-search rounded flex items-center transition-all hover:ring-2 ring-zinc-600 justify-between px-5 bg-gray-100 my-1"
    >
      {nameLink}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 stroke-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  );
}
