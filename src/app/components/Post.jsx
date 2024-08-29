import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
    const history = useHistory();
    const post = posts.find(({ _id }) => _id.toString() === id);
    const handleSave = () => {
        if (history) {
            history.replace("/posts");
        }
    };
    return post ? (
        <>
            <h2>{post.label}</h2>
            <button onClick={handleSave}>Save</button>
        </>
    ) : (
        <h2>{`Post with id: ${id} not found`}</h2>
    );
};

Post.defaultProps = {
    id: "",
    posts: []
};

Post.propTypes = {
    posts: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
};

export default Post;
