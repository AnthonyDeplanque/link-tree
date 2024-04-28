import { Routes, Route } from "react-router-dom"
import Legal from "../Legal"
import LinkList from "../links/LinkList"
import Login from "../authentication/Login"


const Router = () => {
  return (


    <Routes>
      <Route path="/" Component={LinkList} />
      <Route path="/login" Component={Login} />
      <Route path="/legal" Component={Legal} />
      <Route path="*" Component={() => <p>404</p>} />
    </Routes>


  )
}

export default Router