import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    goal: "",
    description: "",
    target: "",
    detector: "",
    actionable_feedback: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newScript = { ...form };

    await fetch("http://localhost:8000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScript),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ goal: "", description: "", target: "", detector: "", actionable_feedback: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Record</h3>
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
            value="Create script"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
