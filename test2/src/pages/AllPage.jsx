import React from "react";
import { storageService } from "../services/storageService";

const AllPage = ({ formData }) => {
  const willings = storageService.getWillings(formData.location);

  return (
    <div className="willings">
      {willings.map((formData) => (
        <div key={formData.location}>
          <h4>{willings}</h4>
          <h5>{formData.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllPage;
