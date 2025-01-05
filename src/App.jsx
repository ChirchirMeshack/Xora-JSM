import Features from "./sections/Features"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"

const App = () => {
  return (
    <main className="overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
        <Pricing></Pricing>
    </main>
  )
}

export default App