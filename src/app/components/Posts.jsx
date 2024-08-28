import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import PostList from "./PostList";
import query from "query-string";

const Posts = ({
    match: {
        params: { postId }
    },
    location: { search }
}) => {
    const posts = [
        { _id: 1, label: "Post 1" },
        { _id: 2, label: "Post 2" },
        { _id: 3, label: "Post 3" }
    ];
    const queryParse = query.parse(search);
    const slicePosts = queryParse.count
        ? posts.slice(0, queryParse.count)
        : posts;

    return postId ? (
        <Post id={postId} posts={posts} />
    ) : (
        <PostList posts={slicePosts} />
    );
};

Posts.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            postId: PropTypes.string
        })
    }),
    location: PropTypes.shape({
        search: PropTypes.string
    })
};

export default Posts;
