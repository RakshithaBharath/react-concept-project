import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CongratulationsModal from "./CongratulationsModal";

const BigPictureComponents = () => {
  // State variables for current page and modal display
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // Constants for pagination
  const cardsPerPage = 4; // Number of cards per page
  const totalCards = 40; // Total number of cards

  // Event handler for navigating to the next page
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Event handler for navigating to the previous page
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Event handler for opening the modal
  const handleViewProject = () => {
    setShowModal(true);
  };

  // Event handler for closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to render project cards based on current page
  const renderCards = () => {
    const cards = [];

    // Determine the range of cards to render based on current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

    for (let i = startIndex; i < endIndex; i++) {
      cards.push(
        <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              className="card-img-top"
              src={`https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
              alt={`Card ${i}`}
            />
            <div className="card-body">
              <h5 className="card-title">Project {i + 1}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod magna id dui rutrum, nec vehicula ipsum eleifend. Nam
                feugiat mauris vel neque consectetur, at pulvinar ipsum
                consectetur. Proin ut justo aliquet, ullamcorper massa vel,
                vehicula ex.
              </p>
              <button className="btn btn-success" onClick={handleViewProject}>
                View Project
              </button>
            </div>
          </div>
        </div>
      );
    }

    return cards;
  };

  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="row">{renderCards()}</div>
        <div className="d-flex justify-content-between mt-3">
          {/* Previous button */}
          <Button
            variant="outline-dark"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {/* Next button */}
          <Button
            variant="outline-dark"
            onClick={handleNextPage}
            disabled={currentPage * cardsPerPage >= totalCards}
          >
            Next
          </Button>
        </div>
      </div>
      {/* Back to Topics link */}
      <div className="mt-3">
        <Link to="/topics">
          <Button variant="primary">Back to Topics</Button>
        </Link>
      </div>
      {/* Congratulations Modal */}
      <CongratulationsModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default BigPictureComponents;

/* 
Component Demonstration:
- Displays a paginated list of project cards, with navigation buttons to go to the previous or next page.
- Each card has a "View Project" button that opens a modal when clicked.
- Includes a button styled link to navigate back to the main topics.
*/
