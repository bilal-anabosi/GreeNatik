import React, { useEffect, useState } from 'react';
import PaginationBlog from '../../components/blog/PaginationBlog';
import BlogCard from '../../components/blog/BlogCard';
import CategoryCard from '../../components/blog/CategoryCard';

function AllBlogs() {
  useEffect(() => {
    document.title = "GreeNatik Blog";
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/blog/public')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data); // Log the received data
        setBlogs(data.blogs || []); // Ensure blogs is always an array
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err); // Log the error
        setError(err);
        setLoading(false);
      });
  }, []); 
{/*
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }*/}

  return (
    <>
      <div>
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#!">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="fw-bold">GreeNatik Blog</h1>
              </div>
            </div>
          </div>
        </section>
        
        {/* This is a fixed blog cause it's important */}
        <section className="mt-6 mb-lg-14 mb-8">
          <div className="container">
            <div className="row d-flex align-items-center mb-8">
              <div className="col-12 col-md-12 col-lg-8">
                <a href="/single-blog">
                  <div className="img-zoom">
                    <img src="https://i.imgur.com/X3yjmRP.png" alt="ALT" className="img-fluid w-100" />
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="ps-lg-8 mt-8 mt-lg-0">
                  <h2 className="mb-3"><a href="/single-blog" className="text-inherit">Will sustainable living make you happier?</a></h2>
                  <p>
                    Clean air, fresh water, green trees…I think everyone can agree that a clean, sustainable environment is better for everyone.
                  </p>
                  <div className="d-flex justify-content-between text-muted">
                    <span><small>22 April 2023</small></span>
                    <span>
                      <small>
                        Read time:
                        <span className="text-dark fw-bold">12min</span>
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-lg-14 my-8">
              <div className="container">
                <div className="row">
                  <div className="col-12 mb-6">
                    <h3 className="mb-0">Featured Categories</h3>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="table-responsive-xxl">
                  <div className="row flex-nowrap">
                    <CategoryCard card_img='https://i.imgur.com/cp1Va46.png' color='bg-success' title='LifeStyle' link="/blog-category" />
                    <CategoryCard card_img='https://i.imgur.com/rQEu9RT.png' color='bg-secondary' title='Climate Change' />
                    <CategoryCard card_img='https://i.imgur.com/JlRwd3y.png' color='bg-dark-danger' title='Eco-friendly' />
                    <CategoryCard card_img='https://i.imgur.com/YGDiTAA.png' color='bg-primary' title='Recycle' />
                    <CategoryCard card_img='https://i.imgur.com/C2b4YFo.png' color='bg-warning' title='Family' />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  blogKey={blog._id}
                  cover={blog.cover}
                  blogCategory={blog.blogCategory}
                  title={blog.title}
                  summary={blog.summary}
                  createdAt={blog.createdAt}
                  readingTime={blog.readingTime}
                />
              ))}
              <PaginationBlog />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AllBlogs;
