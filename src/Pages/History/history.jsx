import React from "react";
import "../../styles/history.css";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import "../../styles/home.css";
// import maildetails from "./maildetails";

const History = () => {
  return (
    <>
    <div className="main">
          <Header />
         
          <div className="grid-container my-1">
            <Sidebar />

      <div className="History">
        <div className="allmail">
          <h1>All Mails</h1>
        </div>
        <div
          className="mailtemp"
          onClick={() => {
            console.log("hello");
          }}
        >
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
        <div className="mailtemp">
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
        <div className="mailtemp">
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
        <div className="mailtemp">
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
        <div className="mailtemp">
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
        <div className="mailtemp">
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
        <div className="mailtemp">
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
        <div className="mailtemp">
          <h2>Name</h2>
          <div className="timename">
            <h4>7:30</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, quam iste dolor deserunt nulla labore nemo fugit incidunt.
            At quisquam animi illo hic eius! Quam sit alias quidem aspernatur.
          </p>
        </div>
      </div>
       </div>
        </div>
    </>
  );
};

export default History;