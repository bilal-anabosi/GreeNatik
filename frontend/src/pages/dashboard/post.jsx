import Sidebar from "../../components/dashboard/sidebar";
import './post.css'

export default function CreatePost() {
    return (
        <div className="newproduct">
            <h1>Add New Product</h1>
            <div className="newproduct_container">
                <Sidebar />
                <div className="newproduct_box">
                    <h3>Post Details</h3>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>Requesting</span>
                            <input
                                placeholder="In simple words followed by , e.g (Tefal, copper )"
                            />
                        </div>
                        <div className="newproduct_row_item">
                            <span>more details</span>
                            <input />
                        </div>
                    </div>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>Quantity*</span>
                            <input
                                placeholder="In Kg (Kilograms)"
                            />
                        </div>
                        <div className="newproduct_row_item">
                            <span>progress*</span>
                            <input />
                        </div>
                    </div>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>Condition*</span>
                            <input
                                placeholder="In simple words followed by , e.g ( slightly used)"
                            />
                        </div>
                        <div className="newproduct_row_item">
                            <span>more details</span>
                            <input />
                        </div>
                    </div>
                    <h3 style={{ marginTop: 37 }}>Post Status</h3>
                    <div className="newproduct_dots">
                        <div className="newproduct_dot">
                            <div>
                                <div className="border_shape"></div>
                                <div className="active_shape"></div>
                            </div>
                            <span>Draft</span>
                        </div>
                        <div className="newproduct_dot">
                            <div>
                                <div className="border_shape"></div>
                            </div>
                            <span>Deactive</span>
                        </div>
                        <div className="newproduct_dot">
                            <div>
                                <div className="border_shape"></div>
                            </div>
                            <span>Active</span>
                        </div>
                    </div>
                    <h3 style={{ marginTop: 37 }}>Pick Up Details</h3>
                    <div className="newproduct_dots">
                        <div className="newproduct_dot">
                            <div>
                                <div className="border_shape"></div>
                                <div className="active_shape"></div>
                            </div>
                            <span>Factory</span>
                        </div>
                        <div className="newproduct_dot">
                            <div>
                                <div className="border_shape"></div>
                            </div>
                            <span>Custom Location</span>
                        </div>
                    </div>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>City *</span>
                            <input
                                placeholder="Cities/towns/villages"
                            />
                        </div>
                        <div className="newproduct_row_item">
                            <span>Street name *</span>
                            <input />
                        </div>
                    </div>
                    <div className="newproduct_row">
                        <div className="newproduct_row_item">
                            <span>zip *</span>
                            <input
                                placeholder="starting with ‘p’ followed by your zip number"
                            />
                        </div>
                        <div className="newproduct_row_item"></div>
                    </div>
                    <div className="create_button">
                        <span>Create Post</span>
                    </div>
                </div>
            </div>
        </div>
    )
}