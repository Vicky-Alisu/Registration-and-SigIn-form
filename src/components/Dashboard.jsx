import React from 'react';
import { useState,useEffect } from 'react';


const Dashboard = () => {
const [data, setData] = useState([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json));
}, []);

return (
  <div

className="Dashboard">
    <h1>Dashboard</h1>

    <ul>
      {data.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
);
};
export default Dashboard;