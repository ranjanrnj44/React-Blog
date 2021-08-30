import React from 'react'
import Post from './Post';

function Feed({ posts }) {
    console.log(posts);
    return (
      <div>
        {posts.map((item) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    );
}

export default Feed
