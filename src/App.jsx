import { Main } from "./components/Main"
import Navbar from "./components/Nav"
import { Cards } from "./components/Cards"

function App() {

  return (
    <main className="h-screen bg-[#524EE5] font-[poppins]">
      <Navbar   />
      <Main />
      <Cards />
    </main>
  )
}


export default App
