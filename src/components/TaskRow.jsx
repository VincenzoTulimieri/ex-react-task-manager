export default function TaskRow({ title, status, id, createdAt }) {

    const formatted = new Date(createdAt)
    const createdDate = formatted.toLocaleDateString("it-IT");

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{status}</td>
                <td>{createdDate}</td>
            </tr>
        </>
    )
}