import React from "react";
import SideBarCart from "./sideBarCart/SideBarCart";
function Navbar() {
  return (
    <div>
      <div style={{ background: "#F1F6FA" }}>
        <div class="container">
          <div className="row align-items-center pt-2">
            <div className="col-xl-3 col-lg-8 col-7 d-flex">
              <div className="dropdown selectBox">
                <a
                  href="#!"
                  className="dropdown-toggle selectValue text-reset"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD $
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      USD $
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      EUR €
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ms-6">
                <div className="dropdown selectBox">
                  <a
                    href="#!"
                    className="dropdown-toggle selectValue text-reset"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#!">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Arabic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center d-none d-md-block">
            <img
              src="/pics/8603429.png"
              alt="palestine"
              width={32}
              height={32}
            ></img>
            From concept to launch, this website was proudly developed in
            Palestine.
          </div>
        </div>
      </div>

      {/* navigation */}
      <nav className="navbar py-lg-4 py-3 px-0 border-bottom navbar-menu">
        <div className="container-fluid">
          <div className="row w-100 align-items-center g-0 gx-lg-3">
            <div className="col-xxl-10 col-lg-8">
              <div className="d-flex align-items-center">
                <button
                  className="navbar-toggler collapsed d-none d-lg-block"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbar-default2"
                  aria-controls="navbar-default2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    className="bi bi-text-indent-right text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </button>
                <a
                  className="navbar-brand d-none d-lg-block ms-4"
                  href="../../index.html"
                >
                  <big>
                    <img
                      src="/favicon.ico"
                      alt="eCommerce "
                      width={32}
                      height={32}
                    />
                    GreeNatik
                  </big>
                </a>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-6 d-none d-lg-block">
                      <form action="#" class="d-flex">
                        <div class="input-group">
                          <input
                            class="form-control rounded-start"
                            type="search"
                            placeholder="Search for anything"
                            aria-label="Search"
                          />
                          <button
                            class="btn btn-outline-secondary rounded-end"
                            type="button"
                          >
                            <i class="bi bi-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between w-100 d-lg-none align-items-center">
                <button
                  className="navbar-toggler collapsed "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbar-default2"
                  aria-controls="navbar-default2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    className="bi bi-text-indent-right text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </button>
                <a className="navbar-brand" href="../../index.html">
                  <img src="/favicon.ico" alt="e" width={32} height={32} />{" "}
                  GreeNatik
                </a>
                <div className="d-flex align-items-center lh-1">
                  <div className="list-inline me-2">
                    <div className="list-inline-item">
                      <a href="#!" className="text-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </a>
                    </div>
                    <div className="list-inline-item">
                      <a
                        className="text-muted position-relative "
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        href="#offcanvasExample"
                        role="button"
                        aria-controls="offcanvasRight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-shopping-bag"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1={3} y1={6} x2={21} y2={6} />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          1
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-4 d-flex align-items-center justify-content-end ">
              {/*icons start*/}
              <div className="list-inline  d-lg-block d-none">
                <div className="list-inline-item">
                  <a href="#!" className="text-muted position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="list-inline-item">
                  <a href="#!" className="text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </a>
                </div>
                <div className="list-inline-item">
                  <a
                    className="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="list-inline-item">
                  <a className="text-muted position-relative " href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-piggy-bank"
                      viewBox="0 0 14 14"
                    >
                      <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.138-1.496A6.6 6.6 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.6 7.6 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962" />
                      <path
                        fill-rule="evenodd"
                        d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595M2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.6 6.6 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.65 4.65 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393m12.621-.857a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199"
                      />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      230
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*icons end*/}
          {/*sidebar */}
          <div
            className="offcanvas offcanvas-start p-4 w-xxl-20 w-lg-30"
            id="navbar-default2"
          >
            <div className="d-flex justify-content-between align-items-center mb-2 ">
              <a
                className="text-decoration-none text-black"
                href="../../index.html"
              >
                <img
                  src="favicon.ico"
                  alt="eCommerce HTML Template"
                  width={32}
                  height={32}
                />
                GreeNatik
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </div>
        </div>
      </nav>
      <SideBarCart />
    </div>
  );
}

export default Navbar;
