import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { BsCheckCircle, BsPencil, BsTrash } from "react-icons/bs";
import {
  removeTodo,
  removeWilling,
  selectWilling,
  toggleWilling,
} from "../store/willingSlice";

const Willing = ({ formData }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleSelectedTodo = () => {
    selectTodo(todo.id);
    navigate(`/all/${formData.id}`);
  };

  return <Confirm>Confirm</Confirm>;
};

export default Willing;
