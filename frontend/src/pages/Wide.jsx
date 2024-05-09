import React from 'react';
import CategoryFilter from '../components/wide/CategoryFilter';
import PriceFilter from '../components/wide/PriceFilter';
import RatingFilter from '../components/wide/RatingFilter';
import ProductList from '../components/wide/ProductList';
import Pagination from '../components/wide/Pagination';
import ViewControls from '../components/wide/ViewControls';
import CategoryName from '../components/wide/CategoryName';
const Wide = () => {
    return (
        <>
        <div className="mt-4">
  <div className="container">
    {/* row */}
    <div className="row">
      {/* col */}
      <div className="col-12">
        {/* breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#!">Home</a></li>
            <li className="breadcrumb-item"><a href="#!">Shop</a></li>
            <li className="breadcrumb-item active" aria-current="page">Foodware</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>


        <div className="container mt-8 mb-lg-14 mb-8">
        <CategoryName/>
        <ViewControls/>
            <div className="row gx-10">
                <aside className="col-lg-3 col-md-4 mb-6 mb-md-0 d-none d-lg-block">
                    <CategoryFilter />
                    <PriceFilter />
                    <RatingFilter />
                </aside>
                <section className="col-lg-9 col-md-12">
                    <ProductList />
                    <Pagination />
                </section>
            </div>
        </div>
        </>
    );
};

export default Wide;
