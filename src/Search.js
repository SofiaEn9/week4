import React from "react";
import "./App.css";

export default function Search() {
  return (
    <form className="Search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Type a city..."
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
