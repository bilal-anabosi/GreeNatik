import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div className="table-responsive">
      <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
        <thead className="bg-light">
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Price</th>
            <th>Create at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img  src={product.images[0] ? `http://localhost:4000/${product.images[0]}` : 'path/to/default-image.jpg'} alt="" className="icon-shape icon-md" />
              </td>
              <td><a href="#" className="text-reset">{product.title}</a></td>
              <td>{product.category}</td>
              <td>
                <span className={`badge bg-light-${product.status === 'Active' ? 'primary' : product.status === 'Disabled' ? 'danger' : 'warning'} text-dark-${product.status === 'Active' ? 'primary' : product.status === 'Disabled' ? 'danger' : 'warning'}`}>{product.status}</span>
              </td>
              <td>{product.regularPrice}</td>
              <td>{new Date(product.createdAt).toLocaleDateString()}</td>
              <td>
                <div className="dropdown">
                  <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="feather-icon icon-more-vertical fs-5"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-trash me-3"></i>
                        Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-pencil-square me-3"></i>
                        Edit
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
