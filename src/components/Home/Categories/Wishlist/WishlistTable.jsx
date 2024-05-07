import React, { useState, useEffect } from "react";

const WishlistTable = () => {
  const [wishlist, setWishlist] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchWishlistData = async () => {
      const fetchedData = [
        {
          id: 1,
          image: process.env.PUBLIC_URL + '/pics/product-img-18.png',
          name: "Organic Banana",
          price: "$35.00",
          status: "In Stock",
          selected: false,
        },
        {
          id: 2,
          image: process.env.PUBLIC_URL + '/pics/product-img-17.png',
          name: "Fresh Kiwi",
          price: "$20.97",
          status: "Out of Stock",
          selected: false,
        },
        {
          id: 3,
          image: process.env.PUBLIC_URL + '/pics/product-img-16.png',
          name: "Golden Pineapple",
          price: "$35.00",
          status: "In Stock",
          selected: false,
        },
        {
          id: 4,
          image: process.env.PUBLIC_URL + '/pics/product-img-19.png',
          name: "BeatRoot",
          price: "$29.00",
          status: "In Stock",
          selected: false,
        },
        {
          id: 5,
          image: process.env.PUBLIC_URL + '/pics/product-img-15.png',
          name: "Fresh Apple",
          price: "$70.00",
          status: "In Stock",
          selected: false,
        },
      ];

      setWishlist(fetchedData);
    };

    fetchWishlistData();
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedWishlist = wishlist.map((item) => ({
      ...item,
      selected: !selectAll,
    }));
    setWishlist(updatedWishlist);
  };

  const handleSelectItem = (id) => {
    const updatedWishlist = wishlist.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setWishlist(updatedWishlist);
    setSelectAll(updatedWishlist.every((item) => item.selected));
  };

  const handleDeleteItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <section className="mt-8 mb-14">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-8">
              <h1 className="mb-1">My Wishlist</h1>
              <p>There are 5 products in this wishlist.</p>
            </div>
            <div className="table-responsive">
              <table className="table text-nowrap table-padding">
                <thead className="table-light">
                  <tr>
                    <th>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkAll"
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkAll"
                        ></label>
                      </div>
                    </th>
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
                    <tr key={item.id}>
                      <td className="align-middle">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            checked={item.selected}
                            onChange={() => handleSelectItem(item.id)}
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href="#1">
                          <img
                            src={item.image}
                            className="icon-shape icon-xxl"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <a href="#1" className="text-inherit">
                              {item.name}
                            </a>
                          </h5>
                          <small>{item.price}</small>
                        </div>
                      </td>
                      <td className="align-middle">{item.price}</td>
                      <td className="align-middle">
                        <span
                          className={`badge ${
                            item.status === "In Stock"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="align-middle">
                        <a href="/cart" className="btn btn-primary btn-sm">Add to Cart</a>
                      </td>
                      <td className="align-middle ">
                        <a
                          href="#!"
                          className="text-muted"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Delete"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </a>
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
