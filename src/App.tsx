// import { Container } from "react-bootstrap"
import { Navi } from "./components/Navi"
import { Detail } from "./pages/Detail"
import "./app.css"

// import { Route, Routes } from "react-router-dom"

export function App (){
  return (
    <>
    <Navi />
    <Detail />
    
    {/* <Container>
      <Routes>
        <div>Hello</div>
        <Route path='/' element={<Home />} />
      </Routes>
    </Container> */}
    </>

    

  )
}