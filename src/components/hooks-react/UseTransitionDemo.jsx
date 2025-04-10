import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom";

const UseTransitionDemo = () => {
  const [data, setData] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [fetchingData, setFetchingData] = useState(false);

  const fetchData = () => {
    setFetchingData(true); // Indicate that data fetching has started
    startTransition(() => {
      setData(null); // Reset data to null before fetching new data
    });

    // Simulate fetching data asynchronously
    setTimeout(() => {
      startTransition(() => {
        setData("Fetched data");
        setFetchingData(false); // Indicate that data fetching has completed
      });
    }, 5000); // Change the timeout to 5 seconds
  };

  return (
    <div>
      <h2>useTransition Demo</h2>
      <div>
        <h3>Use Case</h3>
        <p>
          <strong>useTransition:</strong>
        </p>
        <ul>
          <li>
            Manages asynchronous state updates to create smooth transitions
            during rendering.
          </li>
          <li>Helps prevent blocking the UI during expensive state updates.</li>
          <li>
            Allows rendering placeholder content during asynchronous operations
            to improve perceived performance.
          </li>
        </ul>
      </div>
      <div>
        <h3>Component Demonstration</h3>
        <p>
          <strong>What is happening here:</strong>
        </p>
        <ul>
          <li>
            When the "Fetch Data" button is clicked, the fetchData function is
            called to initiate the data fetching process.
          </li>
          <li>
            Inside fetchData, the startTransition function is used to initiate
            the transition immediately by setting the data to null. This causes
            the "Loading..." text to be displayed.
          </li>
          <li>
            After a delay of 5 seconds, the actual data fetching is simulated,
            and the data is updated using startTransition once again to display
            the fetched data.
          </li>
        </ul>
      </div>
      <p>
        <strong>Description:</strong> The useTransition hook manages
        asynchronous state updates to create smooth transitions during
        rendering.
        <br />
        <strong>Returns:</strong> An array containing two elements:
      </p>
      <ul>
        <li>
          <code>startTransition</code>: A function used to initiate the
          transition.
        </li>
        <li>
          <code>isPending</code>: A boolean value indicating whether a
          transition is pending or not.
        </li>
      </ul>
      <button
        onClick={fetchData}
        disabled={fetchingData}
        className="btn btn-success"
      >
        Fetch Data from Server
      </button>
      {fetchingData && <p>Loading...</p>}
      {data && <p>{data}</p>}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseTransitionDemo;
/* 
Explanation:
The UseTransitionDemo component demonstrates the use of the useTransition hook, which manages asynchronous state updates to create smooth transitions during rendering. It allows preventing blocking the UI during expensive state updates and rendering placeholder content during asynchronous operations to improve perceived performance. 

In this component:
- The "Fetch Data" button triggers the fetchData function, which simulates fetching data asynchronously.
- Inside fetchData, the startTransition function is used to initiate the transition immediately by setting the data to null, indicating that data fetching has started and displaying the "Loading..." text.
- After a delay of 5 seconds, the actual data fetching is simulated, and the data is updated using startTransition once again to display the fetched data.
- The component also provides a description of the useTransition hook and its return values.
- Finally, the "Back to Topics" link is styled with Bootstrap's primary button style.
*/
