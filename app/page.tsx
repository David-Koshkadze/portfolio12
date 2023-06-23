export default function Home() {
  return (
    <main className="bg-body-black min-h-screen text-white">
      <h1>Hello World</h1>
      <header className="navbar border fixed flex flex-col justify-start items-center left-16 top-16 w-16 h-[305px] shadow-lg rounded-full pt-1">
        <div className="rounded-full bg-gray-500 w-15 h-15">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Style=Round">
              <path
                id="Vector"
                d="M9.99778 19.3276V14.3276H13.9978V19.3276C13.9978 19.8776 14.4478 20.3276 14.9978 20.3276H17.9978C18.5478 20.3276 18.9978 19.8776 18.9978 19.3276V12.3276H20.6978C21.1578 12.3276 21.3778 11.7576 21.0278 11.4576L12.6678 3.92761C12.2878 3.58761 11.7078 3.58761 11.3278 3.92761L2.96778 11.4576C2.62778 11.7576 2.83778 12.3276 3.29778 12.3276H4.99778V19.3276C4.99778 19.8776 5.44778 20.3276 5.99778 20.3276H8.99778C9.54778 20.3276 9.99778 19.8776 9.99778 19.3276Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
      </header>
    </main>
  );
}
