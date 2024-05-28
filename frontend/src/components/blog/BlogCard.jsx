

function BlogCard({blogKey, img, tag, title, description, timestamp, readtime }) {

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-10">
        <div className="mb-4">
          <a href={`/single-blog/${blogKey}`}>
            {/* img */}
            <div className="img-zoom">
              <img src={img} alt="ALT" className="img-fluid w-100" />
            </div>
          </a>
        </div>
        <div className="mb-3"><a href="#!">{tag}</a></div>
        {/* text */}
        <div>
          <h2 className="h5"><a href={`/single-blog/${blogKey}`} className="text-inherit">{title}</a></h2>
          <p>{description}</p>
          <div className="d-flex justify-content-between text-muted mt-4">
            <span><small>{timestamp}</small></span>
            <span>
              <small>
                Read time:
                <span className="text-dark fw-bold">{readtime}</span>
              </small>
            </span>
          </div>
        </div>
      </div>

    </>
  );
}

export default BlogCard;