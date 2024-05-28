import React from 'react';
import PropTypes from 'prop-types';

const BlogRow = ({ cover, title, blogCategory, blogStatus, createdAt, blogId }) => {
    const handleEditClick = () => {
        window.location.href = `EditBlogPage/${blogId}`;
    };

    return (
        <tr>
            <td>
                <img src={cover} alt="" className="icon-shape icon-md" />
            </td>
            <td><a href="#!" className="text-reset">{title}</a></td>
            <td>{blogCategory}</td>
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
    blogCategory: PropTypes.string.isRequired,
    blogStatus: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    blogId: PropTypes.string.isRequired,
};

export default BlogRow;
