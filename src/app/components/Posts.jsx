import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import PostList from "./PostList";

const Posts = ({
    match: {
        params: { postId }
    },
    history
}) => {
    const posts = [
        { _id: 1, label: "Post 1" },
        { _id: 2, label: "Post 2" },
        { _id: 3, label: "Post 3" }
    ];

    return postId ? (
        <Post id={postId} posts={posts} history={history} />
    ) : (
        <PostList posts={posts} />
    );
};

Posts.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            postId: PropTypes.string
        })
    }),
    history: PropTypes.object.isRequired
};

export default Posts;
