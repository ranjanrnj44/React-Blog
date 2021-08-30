import React from 'react';
import Feed from './Feed';

function Home({posts}) {
    return (
        <div>
            {posts.length ? (
                <Feed posts={posts} />
            ) : <p style={{marginTop: "2rem"}}> No Post to Display</p> }
        </div>
    )
}

export default Home
