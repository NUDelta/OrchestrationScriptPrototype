import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    goal: "",
    description: "",
    target: "",
    detector: "",
    actionable_feedback: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:8000/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      goal: form.goal,
      description: form.description,
      target: form.target,
      detector: form.detector,
      actionable_feedback: form.actionable_feedback,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:8000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
      <div className="form-group">
          <label htmlFor="goal">Goal</label>
          <input
            type="text"
            className="form-control"
            id="goal"
            value={form.goal}
            onChange={(e) => updateForm({ goal: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="target">Target</label>
          <input
            type="text"
            className="form-control"
            id="target"
            value={form.target}
            onChange={(e) => updateForm({ target: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="detector">Detector</label>
          <input
            type="text"
            className="form-control"
            id="detector"
            value={form.detector}
            onChange={(e) => updateForm({ detector: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="actionable_feedback">Actionable Feedback</label>
          <input
            type="text"
            className="form-control"
            id="actionable_feedback"
            value={form.actionable_feedback}
            onChange={(e) => updateForm({ actionable_feedback: e.target.value })}
          />
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
