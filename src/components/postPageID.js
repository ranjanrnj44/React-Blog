import React from 'react';
import { useParams, Link } from 'react-router-dom';

function PostPage({posts, handleDelete}) {
  let { id } = useParams();
  console.log(typeof (id)); // id is a string, so use ===, if number then u should use ==
  let post = posts.find((item) => item.id.toString() === id);
  console.log(post);

    return (
      <main className="PostPage">
        <article className="post">
          {post && (
            <>
              <h2>{post.title}</h2>
              <p className="postDate"><i>{post.datetime}</i></p>
              <p className="postBody">{post.body}</p>
              <hr />
              <br />
              <button type='button' onClick={() => handleDelete(post.id)}>Delete</button>
            </>
          )}
          {!post && (
            <>
              <h2>Post Not Found</h2>
              <p>Don't get panic</p>
              <Link to="/">Visit the Homepage...</Link>
            </>
          )}
        </article>
      </main>
    );
}

export default PostPage;
