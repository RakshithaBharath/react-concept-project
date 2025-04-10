import React, { useState, useEffect, createContext, useContext } from "react";

// Create a context for comments data
const CommentsContext = createContext();

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
const CommentsPage = () => {
  const { comments } = useContext(CommentsContext);

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
const RealTimeUseCaseStateManagementDemo = () => {
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
      {/* Provide comments data to child components */}
      <CommentsContext.Provider value={{ comments }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <CommentsPage />
          </div>
        </div>
      </CommentsContext.Provider>
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
            The data is managed globally using the Context API, eliminating the
            need for props drilling.
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

export default RealTimeUseCaseStateManagementDemo;
/*
Detailed Explanation:
Import Statements:

React: Imports the main React library to use JSX and React components.
useState, useEffect, createContext, useContext: React hooks used for managing state, side effects, and context.
Context Creation:

CommentsContext: A context created using createContext to manage and provide the comments data globally across the component tree.
Intermediate Child Components:

Comment: Displays individual comment details (ID and body).
User: Displays individual user details (ID and username).
Post: Displays individual post details (ID).
These components are placeholders demonstrating potential structure; however, in this example, they are not used directly in the main rendering process.
Deeply Nested Child Component:

CommentsPage: This component uses the useContext hook to access the comments data from CommentsContext and displays it in a table format. Each comment is displayed along with its user and post details.
Main Demo Component:

RealTimeUseCaseStateManagementDemo: This is the main component demonstrating the use of Context API for state management.
useState: Manages the state of comments.
useEffect: Fetches comments data from the provided API endpoint when the component mounts. The fetched data is stored in the comments state.
CommentsContext.Provider: Wraps the component tree to provide the comments data to all child components, eliminating the need for props drilling.
Component Description Section:

Provides a detailed description of the example, explaining the process of fetching data, structure of the comment objects, and how the Context API is used to manage and provide data globally.
Back to Topics Link:

A link (a) styled as a button using Bootstrap classes (btn btn-primary) allows users to navigate back to the topics page.
Explanation of Context API:
Context API: A feature in React that allows data to be passed globally without having to pass props through every level of the component tree. It helps to avoid the problem of props drilling by providing a way to share values like state across the entire component tree efficiently.

Real-Time Example: This demo fetches comments data from an API and uses the Context API to provide this data to a deeply nested component (CommentsPage). By doing so, it demonstrates how state can be managed globally and accessed by any component within the context provider, thus simplifying state management and avoiding props drilling.
*/
