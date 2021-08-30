import React from 'react'

function NewPost({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) {
  
  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(postTitle);
  //   console.log(postBody);
  // }
  
  return (
    <main className="NewPost">
      <h2>Write a NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
      <br />
        <b><label htmlFor="postTitle">Title : </label></b>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <b><label htmlFor="postBody">Body : </label></b>
        <textarea
          type="text"
          id="postBody"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Add a Post</button>
      </form>
    </main>
  );
}

export default NewPost;
