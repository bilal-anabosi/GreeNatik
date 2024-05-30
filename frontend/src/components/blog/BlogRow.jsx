import React from 'react';
import PropTypes from 'prop-types';

const BlogRow = ({ cover, title, blogCategory, blogStatus, createdAt, blogId }) => {
    const handleEditClick = () => {
        window.location.href = `/dashboard/edit-blog/${blogId}`;
    };

    return (
        <tr>
            <td>
                <img  src={`http://localhost:4000/${cover}`} alt="Cover" className="icon-shape icon-md" />
            </td>
            <td><a href="#!" className="text-reset">{title}</a></td>
            <td>{blogCategory.join(', ')}</td> {/* Join the category array */}
            <td>
                <span className={`badge bg-light-${blogStatus === 'Active' ? 'primary' : blogStatus === 'Disabled' ? 'danger' : 'warning'} text-dark-${blogStatus === 'Active' ? 'primary' : blogStatus === 'Disabled' ? 'danger' : 'warning'}`}>{blogStatus}</span>
            </td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td>
                <button className="btn btn-link text-reset" onClick={handleEditClick}>
                    Edit
                </button>
            </td>
        </tr>
    );
};

BlogRow.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    blogCategory: PropTypes.arrayOf(PropTypes.string).isRequired, // Updated to accept an array of strings
    blogStatus: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    blogId: PropTypes.string.isRequired,
};

export default BlogRow;
