import React from 'react'
import { Navigate } from 'react-router-dom'
import { Home, Search, Plus, User,  LogIn } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import "tailwindcss"

const Navbar = () => {
    const navigate = useNavigate()


    return (<>
        <nav className="nav">

            <button onClick={() => navigate("/feed")} > <Home/></button>
            <button onClick={() => navigate("/create-post")}> <Plus/></button>
            <button onClick={() => navigate("/feed")}> <Search /></button>      
            <button onClick={() => navigate("/feed")}> <LogIn />  </button>

            <button><User /></button> 

        </nav>
    </>
    )
}

export default Navbar


 
