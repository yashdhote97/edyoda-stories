import React from 'react';
import "./Filter.css";

const Filter = () => {
    return ( 
        <div id="category-main">  
        <h2 id="heading">Latest Posts</h2>
            <p id="filter-text">Filter by Category</p>
          <div id="category">
          <div className="category-ele active">
            <p>All</p>
          </div>
           <div className="category-ele">
            <p>Artificial Intelligence</p>
          </div>
              <div className="category-ele">
            <p>Cloud Computing</p>
          </div>
            <div className="category-ele">
            <p>DevOps</p>
          </div>
            <div className="category-ele">
            <p>Programming Languages</p>
          </div>
            <div className="category-ele">
            <p>Technology And Tools</p>
          </div>
            <div className="category-ele">
            <p>Mobile Application Development</p>
          </div>
            <div className="category-ele">
            <p>Get a job in Tech industry</p>
          </div>
            <div className="category-ele">
            <p>Others</p>
          </div>
          </div>
        </div>
     );
}
 
export default Filter;