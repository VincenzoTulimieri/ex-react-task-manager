import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid justify-content-between">
                    <h1><NavLink to={'/'} className="vt-link-h1">Lista delle Task</NavLink></h1>
                    <NavLink to={'add-task'} className="btn btn-primary" >Aggiungi Task</NavLink>
                </div>
            </nav>
        </header>
    )
}