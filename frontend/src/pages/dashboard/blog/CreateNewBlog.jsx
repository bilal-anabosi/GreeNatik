import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/dashboard/sidebar';
import ReloadAlert from '../../../components/blog/ReloadAlert';
import Editor from '../../../components/blog/BlogTextEditor';

function CreateNewBlog() {
    const [selectedFile, setSelectedFile] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [readingTime, setTime] = useState('');
    const [content, setContent] = useState('');
    const [blogCategory, setCategory] = useState('');
    const [metaData, setMeta] = useState('');
    const [blogStatus, setStatus] = useState('Draft');

    async function createNewBlog(event) {
        event.preventDefault(); // Prevent default form submission

        const data = new FormData();
        data.set('title', title);
        data.set('file', selectedFile);
        data.set('summary', summary);
        data.set('readingTime', readingTime);
        data.set('content', content);
        data.set('metaData', metaData);
        data.set('blogStatus', blogStatus);

        try {
            const response = await fetch('http://localhost:4000/create-new-blog', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Blog created successfully:', result);
            alert('Blog created successfully!');
        } catch (error) {
            console.error('Error creating blog:', error);
            alert('Error creating blog: ' + error.message);
        }
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    useEffect(() => {
        document.title = "Create New Blog"; //showing the page's name in the tab
    }, []);

 
  return (
    <>
      <ReloadAlert />
      <form onSubmit={createNewBlog}>
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-12 mt-4">
              {/* breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#!">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="#!">Blog</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Create New Blog</li>
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
                      <h1 className="fw-bold">Create New Blog</h1>
                    </div>
                  </div>
                  {/* button */}
                  <div>
                    <a href="/all-blogs-dashboard" className="btn btn-light">Back to Blog</a>
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
                          {/* card body */}
                          <div className="card-body p-0">
                            <div>
                              <div className="mb-3 col-lg-12 mt-5">
                                {/* heading */}
                                <h4 className="mb-3 h5">Blog Cover <i className="bi bi-asterisk fs-6 text-danger"> </i></h4>
                                {/* input */}
                                <div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0 dz-clickable" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <div className="dz-default dz-message">
                                    <input type="file" required onChange={handleFileChange} />
                                    {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <h4 className="mb-3 h5">Blog Title <i className="bi bi-asterisk fs-6 text-danger"> </i></h4>
                            <input type="text" className="form-control" required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <h4 className="mb-3 h5">Blog Summary <i className="bi bi-asterisk fs-6 text-danger"> </i></h4>
                            <input type="text" className="form-control" required placeholder="The summary could be the first paragraph of your blog" value={summary} onChange={(e) => setSummary(e.target.value)} />
                          </div>
                          <br />
                          <h4 className="mb-3 h5">Blog Details </h4>
                          <div className="row">
                            {/* input */}
                            <div className="mb-3 col-lg-6">
                              <label className="form-label">Reading Time <i className="bi bi-asterisk fs-6 text-danger"></i></label>
                              <input type="text" className="form-control" placeholder="In minutes" required value={readingTime} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            {/* input */}
                            <div className="mb-3 col-lg-6">
                              <label className="form-label">Category</label>
                              <select className="form-select" value={blogCategory} onChange={(e) => setCategory(e.target.value)}>
                                <option value="" >Category Name</option>
                                <option value="LifeStyle">LifeStyle</option>
                                <option value="Climate Change">Climate Change</option>
                                <option value="Eco-friendly">Eco-friendly</option>
                                <option value="Recycle">Recycle</option>
                                <option value="Family">Family</option>
                              </select>
                              <br />
                            </div>
                            {/* this is the text area where you can write the blog body */}
                            <div className="mb-3 col-lg-12">
                              <Editor value={content} onChange={setContent} />
                            </div>
                            <div className="mb-3 col-lg-12 mt-5">
                              <h4 className="mb-4 h5">Meta Data</h4>
                              {/* input */}
                              <div className="mb-3">
                                <input type="text" className="form-control" placeholder="In simple words followed by , e.g (life style, cooking, Karen)" value={metaData} onChange={(e) => setMeta(e.target.value)} />
                              </div>
                            </div>
                            {/* input */}
                            <div className="mb-3 col-lg-12">
                              <h4 className="mb-4 h5">Blog Status</h4>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio"
                                  name="inlineRadioOptions" id="inlineRadio1"
                                  value="Draft" checked={blogStatus === 'Draft'}
                                  onChange={(e) => setStatus(e.target.value)} />
                                <label className="form-check-label" htmlFor="inlineRadio1">Draft</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio"
                                  name="inlineRadioOptions" id="inlineRadio2"
                                  value="Published" checked={blogStatus === 'Published'}
                                  onChange={(e) => setStatus(e.target.value)} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Published</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <button type="submit" className="btn btn-primary">Create Blog</button>
                            </div>
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
      </form>
    </>
  );
}

export default CreateNewBlog;
