import React, { useState } from 'react';
import './home.css';


function Home() {
  const [selectedItem, setSelectedItem] = useState('item1');

  const renderContent = () => {
    switch (selectedItem) {
      case 'item1':
        return (
          <div>
            <h3>Why GreeNatik ?</h3>
            <p>
We understand you care about the <span className=' text-success'>planet!</span><br></br>
<br></br> That's why we offer a curated selection of eco-friendly and sustainable products, rigorously vetted for their environmental and social impact. <br></br>Shop guilt-free with complete transparency – detailed descriptions reveal each item's origin, materials, and sustainable practices.<br></br><br></br> Plus, we've eliminated wasteful packaging! All orders ship in eco-friendly, recyclable materials, minimizing your footprint and maximizing your impact. <br></br><br></br>
<br></br>
<a href='/store'><button className=' btn btn-primary' >View store for a greener future</button></a>
</p>
          </div>
        );
      case 'item2':
        return (
          <div>
            <h3>Difficulty In Acquiring Materials ?</h3>
            <br></br>
            <ul className="list-unstyled">
              <li>Looking to responsibly <span className=' text-success'>recycle</span> leftover materials from your sustainable products?  Our innovative smart recycling system connects you directly with us!</li>
              <br></br>
              <li>Here's how it's easy:</li>
              <br></br>
              <li>1.Post what you have! Let us know the specific materials you need to <span className=' text-success'>recycle</span> (e.g., Plastic, Metal etc...).</li>
              <li>2.Wait for contributors to reach out! People will review your post and and provide you directly.</li>
              <li>3.<span className=' text-success'>Recycle</span> with ease! We'll arrange convenient pick-up or drop-off options for your <span className=' text-success'>recyclable</span> materials.</li>
</ul>
<br></br>
<a href='/sign-up'><button className=' btn btn-primary' >Sign up now to create your first post.</button></a>
          </div>
        );
      case 'item3':
        return (
          <div>
            <h3>Want Fast Cash?</h3>
            <br></br>
            <p><ul className="list-unstyled">
             <li> <span className=' text-success'>Recycle</span> and earn rewards for your eco-efforts!</li>
             <li>Find companies needing your plastics, cans, and more right in your area.</li>
             <li>We'll show you exactly what to <span className=' text-success'>recycle</span> and estimate your points. Short on time? Partner delivery services might even pick it up </li>
             <li>Earning rewards is easy - we explain everything clearly. Want even more cool stuff? Reach higher tiers and redeem points at your GreeNatik store!</li>
             <br></br>
             <li><span className=' text-success'>Recycle</span> right, get rewarded - it's a win-win for you and the planet!</li>
             <li>Let's make <span className=' text-success'>recycling</span> awesome together!</li>
               </ul>
               <br></br>
               </p>

               <a href='/all-posts'><button className=' btn btn-primary' >All posts</button></a>
          </div>
        );
      case 'item4':
        return (
          <div>
            <h3>Eco-Enthusiast?</h3>
            <br></br>
            <p>
            <ul className="list-unstyled">
            <li>Feeling like recycling is a mystery? Unsure how to prep your materials or where to find composting hacks? We get it!</li>
            <br></br>
            <li>GreeNatik has a vibrant blogosphere dedicated to making you a recycling rockstar.</li> 
           <li>No matter your level of recycling knowledge, there's a blog waiting to empower you. Stay tuned for our launch and join the conversation!  Together, let's turn recycling into a rewarding adventure - one blog post at a time!</li>
           </ul>
           <br></br>
            </p>
            <a href='/blog'><button className=' btn btn-primary' >Go To Blogs</button></a>
          </div>
        );
      default:
        return null;
    }
  };
  const renderImage = () => {
    switch (selectedItem) {
      case 'item1':
        return './img/8fae670b-0ca6-3186-12c4-d49e0b44aee7_Z1RlpRv.jpg';
      case 'item2':
        return './img/shutterstock_1445313830-1024x682.jpg';
      case 'item3':
        return './img/M1-UPF021521-REC.webp';
      case 'item4':
        return './img/priscilla-du-preez-XkKCui44iM0-unsplash-1200x800.jpg';
      default:
        return 'https://via.placeholder.com/600x400';
    }
  };

  return (
    <>
      <section className="bg-light position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
        {/* Existing content */}
        <div className="mesh-gradient position-absolute start-0 bottom-0 w-100 d-none d-xl-block" style={{ height: 920 }} />
        <div className="mesh-gradient position-absolute start-0 bottom-0 w-100 d-none d-lg-block d-xl-none" style={{ height: 830 }} />
        <div className="mesh-gradient position-absolute start-0 bottom-0 w-100 d-lg-none d-xl-none" style={{ height: '62%' }} />
        <div className="bg-dark-success bg-opacity-10 rounded-circle position-absolute start-50 d-none d-lg-block aos-init aos-animate" style={{ bottom: 220, width: 480, height: 480, marginLeft: '-240px' }} data-aos="zoom-in" data-aos-duration={700} data-aos-delay={200} data-aos-offset={300} />
        <div className="container position-relative z-5 mt-2 pt-5 pb-2 pb-sm-4 pb-lg-5">
          <h1 className="display-3 text-center mx-auto pt-5 my-2 my-sm-4" style={{ maxWidth: 680 }}>Guilt Free Shopping Get Cash From Your Waste</h1>
          <svg className="d-block mx-auto text-primary" width={511} height={40} viewBox="0 0 511 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content */}
          </svg>
          <div className="row justify-content-center pt-3 pt-sm-4 pt-md-5 mt-sm-1">
            <div className="col-8 col-lg-4 order-lg-2" style={{ marginTop: '-105px' }}>
              {/* Middle sticky app screen */}
              <div className="position-lg-sticky top-0 mb-5 pb-sm-2 pb-xl-4" style={{ paddingTop: 110 }}>
                <img className="d-block mx-auto" src="/pics/Mobile-view1.png" width={322} alt="App screen" />
              </div>
            </div>
            {/* Left column */}
            <div className="col-sm-6 col-lg-4 order-lg-1 overflow-hidden mt-lg-4 pt-xl-3">
              {/* Left app screen */}
              <img className="d-none d-lg-block rounded-4 ms-auto" src="/pics/Mobile-view3.png" width={297} alt="App screen" style={{ boxShadow: '0 .9375rem 3rem -.5rem rgba(18,34,50, .05)' }} />
              <div className="d-none d-xxl-block" style={{ height: 310 }} />
              <div className="d-none d-xl-block d-xxl-none" style={{ height: 280 }} />
              <div className="d-none d-lg-block d-xl-none" style={{ height: 200 }} />
              {/* Left features list */}
              <div className="text-center text-sm-start mb-5 mt-5 pt-5 mx-auto mx-sm-0 pb-lg-2 pb-xl-4 aos-init" style={{ maxWidth: 340 }} data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-out-back" data-disable-parallax-down="lg">
                <div className="d-table bg-light bg-opacity-10 rounded-1 p-2 mx-auto mx-sm-0 mb-3 mb-lg-4 d-block m-1 text-primary" width={24} height={24}>
                  <h1><i className="bi bi-shop" style={{ color: 'green' }}></i></h1>
                </div>
                <h2 className="h4 text-white mb-2 mb-lg-3">Green Product Marketplace</h2>
                <p className="text-white opacity-80 mb-0">We offer a curated selection of eco-friendly, sustainable, and ethical products. Every item is rigorously vetted for its environmental and social impact. With transparent descriptions, you'll know exactly what you're buying.</p>
              </div>
              <div className="text-center text-sm-start mb-5 mt-5 pt-5 mx-auto mx-sm-0 pb-lg-2 pb-xl-4 aos-init" style={{ maxWidth: 340 }} data-aos="fade-right" data-aos-delay={200} data-aos-offset={250} data-aos-easing="ease-out-back" data-disable-parallax-down="lg">
                <div className="d-table bg-light bg-opacity-10 rounded-1 p-2 mx-auto mx-sm-0 mb-3 mb-lg-4">
                  <h1><i className="bi bi-box2-fill" style={{ color: 'green' }}></i></h1>
                </div>
                <h2 className="h4 text-white mb-2 mb-lg-3">Sustainable Packaging Solutions</h2>
                <p className="text-white opacity-80 mb-0">Ditch the guilt, embrace green! We now use eco-friendly, recyclable packaging for all orders. Shop with confidence, knowing your sustainable choices extend to how your products arrive - minimizing waste and maximizing feel-good vibes.</p>
              </div>
            </div>
            {/* Right column */}
            <div className="col-sm-6 col-lg-4 order-lg-3 overflow-hidden mt-lg-0 pt-xl-0">
              {/* Right app screen */}
              <img className="d-none d-lg-block rounded-4" src="/pics/Mobile-view2.png" width={297} alt="App screen" style={{ boxShadow: '0 .9375rem 3rem -.5rem rgba(18,34,50, .05)' }} />
              <div className="d-none d-xxl-block" style={{ height: 520 }} />
              <div className="d-none d-xl-block d-xxl-none" style={{ height: 490 }} />
              <div className="d-none d-lg-block d-xl-none" style={{ height: 400 }} />
              {/* Right features list */}
              <div className="text-center text-sm-start mb-5 mt-0 mx-auto me-sm-0 ms-md-5 pb-lg-2 pb-xl-4 aos-init" style={{ maxWidth: 340 }} data-aos="fade-left" data-aos-offset={250} data-aos-delay={400} data-aos-easing="ease-out-back" data-disable-parallax-down="lg">
                <div className="d-table bg-light bg-opacity-10 rounded-1 p-2 mx-auto mx-sm-0 mb-3 mb-lg-4">
                  <h1><i className="bi bi-recycle" style={{ color: 'green' }}></i></h1>
                </div>
                <h2 className="h4 text-white mb-2 mb-lg-3">Recycle and Reward Program</h2>
                <p className="text-white opacity-80 mb-0">Encourage people to participate in an eco-friendly lifecycle by providing a platform for them to return used material. In exchange, they receive points future purchases.</p>
              </div>
              <div className="text-center text-sm-start mb-5 mt-5 pt-5 mx-auto me-sm-0 ms-md-5 pb-lg-2 pb-xl-4 aos-init" style={{ maxWidth: 340 }} data-aos="fade-left" data-aos-offset={200} data-aos-delay={600} data-aos-easing="ease-out-back" data-disable-parallax-down="lg">
                <div className="d-table bg-light bg-opacity-10 rounded-1 p-2 mx-auto mx-sm-0 mb-3 mb-lg-4">
                  <h1><i className="bi bi-book" style={{ color: 'green' }}></i></h1>
                </div>
                <h2 className="h4 text-white mb-2 mb-lg-3">Inspiring Blogs</h2>
                <p className="text-white opacity-80 mb-0">Offering a wealth of knowledge and resources for anyone interested in embracing a more sustainable lifestyle. Regular updates include a diverse range of content from eco-friendly living tips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 pt-5 mt-5 ">
      <div className="container mt-5 pt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="mb-5 pb-5 "style={{color:'#4CBB17'}}>This Is What We Offer</h1>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${selectedItem === 'item1' ? 'active' : ''}`}
                  id="item1-tab"
                  onClick={() => setSelectedItem('item1')}
                >
                  Purchaser
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${selectedItem === 'item2' ? 'active' : ''}`}
                  id="item2-tab"
                  onClick={() => setSelectedItem('item2')}
                >
                  Recycling Company
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${selectedItem === 'item3' ? 'active' : ''}`}
                  id="item3-tab"
                  onClick={() => setSelectedItem('item3')}
                >
                  A Recycler
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${selectedItem === 'item4' ? 'active' : ''}`}
                  id="item4-tab"
                  onClick={() => setSelectedItem('item4')}
                >
                  Blogs
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active">
                {renderContent()}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src={renderImage()} alt="How We Can Help You" className="img-fluid my-4" />
          </div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden pt-5 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5 mb-5 pb-5">
  <div className="container pt-2 pt-sm-4 pt-lg-5">
    <h2 className="h1 text-center pb-3 mb-3 mb-lg-4">How does<span style={{color:'#4CBB17'}}> Recycling</span> work?</h2>
    {/* Step 1*/}
    <div className="row align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
      <div className="col-md-6 col-xl-5 offset-lg-1 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0 aos-init" data-aos="fade-left" data-aos-duration={1000} data-aos-offset={250} data-disable-parallax-down="md">
        <img className="d-dark-mode-none col-10" src="./img/Group 52.png"  alt="Image" />
      </div>
      <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1 aos-init" data-aos="fade-right" data-aos-duration={1000} data-aos-offset={250} data-disable-parallax-down="md">
        <div className="pe-md-4 pe-lg-0">
          <span className="badge fs-sm bg-primary bg-opacity-10 mb-3 mb-lg-4">Step 01</span>
          <h3 className="h2 mb-3 mb-lg-4">View all the posts</h3>
          <p className="pb-1 pb-lg-0 mb-4 mb-lg-5"> Let's turn those used materials into something fantastic!  We can search through all the posts offering different resources.  Think of it like filtering for the perfect match – something that complements what you already have.  This way, you can bring to life for products from your used materials!</p>
          <a className="btn btn-outline-primary rounded-pill" href="/all-posts">Posts</a>
        </div>
      </div>
    </div>
    {/* Arrow 1*/}
    <div className="d-none d-lg-flex justify-content-center aos-init aos-animate" data-aos="fade-in" data-aos-duration={1000} data-aos-offset={250}>
      <svg className="d-block text-primary" width={339} height={365} viewBox="0 0 339 365" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '-150px', marginTop: '-140px', marginBottom: '-108px'}}>
        <path d="M324 291.371C120.111 291.37 240.756 58.7225 1.00032 73.2606" stroke="url(#arrow1)" strokeWidth={2} strokeLinecap="round" strokeDasharray="6 6" />
        <path d="M337.375 290.62C338.074 290.998 338.074 292.001 337.375 292.379L328.476 297.196C327.81 297.557 327 297.074 327 296.317L327 286.683C327 285.925 327.81 285.443 328.476 285.803L337.375 290.62Z" fill="currentColor" />
        <defs>
          <linearGradient id="arrow1" x1={324} y1="291.5" x2="-2.99974" y2="72.4997" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="currentColor" />
            <stop offset={1} stopColor="currentColor" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </div>
    {/* Step 2*/}
    <div className="row align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
      <div className="col-md-6 col-xl-5 offset-xl-1 pb-2 pb-md-0 mb-4 mb-md-0 aos-init" data-aos="fade-right" data-aos-duration={1000} data-aos-offset={250} data-disable-parallax-down="md">
        <img className="d-dark-mode-none" src="./img/Group 53.png" width={473} alt="Image" />
       
      </div>
      <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1 aos-init" data-aos="fade-left" data-aos-duration={1000} data-aos-offset={250} data-disable-parallax-down="md">
        <div className="ps-md-4 ps-lg-0">
          <span className="badge fs-sm bg-primary bg-opacity-10  mb-3 mb-lg-4">Step 02</span>
          <h3 className="h2 mb-3 mb-lg-4">Select a post and fill the form</h3>
          <ul className="list-unstyled mb-0">
            <li className="d-flex pt-1 mt-2">
            <i className="bi bi-patch-check-fill me-3 " style={{color:'green'}}></i>
            Easy simple form to fill showing what you have
            </li>
            <li className="d-flex pt-1 mt-2">
            <i className="bi bi-patch-check-fill me-3 " style={{color:'green'}}></i>
              Fast response after sumbitting 
            </li>
            <li className="d-flex pt-1 mt-2">
            <i className="bi bi-patch-check-fill me-3 " style={{color:'green'}}></i>
              We offer drop off or pick up for your materials
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Arrow 2*/}
    <div className="d-none d-lg-flex justify-content-center aos-init aos-animate" data-aos="fade-in" data-aos-duration={1000} data-aos-offset={250}>
      <svg className="d-block text-primary" width={263} height={275} viewBox="0 0 263 275" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: '-60px', marginLeft: '-120px', marginBottom: '-80px'}}>
        <path d="M8.13678 249.647C7.47108 250.081 6.59001 249.602 6.59106 248.808L6.60444 238.689C6.60544 237.931 7.4158 237.45 8.08162 237.811L16.5478 242.408C17.2136 242.77 17.2512 243.712 16.6163 244.125L8.13678 249.647Z" fill="currentColor" />
        <path d="M261.961 37.8891C216.908 65.6243 128.226 135.486 133.916 193.05C141.029 265.005 265.134 173.468 173.666 148.634C89.2542 125.715 30.9125 210.547 13.9796 236.702" stroke="url(#arrow2)" strokeWidth={2} strokeLinecap="round" strokeDasharray="6 6" />
        <defs>
          <linearGradient id="arrow2" x1="13.9797" y1="234.5" x2="276.704" y2="60.1939" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="currentColor" />
            <stop offset={1} stopColor="currentColor" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </div>
    {/* Step 3*/}
    <div className="row align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
      <div className="col-md-6 col-xl-5 offset-lg-1 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0 aos-init" data-aos="fade-left" data-aos-duration={1000} data-aos-offset={250} data-disable-parallax-down="md">
        <img className="d-dark-mode-none" src="./img/Group 54.png" width={525} alt="Image" />
       
      </div>
      <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1 aos-init" data-aos="fade-right" data-aos-duration={1000} data-aos-offset={250} data-disable-parallax-down="md">
        <div className="pe-md-4 pe-lg-0">
          <span className="badge fs-sm bg-primary bg-opacity-10  mb-3 mb-lg-4">Step 03</span>
          <h3 className="h2 mb-3 mb-lg-4">Get your points and compete with others</h3>
          <p className="pb-1 pb-lg-0 mb-4 mb-lg-5">Get rewarded at GreeNatik! Every used materials earns you points. Rack them up and redeem for discounts in our store! Compete with fellow upcyclers on our leaderboards – you might become the GreeNatik champion! Join the creative revolution, save money, save the planet!</p>
          <a className="btn btn-outline-primary rounded-pill" href="/leaderboard">Leaderboard</a>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Home;
