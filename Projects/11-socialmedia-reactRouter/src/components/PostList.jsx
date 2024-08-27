import Post from "./Post";
import Welcome from "./Welcome";
import { LoadingSpinner } from "./LoadingSpinner";
import { useLoaderData, useNavigation } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export const postLoader = async () => {
  return await fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
