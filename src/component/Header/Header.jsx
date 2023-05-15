import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div
      className="nav justify-content-between align-items-center"
      data-testid="header"
    >
      <h3>READER</h3>
      <div className="d-flex gap-2 gap-md-4 align-items-center">
        <i className="bi bi-bell"></i>
        <img
          src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0"
          alt="user-img"
          className="rounded-circle"
          style={{ width: "40px", height: "40px" }}
        />
        <button
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#addBlogForm"
        >
          <i className="bi bi-pencil-square"></i>
          <span style={{ marginLeft: "6px" }}>Add Blog</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
