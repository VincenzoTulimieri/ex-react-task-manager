import { Link } from "react-router-dom";

export default function TaskRow({ title, status, id, createdAt }) {

    const formatted = new Date(createdAt)
    const createdDate = formatted.toLocaleDateString("it-IT");
    const statusCLass = status.replace(" ","").toLowerCase()

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td><Link to={'task/:id'}className="vt-link" >{title}</Link></td>
                <td className={statusCLass}>{status}</td>
                <td>{createdDate}</td>
            </tr>
        </>
    )
}