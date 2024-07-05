import { Navbar, Footer } from "../components"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout