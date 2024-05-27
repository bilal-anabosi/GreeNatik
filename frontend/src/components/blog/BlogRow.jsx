
export default function BlogRow(props) {
  return (
    <>
      <tr>
        <td>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="productOne" />
            <label className="form-check-label" htmlFor="productOne" />
          </div>
        </td>
        <td>
          <a href="#!"><img src={props.cover} alt className="img-fluid icon-shape icon-md" /></a>
        </td>
        <td><a href="#" className="text-reset">{props.title}</a></td>
        <td>{props.category}</td>
        <td>

          {/* ==> Here the color is conditional <== */}
          <span className={`badge bg-light-primary text-dark-primary`}>{props.status}</span>
        </td>
        <td>{props.timestamp}</td>
        <td>
          <div className="dropdown">
            <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots-vertical fs-5" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-trash me-3" />
                  Delete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-pencil-square me-3" />
                  Edit
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </>
  );
}