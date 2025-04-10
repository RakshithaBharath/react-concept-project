import React, { useState, useEffect } from "react";

// Intermediate Child Component 1: Displays comment details
const Comment = ({ comment }) => {
  return (
    <tr>
      <td>{comment.id}</td>
      <td>{comment.body}</td>
    </tr>
  );
};

// Intermediate Child Component 2: Displays user details
const User = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
    </tr>
  );
};

// Intermediate Child Component 3: Displays post details
const Post = ({ post }) => {
  return (
    <tr>
      <td>{post.id}</td>
    </tr>
  );
};

// Deeply Nested Child Component: Displays comments along with user and post details
const CommentsPage = ({ comments }) => {
  return (
    <div>
      <h2>Comments Page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Comment Body</th>
            <th>User ID</th>
            <th>Username</th>
            <th>Post ID</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.body}</td>
              <td>{comment.user.id}</td>
              <td>{comment.user.username}</td>
              <td>{comment.postId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Demo Component
const RealTimeUseCasePropsDrillingDemo = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments data from the provided API endpoint
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.comments))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return (
    <div className="container mt-5 content-wrapper">
      <h2 className="text-center mb-4">Real-Time Use Case Demo</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <CommentsPage comments={comments} />
        </div>
      </div>
      {/* Component Description Section */}
      <div className="mt-5">
        <h3>Component Description</h3>
        <p>In this example:</p>
        <ol>
          <li>
            We fetch comments data from the provided API endpoint using the
            useEffect hook.
          </li>
          <li>
            Each comment object consists of an ID, body, user, and postId.
          </li>
          <li>
            We display each comment along with its corresponding user and post
            details in the <code>CommentsPage</code> component, which is the
            deeply nested child component.
          </li>
          <li>
            The data is passed down through multiple intermediate components (
            <code>Comment</code>, <code>User</code>, and <code>Post</code>),
            demonstrating props drilling in a real-time use case scenario.
          </li>
        </ol>
      </div>
      {/* Back to Topics Link */}
      <div className="mt-5">
        <a href="/topics" className="btn btn-primary">
          Back to Topics
        </a>
      </div>
    </div>
  );
};

export default RealTimeUseCasePropsDrillingDemo;
/*
Detailed Explanation:
Import Statements:

React: Imports the main React library to use JSX and React components.
useState, useEffect: React hooks used for managing state and side effects.
Intermediate Child Components:

Comment: Displays comment details (ID and body).
User: Displays user details (ID and username).
Post: Displays post details (ID).
These components are simple, displaying specific pieces of data passed to them as props.
Deeply Nested Child Component:

CommentsPage: This component receives the comments prop and displays a table with comment details including the user and post information. The data is displayed using a map function to iterate over the comments array.
Main Demo Component:

RealTimeUseCasePropsDrillingDemo: This is the main component that demonstrates props drilling.
useState: Manages the state of comments.
useEffect: Fetches comments data from the provided API endpoint when the component mounts. The fetched data is stored in the comments state.
The CommentsPage component is rendered, passing the comments state as a prop.
Component Description Section:

Provides a detailed description of the example, explaining the process of fetching data, structure of the comment objects, and how props drilling is demonstrated through the intermediate and deeply nested components.
Back to Topics Link:

A link (a) styled as a button using Bootstrap classes (btn btn-secondary) allows users to navigate back to the topics page.
Explanation of Props Drilling:
Props Drilling: The pattern where data is passed from a parent component to deeply nested child components through multiple levels of intermediate components.

Real-Time Example: This demo fetches comments data from an API and passes it down through various levels of components to demonstrate how props drilling works. The comments data is fetched in the RealTimeUseCasePropsDrillingDemo component, passed to the CommentsPage component, which then renders each comment along with its user and post details.






*/
