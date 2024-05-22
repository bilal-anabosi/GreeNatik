import { Fragment, useEffect, useState } from 'react'
import Sidebar from '../../components/dashboard/sidebar'
import './post-list.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PostsList() {
    let [posts, setPosts] = useState([])
    let token = localStorage.getItem('userToken');

    useEffect(() => {
        axios.get("http://localhost:4000/api/", {
            headers: {
                'Authorization': `group__${token}`,
            }
        }).then(({ data }) => {
            setPosts(data.products)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className="newproduct">
            <h1>Posts List</h1>
            <div className="newproduct_container">
                <Sidebar />
                <div className="newproduct_box_container">
                    <div className="newproduct_title">
                        <h3>Posts</h3>
                        <Link to="/dashboard/post/add">
                            <div className='create_button_2'>
                                <span>Create Post</span>
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
                                        posts.map(item => (
                                            <Fragment>
                                                <tr scope="item_row">
                                                    <th scope="row">
                                                        <label className="control control--checkbox">
                                                            <input type="checkbox" />
                                                            <div className="control__indicator"></div>
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <img src={item.images[0]} width={40} />
                                                    </td>
                                                    <td><a href="#">{item.title}</a></td>
                                                    <td>
                                                        {item.category}
                                                    </td>
                                                    <td>
                                                        <div className="item_status">
                                                            {item.status}
                                                        </div>
                                                    </td>
                                                    <td>{item.sizes.map(it => it.regularPrice).join(", ")}</td>
                                                    <td>{item.createdAt}</td>
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