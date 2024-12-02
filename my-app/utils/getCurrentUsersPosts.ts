import { Posts } from "../types";

export default function getCurrentUsersPosts(allPosts: Posts, userID: number) {
  const myPosts = allPosts.filter((post) => {
    return post.author === userID;
  });
  if (myPosts) {
    return myPosts;
  } else {
    return null;
  }
}
