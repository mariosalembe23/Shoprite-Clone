export default function FormDialog() {
  function closeFormContact() {
    const formContact = document.querySelector(".form_contact");
    const backMaskForm = document.querySelector(".backMaskForm");
    formContact.classList.remove("form_contact_show");
    formContact.classList.add("form_contact_hide");
    backMaskForm.classList.remove("hidden");
    backMaskForm.classList.remove("backMask_on");
    backMaskForm.classList.add("backMask_off");
    document.body.style.overflow = "auto";
  }
  return (
    <aside className="backMaskForm hidden w-full  h-screen fixed top-0 p-4 left-0 right-0 z-20">
      <div className="max-w-2xl form_contact flex flex-col justify-between mx-auto h-[28rem] shadow-lg mt-20 bg-white rounded">
        <header className="px-4 relative bg-red-600 flex justify-between items-center rounded-t  py-3">
          <img
            src="/img/logo.png"
            className="w-36"
            alt="logomarca do Supermercado Shoprite"
          />
          <button className=" text-white" onClick={closeFormContact}>
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

        <div className=" w-full h-full overflow-y-auto">
         
          <form
            className="p-5 paisagem-tablet:w-4/5 w-full m-auto mt-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label
                  htmlFor="Nome Completo"
                  className="text-[13px] text-zinc-600"
                >
                  Nome Completo
                </label>
                <div className="inputGroup transition-all focus-within:ring-zinc-700 mt-1 px-3  ring-1 ring-zinc-300  rounded w-full flex justify-between items-center">
                  <input
                    className="py-2 w-full outline-none placeholder:text-zinc-600"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Mário Salembe"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 stroke-zinc-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-[13px] text-zinc-600">
                  E-mail
                </label>
                <div className="inputGroup mt-1 px-3 transition-all focus-within:ring-zinc-700 ring-1 ring-zinc-300  rounded w-full flex justify-between items-center">
                  <input
                    className="py-2 w-full outline-none placeholder:text-zinc-600"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="fulano@gmail.com"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 stroke-zinc-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label htmlFor="mensagem" className="text-[13px] text-zinc-600">
                  Mensagem
                </label>
                <div className="inputGroup">
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    className="w-full mt-1 transition-all focus:ring-zinc-700 placeholder:text-zinc-600 outline-none ring-1 ring-zinc-300 rounded p-3"
                    rows="4"
                    placeholder="Escreva a mensagem..."
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="w-full ring-0 hover:ring-4 ring-zinc-700 transition-all ring-opacity-30 rounded bg-black text-white py-3 font-medium">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
}
