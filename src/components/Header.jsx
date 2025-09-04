import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="mb-3">
            <nav className="navbar bg-body-secondary">
                <div className="container-fluid justify-content-between">
                    <h1><NavLink to={'/'} className="vt-link">Lista delle Task</NavLink></h1>
                    <NavLink to={'add-task'} className="btn btn-primary" >Aggiungi Task</NavLink>
                </div>
            </nav>
        </header>
    )
}