import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    document.title = "This is a blog";

    // Fetch blog data by ID
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4000/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <main>
        {/* section */}
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/blogs">Blog</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{blog.title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <section className="my-lg-14 my-8">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* text */}
                <div className="mb-5">
                  <h1 className="fw-bold text-center">{blog.title}</h1>
                  <div className="d-flex justify-content-center text-muted mt-4">
                    <span className="me-2"><small>{new Date(blog.createdAt).toLocaleDateString()}</small></span>
                    <span>
                      <small>
                        Read time:
                        <span className="text-dark fw-bold">{blog.readingTime} min</span>
                      </small>
                    </span>
                  </div>
                </div>
                {/* img */}
                <div className="mb-8"><img src={`http://localhost:5000/uploads/${blog.coverPicture}`} alt="Blog cover" className="img-fluid rounded" /></div>
                <div>
                  {/* text */}
                  <div className="mb-4">
                    <p>{blog.content}</p>
                  </div>
                  <hr className="mt-lg-10 mb-lg-6 my-md-6" />
                  {/* blockquote */}
                  <blockquote className="blockquote text-center">
                    <p className="text-primary fst-italic fw-semibold lh-base h1 px-2 px-lg-14">"In the whispering woods and babbling brooks, true happiness finds its melody."</p>
                    <footer className="blockquote-footer mt-3 text-muted">
                      <cite title="Source Title">Mahmoud Abbas (Nature Enthusiast)</cite>
                    </footer>
                  </blockquote>
                  <hr className="mt-lg-6 mb-lg-10 my-md-6" />
                 
                  {/* Img alignment */}
                  <div className="mb-5">
                    <h2 className="mb-2">Nature Appeals to Our Senses</h2>
                    <p>Of course, the first positive effect of a healthy environment that comes to mind is the simple joy of the outdoors. Who doesn’t feel emotional benefit when enjoying nature and the outdoors, i.e. camping, walking in the woods, smelling the flowers, etc?</p>
                    <div className="d-flex align-items-start mt-4">
                      {/* Img */}
                      <img src="https://i.imgur.com/qJhWxhR.png" alt="Nature" className="img-fluid me-4 d-none d-lg-block d-md-block rounded" style={{ width: '150px', height: '150px' }} />
                      <div>
                        <p>It feels physically exhilarating to exercise outdoors, breath the fresh air, and feel the weather. The landscape is pleasing to the eye and the overall peaceful atmosphere exploring a forest or picnicking in a field is calming to the mind.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p>Just a short stroll outside in the sunshine, thereby soaking up much needed vitamin D, is a well known remedy for clearing one’s head–and for good reason. The physical sensations and sense stimulation of nature uplift one’s body and therefore one’s mood and emotions.</p>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-start">
                      <div>
                        <h2 className="mb-2">A Sense of Security in Preserving Our Environment</h2>
                        <p>Those who try to live greener lives also enjoy the sense of well-being that comes with the knowledge that you are working for the benefit of the earth.</p>
                      </div>
                      <img src="https://i.imgur.com/Dk8ca93.png" alt="Environment" className="img-fluid ms-4 d-none d-lg-block d-md-block rounded" style={{ width: '150px', height: '150px' }} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 className="mb-2">Living Sustainably is Truly Living ‘The Good Life’</h2>
                    <p>Living environmentally conscious doesn’t just mean giving things up. Sustainability should not be viewed as a burden, but simply as a set of different viable and alternative choices. In short, we must change our perspective of what “living well” means.</p>
                  </div>
                </div>
                <hr className="mt-8 mb-5" />
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div className="d-flex align-items-center">
                    <img src="https://i.imgur.com/r5VurVd.png" alt="Author" className="rounded-circle avatar-md" />
                    <div className="ms-2 lh-1">
                      <h5 className="mb-0">Abboud Samir</h5>
                      <span className="text-primary small">Verified User</span>
                    </div>
                  </div>
                  <div>
                    {/* socials */}
                    <span className="ms-2 text-muted">Share</span>
                    <a href="#!" className="ms-2 text-muted"><i className="bi bi-facebook fs-6" /></a>
                    <a href="#!" className="ms-2 text-muted"><i className="bi bi-twitter fs-6" /></a>
                    <a href="#!" className="ms-2 text-muted"><i className="bi bi-linkedin fs-6" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SingleBlog;
