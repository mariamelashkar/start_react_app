import React, { useState } from "react";
import "./Protofilio.css";
import { portfolioItems } from "./Protofilio-items.jsx";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTitle, setSelectedItemTitle] = useState(null);

  const [show, setShow] = useState(false);

  const handleShow = (imgSrc) => {
    setSelectedItem(imgSrc);
    setShow(true);
  }
  const handleClose = () => setShow(false);
const itemTitle=(title)=>{
  setSelectedItemTitle(title)
}
  return (
    <div className="portfolio-section container py-5">
      <h2 className="text-center mb-5">PORTFOLIO</h2>
      <div className="divider-portofilio">
        {/* <i class="fa-solid fa-star mx-3"></i> */}
      </div>

      <div className="row">
        {portfolioItems.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-5 px-3">
            <div
              className="portfolio-item overflow-hidden" data-toggle="modal" data-target="#exampleModal"
              onClick={() => {
                handleShow(item.src)
                itemTitle(item.title)
                console.log("clicked")
              }
            }
            >
              <img src={item.src} alt={item.title} className="img-fluid" />
              <div className="overlay">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <h3 class="display-5 fw-bolder text-center mb-4">{selectedTitle}</h3>
<figure>
<img
              src={selectedItem}
              alt="Selected Portfolio Item"
              className="img-fluid"
            />
  </figure>      
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo consequuntur,
               dicta aspernatur perferendis ratione voluptate? Suscipit quo eveniet nihil assumenda commodi.
                Velit facilis tenetur praesentium.
            </p>
      </Modal.Body>
    </Modal>
  </>
            )}
    </div>
  );
}
