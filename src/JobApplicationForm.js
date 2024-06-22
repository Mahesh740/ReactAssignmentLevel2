import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { validate } from './validate';

function JobApplicationForm() {
  const { formData, errors, handleChange, handleSubmit, validateForm } = useForm(validate);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted && Object.keys(errors).length === 0) {
      console.log(formData);
    }
  }, [submitted, errors, formData]);

  const onSubmit = (e) => {
    e.preventDefault();
    validateForm(formData);
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      {submitted && Object.keys(errors).length === 0 ? (
        <div className="card">
          <div className="card-header">
            <h2>Submission Summary</h2>
          </div>
          <div className="card-body">
            <p><strong>Full Name:</strong> {formData.fullName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p><strong>Applying for Position:</strong> {formData.position}</p>
            {formData.position === 'Developer' || formData.position === 'Designer' ? (
              <p><strong>Relevant Experience:</strong> {formData.relevantExperience} years</p>
            ) : null}
            {formData.position === 'Designer' ? (
              <p><strong>Portfolio URL:</strong> {formData.portfolioUrl}</p>
            ) : null}
            {formData.position === 'Manager' ? (
              <p><strong>Management Experience:</strong> {formData.managementExperience}</p>
            ) : null}
            <p><strong>Additional Skills:</strong> {formData.additionalSkills.join(', ')}</p>
            <p><strong>Preferred Interview Time:</strong> {formData.preferredInterviewTime}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="w-50 mx-auto">
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.fullName && <div className="alert alert-danger mt-2">{errors.fullName}</div>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
            {errors.email && <div className="alert alert-danger mt-2">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-control"
            />
            {errors.phoneNumber && <div className="alert alert-danger mt-2">{errors.phoneNumber}</div>}
          </div>
          <div className="form-group">
            <label>Applying for Position:</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select a position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.position && <div className="alert alert-danger mt-2">{errors.position}</div>}
          </div>
          {(formData.position === 'Developer' || formData.position === 'Designer') && (
            <div className="form-group">
              <label>Relevant Experience (years):</label>
              <input
                type="number"
                name="relevantExperience"
                value={formData.relevantExperience}
                onChange={handleChange}
                className="form-control"
              />
              {errors.relevantExperience && <div className="alert alert-danger mt-2">{errors.relevantExperience}</div>}
            </div>
          )}
          {formData.position === 'Designer' && (
            <div className="form-group">
              <label>Portfolio URL:</label>
              <input
                type="text"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                className="form-control"
              />
              {errors.portfolioUrl && <div className="alert alert-danger mt-2">{errors.portfolioUrl}</div>}
            </div>
          )}
          {formData.position === 'Manager' && (
            <div className="form-group">
              <label>Management Experience:</label>
              <input
                type="text"
                name="managementExperience"
                value={formData.managementExperience}
                onChange={handleChange}
                className="form-control"
              />
              {errors.managementExperience && <div className="alert alert-danger mt-2">{errors.managementExperience}</div>}
            </div>
          )}
          <div className="form-group">
            <label>Additional Skills:</label>
            <div className="form-check">
              <input
                type="checkbox"
                name="additionalSkills"
                value="JavaScript"
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">JavaScript</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="additionalSkills"
                value="CSS"
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">CSS</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="additionalSkills"
                value="Python"
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Python</label>
            </div>
            {errors.additionalSkills && <div className="alert alert-danger mt-2">{errors.additionalSkills}</div>}
          </div>
          <div className="form-group">
            <label>Preferred Interview Time:</label>
            <input
              type="datetime-local"
              name="preferredInterviewTime"
              value={formData.preferredInterviewTime}
              onChange={handleChange}
              className="form-control"
            />
            {errors.preferredInterviewTime && <div className="alert alert-danger mt-2">{errors.preferredInterviewTime}</div>}
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      )}
    </div>
  );
}

export default JobApplicationForm;
