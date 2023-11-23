import React from 'react';
import PropTypes from 'prop-types';
import './PostForm.css';

const PostForm = ({ Search, setSearch, sorting, handleSortingChange }) => {
  return (
    <div className="post-form-container">
      <div className="form-row">
        <label className="form-label">
          Search : 
          <input
            className="form-input"
            type="text"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <div className="form-label">
          <label className="select-label">Sort By : </label>
          <select
            className="form-select"
            value={sorting}
            onChange={(e) => handleSortingChange(e.target.value)}
          >
            <option value="hot">Hot</option>
            <option value="new">New</option>
            <option value="top">Top</option>
            <option value="rising">Rising</option>
          </select>
        </div>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  Search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  handleSortingChange: PropTypes.func.isRequired,
};

export default PostForm;