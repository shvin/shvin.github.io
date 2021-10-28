import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Navbar toggleSidebar={toggleSidebar}/>
        </>
    )
}

export default Home
