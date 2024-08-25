import React from "react";
import PropTypes from "prop-types";

const Post = ({
    posts,
    match: {
        params: { postId }
    }
}) => {
    console.log("postId: ", postId);
    const post = posts.find(({ _id }) => _id.toString() === postId);
    return post ? (
        <h2>{post.label}</h2>
    ) : (
        <h2>{`Post with id: ${postId} not found`}</h2>
    );
};

Post.propTypes = {
    posts: PropTypes.array.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            postId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default Post;
