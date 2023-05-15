import React from "react";
import Form from "../Form/Form";

const FormModal = () => {
  return (
    <div
      className="modal fade"
      id="addBlogForm"
      tabIndex="-1"
      aria-labelledby="addBlogFormLabel"
      aria-hidden="true"
      data-testid="modal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
