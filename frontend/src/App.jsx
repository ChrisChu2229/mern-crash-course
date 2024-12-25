import { useState } from 'react'
import './App.css'
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from './components/Navbar.jsx'
import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { useColorModeValue } from './components/ui/color-mode'


function App() {
  const [count, setCount] = useState(0)

  return (
        <Box minH={"100vh"} bg={useColorModeValue("gray.900", "white")}>
          <Navbar/>
          
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/create" element={<CreatePage/>} />
          </Routes>
        </Box>
      


  )
}

export default App
