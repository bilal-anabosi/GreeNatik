import { Fragment } from 'react'
import Sidebar from '../../components/dashboard/sidebar'
import './post-list.css'
import { Link } from 'react-router-dom'

export default function PostsList() {
    let items = [
        {
            image: "https://via.placeholder.com/40",
            name: "Product 1",
            category: "Category 1",
            status: "Active",
            price: "100",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 2",
            category: "Category 2",
            status: "Active",
            price: "200",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 3",
            category: "Category 3",
            status: "Active",
            price: "300",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 4",
            category: "Category 4",
            status: "Active",
            price: "400",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 5",
            category: "Category 5",
            status: "Active",
            price: "500",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 6",
            category: "Category 6",
            status: "Active",
            price: "600",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 7",
            category: "Category 7",
            status: "Active",
            price: "700",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 8",
            category: "Category 8",
            status: "Active",
            price: "800",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 9",
            category: "Category 9",
            status: "Active",
            price: "900",
            create_at: "2021-10-10"
        },
        {
            image: "https://via.placeholder.com/40",
            name: "Product 10",
            category: "Category 10",
            status: "Active",
            price: "1000",
            create_at: "2021-10-10"
        }
    ]
    return (
        <div className="newproduct">
            <h1>Product</h1>
            <div className="newproduct_container">
                <Sidebar />
                <div className="newproduct_box_container">
                    <div className="newproduct_title">
                        <h3>Products</h3>
                        <Link to="/dashboard/post">
                            <div className='create_button_2'>
                                <span>Create Product</span>
                            </div>
                        </Link>
                    </div>
                    <div className="newproduct_box">
                        <div className="search_input">
                            <input type="text" placeholder="Search Products" />
                        </div>

                        <div className="table-responsive custom-table-responsive">
                            <table className="table custom-table">
                                <thead>
                                    <tr>

                                        <th scope="col">
                                            <label className="control control--checkbox">
                                                <input type="checkbox" className="js-check-all" />
                                                <div className="control__indicator"></div>
                                            </label>
                                        </th>

                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Create at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map(item => (
                                            <Fragment>
                                                <tr scope="item_row">
                                                    <th scope="row">
                                                        <label className="control control--checkbox">
                                                            <input type="checkbox" />
                                                            <div className="control__indicator"></div>
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <img src={item.image} />
                                                    </td>
                                                    <td><a href="#">{item.name}</a></td>
                                                    <td>
                                                        {item.category}
                                                    </td>
                                                    <td>
                                                        <div className="item_status">
                                                            {item.status}
                                                        </div>
                                                    </td>
                                                    <td>{item.price}</td>
                                                    <td>{item.create_at}</td>
                                                </tr>
                                                <tr className="spacer"><td colspan="100"></td></tr>
                                            </Fragment>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}