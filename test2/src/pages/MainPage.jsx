import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/add`)}>Add Willing</button>
      <button onClick={() => navigate(`/find`)}>Find Willing</button>
    </div>
  );
};

export default MainPage;
