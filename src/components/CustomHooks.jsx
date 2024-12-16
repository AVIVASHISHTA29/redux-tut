import React from "react";
import useApi from "../hooks/useApi";
import useToggle from "../hooks/useToggle";

function CustomHooks() {
  const [flag, toggleFlag] = useToggle(false);

  const {
    data: posts,
    loading: isLoadingPosts,
    error: postsError,
  } = useApi("https://jsonplaceholder.typicode.com/posts");
  
  const {
    data: users,
    loading: isLoadingUsers,
    error: usersError,
  } = useApi("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <button onClick={toggleFlag}>Click</button>
      {flag ? <h1>Flag 1 - True</h1> : <h1>Flag 1 - False</h1>}

      {isLoadingPosts ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Data: {JSON.stringify(posts)}</h1>
      )}
      {postsError && <h1>Error: {postsError}</h1>}

      {isLoadingUsers ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Data: {JSON.stringify(users)}</h1>
      )}
      {usersError && <h1>Error: {usersError}</h1>}
    </div>
  );
}

export default CustomHooks;
