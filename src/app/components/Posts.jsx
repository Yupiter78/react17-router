import React from "react";
import Post from "./Post";
import PostList from "./PostList";
import { useParams } from "react-router-dom";

const Posts = () => {
    const { postId } = useParams();
    const posts = [
        { _id: 1, label: "Post 1" },
        { _id: 2, label: "Post 2" },
        { _id: 3, label: "Post 3" }
    ];

    return postId ? (
        <Post id={postId} posts={posts} />
    ) : (
        <PostList posts={posts} />
    );
};

Posts.propTypes = {};

export default Posts;
