import { Link, Outlet } from "react-router-dom";

export default function CategoryLayout(){
    return (
        <>              {/* tom container for å fortelle react at dette skal rendres samlet */}
        <nav>
            <Link to="sko">Sko</Link>
            <Link to="bukse">Bukse</Link>
            <Link to="topp">Topp</Link>
            <Link to="kjole">Kjole</Link>
            <Link to="skjorter">Skjorter</Link>
        </nav>
        <Outlet />
        </>             // tom container avsluttes
    )
}