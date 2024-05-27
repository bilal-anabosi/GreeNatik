import React from 'react';

const Pagination = () => {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href=" #">Prev</a></li>
                <li className="page-item"><a className="page-link" href=" #">1</a></li>
                <li className="page-item"><a className="page-link" href=" #">2</a></li>
                <li className="page-item"><a className="page-link" href=" #">...</a></li>
                <li className="page-item"><a className="page-link" href=" #">Next</a></li>
            </ul>
        </nav>
    );
};

export default Pagination;
