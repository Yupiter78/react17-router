import React from "react";
import PropTypes from "prop-types";

const Post = ({ id, posts }) => {
    const post = posts.find(({ _id }) => _id.toString() === id);
    return post ? (
        <h2>{post.label}</h2>
    ) : (
        <h2>{`Post with id: ${id} not found`}</h2>
    );
};

Post.propTypes = {
    posts: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
};

export default Post;
