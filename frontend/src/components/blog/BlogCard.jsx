function BlogCard(props) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-10">
        <div className="mb-4">
          <a href={`/blogs/${props.id}`}>
            <div className="img-zoom">
              <img src={`http://localhost:4000/uploads/${props.img}`} alt="Blog's cover" className="img-fluid w-100" />
            </div>
          </a>
        </div>
        <div className="mb-3"><a href="#!">{props.category}</a></div>
        <div>
          <h2 className="h5"><a href={`/blogs/${props.id}`} className="text-inherit">{props.title}</a></h2>
          <p>{props.summary}</p>
          <div className="d-flex justify-content-between text-muted mt-4">
            <span><small>{new Date(props.createdAt).toLocaleDateString()}</small></span>
            <span>
              <small>
                Read time:
                <span className="text-dark fw-bold">{props.readtime} min</span>
              </small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
