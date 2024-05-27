import React, { useEffect } from 'react';
import Sidebar from '../../../components/dashboard/sidebar';
import BlogRow from '../../../components/blog/BlogRow';
import PaginationBlog from '../../../components/blog/PaginationBlog';

export default function AllBlogsDash() {

  useEffect(() => {
    document.title = "Blog Dashboard";
  }, []);

  return (
    <>
      <div className="container ">
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-12 mt-4">
            {/* breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#!">Dashboard</a></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <section className="mt-8">
        {/* container */}
        <div className='container'>
          <div className="row ">
            <div className="col-md-12">
              <div className="d-md-flex justify-content-between align-items-center">

                {/* row */}
                <div className="row">
                  <div className="col-12 mb-0">
                    {/* heading */}
                    <h1 className="fw-bold">My Blogs</h1>
                  </div>

                </div>
                {/* button */}
                <div>
                  <a href="/create-new-blog" className="btn btn-primary">Create New Blog</a>
                </div>
              </div>
            </div>
          </div>
          <main className="main-content-wrapper">
            <div className="d-md-flex justify-content-between align-items-center">
              {/* SideBar */}

              <Sidebar />
              <div className="container">
                {/* row */}
                <div className="row">
                  <div className="col-xl-12 col-12 mb-5">
                    {/* card */}
                    <div className="card h-100 card-lg">
                      <div className="px-6 py-6">
                        <div className="row justify-content-between">
                          {/* form */}
                          <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                            <form className="d-flex" role="search">
                              <input className="form-control" type="search" placeholder="Search Products" aria-label="Search" />
                            </form>
                          </div>
                          {/* select option */}
                          <div className="col-lg-2 col-md-4 col-12">
                            <select className="form-select">
                              <option selected>Status</option>
                              <option value={1}>Active</option>
                              <option value={2}>Deactive</option>
                              <option value={3}>Draft</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body p-0">
                        {/* table */}
                        <div className="table-responsive">
                          <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                            <thead className="bg-light">
                              <tr>
                                <th>
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
                                    <label className="form-check-label" htmlFor="checkAll" />
                                  </div>
                                </th>
                                <th>Image</th>
                                <th>Blog Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Create at</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <BlogRow cover='https://i.imgur.com/iPi7mWX.png' title='Will Sustainable Living Make You Happier?' category='LifeStyle' status='Active' timestamp='22 April 2023' />
                              <BlogRow cover='https://i.imgur.com/iPi7mWX.png' title='Will Sustainable Living Make You Happier?' category='LifeStyle' status='Active' timestamp='22 April 2023' />
                              <BlogRow cover='https://i.imgur.com/iPi7mWX.png' title='Will Sustainable Living Make You Happier?' category='LifeStyle' status='Active' timestamp='22 April 2023' />
                              <BlogRow cover='https://i.imgur.com/iPi7mWX.png' title='Will Sustainable Living Make You Happier?' category='LifeStyle' status='Active' timestamp='22 April 2023' />
                              <BlogRow cover='https://i.imgur.com/iPi7mWX.png' title='Will Sustainable Living Make You Happier?' category='LifeStyle' status='Active' timestamp='22 April 2023' />
                              <BlogRow cover='https://i.imgur.com/iPi7mWX.png' title='Will Sustainable Living Make You Happier?' category='LifeStyle' status='Active' timestamp='22 April 2023' />

                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                        <span>Showing 1 to 8 of 12 entries</span>
                        <div className="mt-2 mt-md-0">
                          <PaginationBlog />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>


    </>
  );
}