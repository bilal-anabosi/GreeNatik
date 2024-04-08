import React from "react";
import Product from "./Product";
const products = [
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "heey",
    price: 4,
    newPrice: 2,
  },
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "wewewewe",
    price: 40,
    // newPrice: 21,
  },
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "wewewewe",
    price: 21,
    newPrice: 6,
  },
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "wewewewe",
    price: 23,
    newPrice: 11,
  },
];
const Cart = () => {
  return (
    <div>
      <div>
        <main>
          <div className="mt-4">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#!">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#!">Shop</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Shop Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card py-1 border-0 mb-8">
                    <div>
                      <h1 className="fw-bold">Shop Cart</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div className="py-3">
                    <ul className="list-group list-group-flush">
                      {products.map((product, index) => (
                        <Product
                          key={index}
                          imgSrc={product.imgSrc}
                          title={product.title}
                          price={product.price}
                          newPrice={product.newPrice}
                        />
                      ))}
                    </ul>
                    {/* btn */}
                    <div className="d-flex justify-content-between mt-4">
                      <a href="#!" className="btn btn-primary">
                        Continue Shopping
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-5">
                  <div className="mb-5 card mt-6">
                    <div className="card-body p-6">
                      <h2 className="h5 mb-4">Summary</h2>
                      <div className="card mb-2">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Item Subtotal</div>
                            </div>
                            <span>$70.00</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Service Fee</div>
                            </div>
                            <span>$3.00</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div className="fw-bold">Subtotal</div>
                            </div>
                            <span className="fw-bold">$67.00</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-grid mb-1 mt-4">
                        <button
                          className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                          type="submit"
                        >
                          Go to Checkout
                          <span className="fw-bold">$67.00</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Cart;
