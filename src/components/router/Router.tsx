import { Routes, Route } from "react-router-dom"
import Legal from "../Legal"
import LinkList from "../LinkList"


const Router = () => {
  return (

    <Routes>
      <Route path="/" Component={LinkList} />
      <Route path="/legal" Component={Legal} />
      <Route path="*" Component={() => <p>404</p>} />
    </Routes>

  )
}

export default Router