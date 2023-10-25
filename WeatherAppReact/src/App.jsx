import AirCondition from "./Components/AirCondition"
import Display from "./Components/Display"
import Search from "./Components/Search"
import Today from "./Components/Today"

function App() {
  return (
      <main className="flex justify-center flex-col w-full" >
        <Search/>
        <Display/>
        <Today/>
        <AirCondition/>
      </main>
  )
}

export default App
