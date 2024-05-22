import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './shop-single.css'

export default function ShopSingle() {
    let [product, setProduct] = useState(null)
    let [reviews, setReviews] = useState([])
    let [tab, setTab] = useState(0)
    let [selectedImage, setSelectedImage] = useState(0)
    let [amount, setAmount] = useState(1)
    let [selectedSize, setSelectedSize] = useState(0)
    let [newReview, setNewReview] = useState({ rating: 0, comment: '' })
    let { id } = useParams()
    let token = localStorage.getItem('userToken');

    useEffect(() => {
        axios.get(`http://localhost:4000/api/products/${id}`, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            setProduct(data.product)
        }).catch(err => { })

        axios.get(`http://localhost:4000/reviews/${id}`, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            setReviews(data)
        }).catch(err => { })
    }, [])

    // let product = {
    //     title: "Test",
    //     category: "FoodWare",
    //     longDescription: "Laborum Lorem deserunt sunt ad adipisicing ex reprehenderit nostrud nulla. Aliquip aute consequat proident magna duis irure qui eiusmod ad irure velit sint consequat. Id nisi cupidatat exercitation laboris duis. Incididunt deserunt non aute excepteur officia et et officia deserunt ea laboris ullamco. Non Lorem duis velit ut aliquip consequat aute cupidatat minim eiusmod irure commodo amet reprehenderit. Qui enim duis excepteur labore aliqua magna nostrud consequat excepteur.",
    //     sizes: [{
    //         size: "M",
    //         quantity: 10,
    //         unit: "clothing",
    //         regularPrice: 32,
    //         salePrice: 35
    //     },
    //     {
    //         size: "L",
    //         quantity: 20,
    //         unit: "clothing",
    //         regularPrice: 32,
    //         salePrice: 35
    //     },
    //     {
    //         size: "XL",
    //         quantity: 30,
    //         unit: "clothing",
    //         regularPrice: 32,
    //         salePrice: 35
    //     }],
    //     images: [
    //         "/img/product-single-img-1.jpg",
    //         "/img/product-single-img-2.jpg",
    //         "/img/product-single-img-3.jpg",
    //         "/img/product-single-img-4.jpg",
    //     ],
    //     inStock: true,
    //     status: 'Active',
    //     salesCount: 100,
    //     createdAt: Date.now()
    // }

    // let reviews = [
    //     {
    //         rating: 5,
    //         comment: "Great product",
    //         user: {
    //             username: "John Doe"
    //         },
    //         createdAt: Date.now(),
    //     },
    //     {
    //         rating: 4,
    //         comment: "Good product",
    //         user: {
    //             username: "Jane Doe"
    //         },
    //         createdAt: Date.now(),
    //     },
    // ]

    function addToCart() {
        axios.post('http://localhost:4000/cart/add', {
            productId: product._id,
            quantity: amount,
            size: product.sizes[selectedSize].size
        }, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            alert('Added to cart')
        }).catch(err => {
            alert('Error adding to cart')
        })
    }

    function addToWishList() {
        axios.post('http://localhost:4000/wishlist/', {
            productId: product._id,
            size: product.sizes[selectedSize].size
        }, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            alert('Added to wishlist')
        }).catch(err => {
            alert('Error adding to wishlist')
        })
    }

    function addComment() {
        axios.post(`http://localhost:4000/reviews/${id}`, newReview, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            setReviews([...reviews, data])
            setNewReview({
                rating: 0,
                comment: '',
                product: id,
                user: "" // احتاج هنا احط ايدي اليوزر ماني عارف كيف اجيبه من التوكن
            })
        }).catch(err => {
            alert('Error adding review')
        })
    }

    let tabs = [
        {
            title: "Product Details",
            value: 0
        },
        {
            title: "Product Reviews",
            value: 1
        }
    ]

    return product ? (
        <div className='single_container'>
            <div className="info">
                <div className="left">
                    <img src={product.images[selectedImage]} />
                    <div className="images">
                        {product.images.map((image, index) =>
                            <img
                                key={index}
                                src={`http://localhost:4000${image}`}
                                onClick={() => setSelectedImage(index)}
                                className={selectedImage === index ? 'selected' : ''}
                            />
                        )}
                    </div>
                </div>
                <div className="right">
                    <div className="right_title">
                        <a>{product.category}</a>
                        <h1>{product.title}</h1>
                        <div className='price-tag'>
                            {
                                product.sizes[selectedSize].salePrice ?
                                    <>
                                        <span>{product.sizes[selectedSize].salePrice}$</span>
                                        <span>{product.sizes[selectedSize].regularPrice}$</span>
                                        <small>{(product.sizes[selectedSize].salePrice * 100) / product.sizes[selectedSize].regularPrice}% Off</small>
                                    </>
                                    :
                                    <span>{product.sizes[selectedSize].regularPrice}$</span>
                            }
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="right_options">
                        <div className="tags">
                            {product.sizes?.map((tag, index) => (
                                <span
                                    key={index}
                                    className={selectedSize === index ? 'selected_tg' : ''}
                                    onClick={() => setSelectedSize(index)}
                                >{tag.size}</span>
                            ))}
                        </div>
                        <div className="input">
                            <span onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}>-</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                max={product.sizes[selectedSize].quantity}
                                min={1}
                                readOnly
                            />
                            <span onClick={() => setAmount(amount < product.sizes[selectedSize].quantity ? amount + 1 : amount)}>+</span>
                        </div>
                        <div onClick={addToCart} className="button">
                            <i className="bi bi-bag"></i>
                            <span>Add to Cart</span>
                        </div>
                        <div onClick={addToWishList} className="button">
                            <i className="bi bi-bag"></i>
                            <span>Add to Wish List</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="product_info">
                        <div>
                            <h5>Availability:</h5>
                            <span>{product.inStock ? "In Stock" : "Out of stock"}</span>
                        </div>
                        <div>
                            <h5>Type:</h5>
                            <span>{product.category}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="pro_buttons">
                    {tabs.map((tab_, index) =>
                        <div
                            key={index}
                            className={tab_.value === tab ? 'nav_button nav_b_selected' : 'nav_button'}
                            onClick={() => setTab(tab_.value)}
                        >
                            <span>{tab_.title}</span>
                        </div>
                    )}

                </div>
                <div className="line"></div>
                {
                    tab === 0 ?
                        <>
                            <h3>Description</h3>
                            <span>{product.longDescription}</span>
                        </>
                        :
                        <>
                            <div className="add_review">
                                <h3>Add a Review</h3>
                                <div className="review_input">
                                    <textarea
                                        placeholder="Write your review here"
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    >
                                        {newReview.comment}
                                    </textarea>
                                    <div className="review_stars">
                                        {[1, 2, 3, 4, 5].map((star, index) =>
                                            <i
                                                key={index}
                                                className={newReview.rating >= star ? 'bi bi-star-fill' : 'bi bi-star'}
                                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                                style={{ color: newReview.rating >= star ? 'gold' : 'black' }}
                                            ></i>
                                        )}
                                    </div>
                                    <div className="review_input_row">
                                        <div className="button">
                                            <span style={{ marginBottom: 0 }}>Submit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 style={{ marginTop: 32 }}>Reviews</h3>
                            {reviews?.map((review, index) =>
                                <div className="review" key={index}>
                                    <div className="review_title">
                                        <div className="review_user">
                                            <i className="bi bi-person"></i>
                                            <span style={{ marginBottom: 0 }}>{review.user.username}</span>
                                        </div>
                                        <div className="review_stars_small">
                                            {[1, 2, 3, 4, 5].map((star, index) =>
                                                <i
                                                    key={index}
                                                    className={review.rating >= star ? 'bi bi-star-fill' : 'bi bi-star'}
                                                    style={{ color: review.rating >= star ? 'gold' : 'black' }}
                                                ></i>
                                            )}
                                        </div>
                                    </div>
                                    <span>{review.comment}</span>
                                </div>
                            )}
                        </>
                }
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
        :
        (
            <div>Loading</div>
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
                    <i className="bi bi-plus"></i>
                    <span>Add</span>
                </div>
            </div>
        </div>
    )
}