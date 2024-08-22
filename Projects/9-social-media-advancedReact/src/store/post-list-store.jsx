import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { id },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Dhaka",
//     body: "Hi friends i am travelling § to dhaka. Hope every thing well",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["Dhaka", "travel"],
//   },
//   {
//     id: "2",
//     title: "Going to Jessore",
//     body: "Hi friends i am travelling § to dhaka. Hope every thing well",
//     reactions: 6,
//     userId: "user-10",
//     tags: ["Jessore", "travel"],
//   },
//   {
//     id: "3",
//     title: "pass the test",
//     body: "Hi friends i have passed exam. Hope every thing well",
//     reactions: 18,
//     userId: "user-11",
//     tags: ["Exam", "passed"],
//   },
// ];
