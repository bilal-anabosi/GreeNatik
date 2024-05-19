import React, { useState, useEffect } from "react";
import axios from 'axios';

const WishlistTable = () => {
  const [wishlist, setWishlist] = useState([]);
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchWishlistData = async () => {
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/wishlist', {
          headers: {
            'Authorization': `group__${token}`
          }
        });
        setWishlist(response.data.products);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlistData();
  }, [token]);

  const handleDeleteItem = async (id) => {
    if (!token) {
      console.error('No token found');
      return;
    }

    console.log(`Attempting to delete item with ID: ${id} `);

    try {
      const response = await axios.delete(`http://localhost:4000/wishlist/${id}`, {
        headers: {
          'Authorization': `group__${token}`,
        },
      
      });

      if (response.status === 200) {
        const updatedWishlist = wishlist.filter((item) => item._id !== id);
        setWishlist(updatedWishlist);
        console.log(`Item with ID: ${id}  successfully deleted`);
      } else {
        console.error(`Failed to delete item with ID: ${id}  status code: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error deleting item with ID: ${id} `, error);
    }
  };

  return (
    <section className="mt-8 mb-14">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-8">
              <h1 className="mb-1">My Wishlist</h1>
              <p>There are {wishlist.length} products in this wishlist.</p>
            </div>
            <div className="table-responsive">
              <table className="table text-nowrap table-padding">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => (
                    <tr key={item._id}>
                      <td className="align-middle">
                        <a href="#1">
                          <img
                            src={item.product.images && item.product.images[0] ? `http://localhost:4000/${item.product.images[0]}` : 'path/to/default-image.jpg'}
                            className="icon-shape icon-xxl"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <a href="#1" className="text-inherit">
                              {item.product.title}
                            </a>
                          </h5>
                          <small>{item.product.price}</small>
                        </div>
                      </td>
                      <td className="align-middle">{item.product.amount}</td>
                      <td className="align-middle">
                        <span
                          className={`badge ${item.product.status ? "bg-success" : "bg-danger"}`}
                        >
                          {item.product.status ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="align-middle">
                        <a href="/cart" className="btn btn-primary btn-sm">Add to Cart</a>
                      </td>
                      <td className="align-middle">
                      <button
  href="!"
  className="text-muted"
  data-bs-toggle="tooltip"
  data-bs-placement="top"
  aria-label="Delete"
  style={{
    border: 'none',
    background: 'none',
    padding: '0',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: 'none' 
  }}
  onClick={() => handleDeleteItem(item._id)}
>


                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistTable;
