import { Link } from "react-router-dom";

export default function Layout({children}){
    return (
        <>
            <nav>
                <Link to="/" />
                <Link to="/characters" />
            </nav>
            <main>
            {children}
            </main>
        </>
    )
}