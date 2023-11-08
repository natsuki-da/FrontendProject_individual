import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./app.css"
import { Navi } from "./components/Navi"
// import { Searchbar } from "./components/Searchbar"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"

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
     </Routes>
    </BrowserRouter>
    </>

  )
}