import React from "react";
import { Link } from "react-router-dom";

// Component for rendering individual notes
const NoteItem = ({ note }) => <li>{note}</li>;

const ListAndKeys = () => {
  // Data for the list
  const items = ["Apple", "Banana", "Orange", "Guava", "Mango"];

  // Notes explaining the list and keys
  const notes = [
    "In React, you can render lists of elements using the map function.",
    "It's important to provide a unique 'key' prop to each element in the list for efficient updates.",
    "Keys help React identify which items have changed, been added, or been removed, ensuring correct and efficient updates.",
    "Avoid using array indices as keys when the order of items may change, as it can lead to unexpected behavior.",
    "Instead, prefer using stable, unique identifiers associated with each item for keys.",
  ];

  return (
    <div className="content-wrapper">
      <h2>List and Keys</h2>
      <div>
        <h3>Notes:</h3>
        <ul>
          {notes.map((note, index) => (
            <NoteItem key={index} note={note} />
          ))}
        </ul>
      </div>
      <h2>List Demo</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <ListAndKeysDescription />
      {/* Back to Topics link */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

// Component description for ListAndKeys
const ListAndKeysDescription = () => {
  return (
    <div>
      <h3>Component Description</h3>
      <p>
        The <code>ListAndKeys</code> component demonstrates how to render lists
        of elements using the map function in React. It also highlights the
        importance of providing unique "key" props to each list item for
        efficient updates.
      </p>
    </div>
  );
};

export default ListAndKeys;

/*
  Component: ListAndKeys

  Description:
  This component demonstrates how to render lists of elements using the map function in React.
  It also highlights the importance of providing unique "key" props to each list item for efficient updates.

  Props:
  None

  Route:
  '/list-and-keys'

  Additional Notes:
  - The notes provided explain the concept of list rendering and the significance of keys.
*/
