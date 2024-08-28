import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import PostList from "./PostList";
import queryString from "query-string";
import _ from "lodash";

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
    const { count } = queryString.parse(search);
    const slicePosts = count
        ? _(posts).slice(0).take(Number(count)).value()
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
