import { useState } from "react";
import Sidebar from "../../components/dashboard/sidebar";
import './post.css'
import axios from "axios";
import { toast } from 'react-toastify';

export default function CreatePost() {
    const token = localStorage.getItem("userToken");

    let [data, setData] = useState({
        title: "",
        requesting: "",
        quantity: 0,
        condition: "",
        pickUpDetails: "Pick Up",
        postStatus: "Active",
        address: {
            city: "",
            street: "",
            zip: ""
        },
    })

    let requests = ["Plastic", "Metal", "Paper", "Others"]
    let pickUpDetails = ["Pick Up", "Drop Off", "Both"]
    let postStatus = ["Active", "Disabled"]

    const CreatePost = async () => {
        if(data.title === "" || data.requesting === "" || data.quantity === 0 || data.condition === "" || data.address.city === "" || data.address.street === "" || data.address.zip === "") {
            return toast.error("All fields are required")
        }

        axios.post('http://localhost:4000/posts', data, {
            headers: {
                Authorization: `group__${token}`,
            }
        }).then(res => {
            toast.success("Post created successfully")
        }).catch(err => {
            console.log(err)
        })

        setData({
            title: "",
            requesting: "",
            quantity: 0,
            condition: "",
            pickUpDetails: "Pick Up",
            postStatus: "Active",
            address: {
                city: "",
                street: "",
                zip: ""
            },
        })
    }

    return (
        <div className="newproduct">
            <h1>Add New Post</h1>
            <div className="newproduct_container">
                <Sidebar />
                <div className="newproduct_box">
                    <h3>Post Details</h3>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>title</span>
                            <input
                                placeholder="product title"
                                value={data.title}
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                            />
                        </div>
                        <div className="newproduct_row_item">
                            <span>Requesting</span>
                            <select
                                value={data.requesting}
                                onChange={(e) => setData({ ...data, requesting: e.target.value })}
                            >
                                {requests.map((request, index) => (
                                    <option key={index} value={request}>{request}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>Quantity* (In Kg)</span>
                            <input
                                value={data.quantity}
                                onChange={(e) => setData({ ...data, quantity: e.target.value })}
                                type="number"
                                min={20}
                                max={1000}
                            />
                        </div>
                        <div className="newproduct_row_item">
                            <span>Condition*</span>
                            <input
                                value={data.condition}
                                onChange={(e) => setData({ ...data, condition: e.target.value })}
                            />
                        </div>
                    </div>
                    {/* <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>PickUp Details*</span>
                            <select
                                value={data.pickUpDetails}
                                onChange={(e) => setData({ ...data, pickUpDetails: e.target.value })}
                            >
                                {pickUpDetails.map((detail, index) => (
                                    <option key={index} value={detail}>{detail}</option>
                                ))}
                            </select>
                        </div>
                        <div className="newproduct_row_item">
                            <span>more details</span>
                            <input />
                        </div>
                    </div> */}
                    <h3 style={{ marginTop: 37 }}>Post Status</h3>
                    <div className="newproduct_dots">
                        {
                            postStatus.map((status, index) => (
                                <div className="newproduct_dot" key={index}>
                                    <div onClick={() => setData({ ...data, postStatus: status })}>
                                        <div className="border_shape"></div>
                                        {status == data.postStatus && <div className="active_shape"></div>}
                                    </div>
                                    <span>{status}</span>
                                </div>
                            ))
                        }
                    </div>
                    <h3 style={{ marginTop: 37 }}>Pick Up Details</h3>
                    <div className="newproduct_dots">
                        {
                            pickUpDetails.map((status, index) => (
                                <div className="newproduct_dot" key={index}>
                                    <div onClick={() => setData({ ...data, pickUpDetails: status })}>
                                        <div className="border_shape"></div>
                                        {status == data.pickUpDetails && <div className="active_shape"></div>}
                                    </div>
                                    <span>{status}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>City *</span>
                            <input
                                placeholder="Cities/towns/villages"
                                value={data.address.city}
                                onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })}
                            />
                        </div>
                        <div className="newproduct_row_item">
                            <span>Street name *</span>
                            <input 
                                value={data.address.street}
                                onChange={(e) => setData({ ...data, address: { ...data.address, street: e.target.value } })}
                            />
                        </div>
                    </div>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>zip *</span>
                            <input
                                placeholder="starting with ‘p’ followed by your zip number"
                                value={data.address.zip}
                                onChange={(e) => setData({ ...data, address: { ...data.address, zip: e.target.value } })}
                            />
                        </div>
                        <div className="newproduct_row_item"></div>
                    </div>
                    <div onClick={CreatePost} className="create_button">
                        <span>Create Post</span>
                    </div>
                </div>
            </div>
        </div>
    )
}