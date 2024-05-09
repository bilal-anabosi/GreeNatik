import { useState } from 'react'
import './shop-single.css'

export default function ShopSingle() {
    let [selectedImage, setSelectedImage] = useState(0)
    let [amount, setAmount] = useState(1)

    let images = [
        "/img/product-single-img-1.jpg",
        "/img/product-single-img-2.jpg",
        "/img/product-single-img-3.jpg",
        "/img/product-single-img-4.jpg",
    ]

    let tags = [
        "250g",
        "500g",
        "1kg",
    ]

    return (
        <div className='single_container'>
            <div className="info">
                <div className="left">
                    <img src={images[selectedImage]} />
                    <div className="images">
                        {images.map((image, index) =>
                            <img
                                key={index}
                                src={image}
                                onClick={() => setSelectedImage(index)}
                                className={selectedImage === index ? 'selected' : ''}
                            />
                        )}
                    </div>
                </div>
                <div className="right">
                    <div className="right_title">
                        <a>Bakery Biscuits</a>
                        <h1>Napolitanke Ljesnjak</h1>
                        <div className='price-tag'>
                            <span>32$</span>
                            <span>35$</span>
                            <small>26% Off</small>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="right_options">
                        <div className="tags">
                            {tags.map((tag, index) => <span key={index}>{tag}</span>)}
                        </div>
                        <div className="input">
                            <span onClick={() => setAmount(amount - 1)}>-</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                readOnly
                            />
                            <span onClick={() => setAmount(amount + 1)}>+</span>
                        </div>
                        <div className="button">
                            <i class="bi bi-bag"></i>
                            <span>Add to Cart</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="product_info">
                        <div>
                            <h5>Product Code:</h5>
                            <span>FBB00255</span>
                        </div>
                        <div>
                            <h5>Availability:</h5>
                            <span>In Stock</span>
                        </div>
                        <div>
                            <h5>Type:</h5>
                            <span>Fruits</span>
                        </div>
                        <div>
                            <h5>Shipping:</h5>
                            <span>01 day shipping</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="buttons">
                    <div className="nav_button">
                        <span>Product Details</span>
                    </div>
                </div>
                <div className="line"></div>
                <h3>Nutrient Value & Benefits</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <h3>Storage Tips</h3>
                <span>Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <h3>Unit</h3>
                <span>3 units</span>
                <h3>Seller</h3>
                <span>DMart Pvt. LTD</span>
                <h3>Disclaimer</h3>
                <span>Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.</span>
            </div>
            <div className="related_items">
                <h1>Related Items</h1>
                <div className="related_items_list">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
            <div style={{ height: "3em" }}></div>
        </div>
    )
}

function Item() {
    return (
        <div className='related_item'>
            <img src="/img/product-img-1.jpg" />
            <span>Snack & Munchies</span>
            <h3>Haldiram's Sev Bhujia</h3>
            <div className='related_row'>
                <div className='price-tag-small'>
                    <span>32$</span>
                    <span>35$</span>
                </div>
                <div className="button-small">
                    <i class="bi bi-plus"></i>
                    <span>Add</span>
                </div>
            </div>
        </div>
    )
}