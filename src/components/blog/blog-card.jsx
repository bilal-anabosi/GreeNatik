

function Blog_card(props) {

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-10">
        <div className="mb-4">
          <a href="#!">
            {/* img */}
            <div className="img-zoom">
              <img src={props.img} alt className="img-fluid w-100" />
            </div>
          </a>
        </div>
        <div className="mb-3"><a href="#!">{props.tag}</a></div>
        {/* text */}
        <div>
          <h2 className="h5"><a href="#!" className="text-inherit">{props.title}</a></h2>
          <p>{props.description}</p>
          <div className="d-flex justify-content-between text-muted mt-4">
            <span><small>{props.timestamp}</small></span>
            <span>
              <small>
                Read time:
                <span className="text-dark fw-bold">{props.readtime}</span>
              </small>
            </span>
          </div>
        </div>
      </div>

    </>
  );
}

export default Blog_card;