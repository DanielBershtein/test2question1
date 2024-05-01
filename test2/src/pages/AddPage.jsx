import React from "react";
import { useNavigate } from "react-router-dom";

export const AddPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
  });
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errMsg = validateForm();
    if (errMsg) {
      setError(errMsg);
      return;
    }

    storageService.saveUser(formData);
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (!formData.title.trim()) return "Title is required";
    if (formData.title.length > 20) {
      return "Title must not exceed 20 characters";
    }

    
    let regex = /^[a-zA-Z]+$/;

    if (!formData.location.trim()) return "Location is required";
    if (regex.test(char) = false) return "Location must only include English letters"

    if (!formData.description.trim()) return "Description is required";
    if (formData.description.length > 200) {
        return "Description must not exceed 200 characters";
      }

      return ""
      
  };

  return (
    <section className="add-container">
    <div className="form-container">
        <form className="add-form" onSubmit={handleSubmit}>


        <div className="input-wrapper">
        <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
      </div>

      <div className="input-wrapper">
        <label htmlFor="location">Location: </label>
      <input type="text" id="location" name="location" value={formData.location} onChange={handleChange}/>
      </div>

      <div className="input-wrapper">
        <label htmlFor="description">Description: </label>
      <input type="text" id="description" name="description" value={formData.description} onChange={handleChange}/>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <button className="btn-create" onClick={() => navigate(`/`)}>Create Willing</button>
      </form>
    </div>
    </section>
  );
};
export default AddPage

