import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Nav from "./components/nav";
import NewPost from "./components/newPosts";
import PostPage from "./components/postPageID";
import Missing from "./components/missing";
import Footer from "./components/footer";
import { Route, Switch, useHistory } from "react-router-dom";
import { format } from 'date-fns';


function App() {
  // static posts
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Js is the only way to start",
      datetime: "Aug 01, 2021 04:00:00 AM",
      body: "Have a good understanding of JS basics and Es6,7 concepts (Array, Object, Function, Class) are crucial.",
    },
    {
      id: 2,
      title: "React Fundamentals",
      datetime: "Aug 04, 2021 04:00:00 AM",
      body: "Refer React docs and read main concepts, try all the codes hands-on to know how it works, (NOTE : understand and DRY).",
    },
    {
      id: 3,
      title: "Jump to HOOKS",
      datetime: "Aug 07, 2021 04:00:00 AM",
      body: "After becoming familiar, give a kick start to the HOOKS, cover main area (i.e UseState, Reduce, Ref, Context, Memo, Callback, Effect).",
    },
    {
      id: 4,
      title: "Formik & Routers",
      datetime: "Aug 10, 2021 04:00:00 AM",
      body: "Form is a crucial parts of our area. know how it renders and validates. Also study about the Controlled and UnControlled Components.",
    },
    {
      id: 5,
      title: "Build projects, a lot",
      datetime: "Aug 13, 2021 04:00:00 AM",
      body: "Start with simple project and keep moving forward, that's it apply for a job and get things done. Be patient and open minded to learn new things.",
    },
  ]);

  //ALL STATES
  let [search, setSearch] = useState(""); //our search
  let [searchResult, setSearchResult] = useState([]); //show search result in an array
  let [postTitle, setPostTitle] = useState(""); // for new post
  let [postBody, setPostBody] = useState(""); //for new post

  let history = useHistory(); // to catch up homepage immediate after post is removed

  //HANDLER FUNCTIONALITIES
  //handle delete from child to parent
  let handleDelete = (id) => {
    let postList = posts.filter((item) => item.id !== id);
    setPosts(postList);
    history.push(`/`);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    console.log(id);
    let datetime = format(new Date(), 'MMMM dd, yyyy pp');
    let newPost = { id, title: postTitle, datetime, body: postBody };
    setPosts([...posts, newPost ]); // add our new array with the existing array(i.e posts)
    setPostTitle("");
    setPostBody("");
    history.push(`/`);
  };

  //useEffect, soon after our DOM appeared
  useEffect(() => {
    let filteredResult = posts.filter(
      (item) =>
        item.body.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResult.reverse()); // to keep recent one 1st, not 1,2,3,4
  }, [posts, search])

  return (
    <div className="appOuterContainer">
      <div className="app">
        <Header title="React guide" />
        <Nav search={search} setSearch={setSearch} />
        <Switch>
          <Route exact path="/">
            <Home posts={searchResult} /> 
          </Route>
          <Route exact path="/post">
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route exact path="/post/:id">
            <PostPage posts={posts} handleDelete={handleDelete} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
