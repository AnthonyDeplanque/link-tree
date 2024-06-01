import { Routes, Route } from "react-router-dom"
import Legal from "../Legal"
import LinkList from "../LinkList"
import Randomizer from "../randomizer/Randomizer"
import Home from "../Home"


const Router = () => {
  return (


    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/links" Component={LinkList} />
      <Route path="/legal" Component={Legal} />
      <Route path="/random" Component={Randomizer} />
      <Route path="*" Component={() => <p>404</p>} />
    </Routes>


  )
}

export default Router