import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid justify-content-between">
                    <h1><Link to={'/'} className="vt-link-h1">Task List</Link></h1>
                    <Link to={'add-task'} className="btn btn-primary" >Add Task</Link>
                </div>
            </nav>
        </header>
    )
}