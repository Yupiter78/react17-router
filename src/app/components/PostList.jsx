import React from "react";
import PropTypes from "prop-types";

const PostList = ({ posts }) => {
    if (!posts || posts.length === 0) return <p>No posts to display</p>;
    return (
        <ul>
            {posts.map(({ _id, label }) => (
                <li key={_id}>{label}</li>
            ))}
        </ul>
    );
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

PostList.defaultProps = [];

export default PostList;
