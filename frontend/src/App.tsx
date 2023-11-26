import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./app.css"
import { Navi } from "./components/Navi"
// import { Searchbar } from "./components/Searchbar"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { LoginSuccess } from "./pages/LoginSuccess"
import { CreateSuccess } from "./pages/CreateSuccess"
import { Confirm } from "./pages/Confirm"
import { MessageSent } from "./pages/MessageSent"

export function App (){
  return (
    <>
    <Navi />
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login-success" element={<LoginSuccess />}></Route>
      <Route path="/login-success" element={<LoginSuccess />}></Route>
      <Route path="/create-success" element={<CreateSuccess />}></Route>
      <Route path="/confirm" element={<Confirm />}></Route>
      <Route path="/sent" element={<MessageSent />}></Route>
     </Routes>
    </BrowserRouter>
    </>

  )
}