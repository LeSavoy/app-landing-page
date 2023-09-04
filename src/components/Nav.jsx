export function Navbar () {
  return (
    <>
      <header>
        <nav className="flex justify-around pt-8 text-white items-center">
          <div className="font-medium">
            <span>RETRO</span>
          </div>

          <div>
            <ul className="flex gap-10 text-sm">
              <li>Home</li>
              <li>Features</li>
              <li>About Pay</li>
              <li>ScreenShots</li>
            </ul>
          </div>

          <div className="w-32 h-9 text-sm font-medium flex items-center justify-center bg-[#C3FF9D] text-black rounded">
            <button>DOWNLOAD</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar