import React from 'react';
import { NavLink } from "react-router-dom";

function Nav({ search, setSearch }) {
    
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

    return (
      <nav className="Nav">
        <form onSubmit={handleSubmit} className="searchForm">
          <label htmlFor="search">Search posts</label>
          <input
            type="text"
            placeholder="Search a post..."
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{color : "rgb(15, 44, 128)", fontWeight : "bold"}} >Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/post" activeStyle={{color : "rgb(15, 44, 128)", fontWeight : "bold"}} >Post</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeStyle={{color : "rgb(15, 44, 128)", fontWeight : "bold"}} >About</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;
