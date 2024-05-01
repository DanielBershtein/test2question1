import React from "react";

const FindPage = ({ formData }) => {
  const city = formData.location;
  const [volunteer, setVolunteer] = useState({ name: "" });
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errMsg = validateForm();
    if (errMsg) {
      setError(errMsg);
      return;
    }

    storageService.saveUser(volunteer);
    navigate("/all");
  };

  const handleChange = (e) => {
    setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (!volunteer.name.trim()) return "Name is required";

    if (volunteer.name.length < 2) {
      return "Name must include at least 2 characters";
    }

    return "";
  };

  return (
    <section className="add-container">
      <div className="form-container">
        <form className="add-form">
          <div className="input-wrapper">
            <label htmlFor="name">name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="list">List of Cities: </label>
            <select name="list" id="list">
              {willings.map((willing) => (
                <option key={willing.id}>{willing.location}</option>
              ))}
            </select>
          </div>
          {error && <div className="error-message">{error}</div>}

          <button className="btn-create" onClick={() => navigate(`/all`)}>
            Search for willings
          </button>
        </form>
      </div>
    </section>
  );
};

export default FindPage;
