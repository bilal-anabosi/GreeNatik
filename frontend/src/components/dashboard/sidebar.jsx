import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="newpost_sidebar">
            <h4>Quick Menu</h4>
            <div className="newpost_item">
                <i className="fi fi-sr-house-chimney"></i>
                <span>Dashboard</span>
            </div>
            <div className="newpost_item">
                <i className="fi fi-sr-shopping-bag"></i>
                <span>Product</span>
            </div>
            <div className="newpost_item">
                <i className="fi fi-sr-blog-text"></i>
                <span>Post</span>
            </div>
            <div className="newpost_item">
                <i className="fi fi-sr-duplicate"></i>
                <span>Blog</span>
            </div>
            <div className="newpost_item">
                <i className="fi fi-sr-star"></i>
                <span>Reviews</span>
            </div>
        </div>
    )
}