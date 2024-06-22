import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = 'Please enter a valid age greater than 0.';
    }
    if (formData.attendingWithGuest === 'Yes' && !formData.guestName) {
      newErrors.guestName = 'Guest name is required if attending with a guest';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
        <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <h2>Submission Summary</h2>
          </div>
          <div className="card-body">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Attending with a guest:</strong> {formData.attendingWithGuest}</p>
            {formData.attendingWithGuest === 'Yes' && <p><strong>Guest Name:</strong> {formData.guestName}</p>}
          </div>
        </div>
      </div>
      
    );
  }

  return (
    
    <div className='container mt-5'>
    


        <h1  className='text-center mb-4'>Event-Registration-Form</h1>

        <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="form-group">
        <label>Name: </label>
        <input className='form-control'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span  className="text-danger" >{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input className='form-control'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span  className="text-danger">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Age: </label>
        <input className='form-control'
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span  className="text-danger">{errors.age}</span>}
      </div>
      <div className="form-group">
        <label>Are you attending with a guest? </label>
        <select
          name="attendingWithGuest"
          value={formData.attendingWithGuest}
          onChange={handleChange}
          className="form-control"

        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      {formData.attendingWithGuest === 'Yes' && (
        <div className="form-group">
          <label>Guest Name: </label>
          <input className='form-control'
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
             
          />
          {errors.guestName && <span className="text-danger" >{errors.guestName}</span>}
        </div>
      )}
      <br/>
      <button className='btn btn-primary mt-3' type="submit">Submit</button>
    </form>
    

    

    
    </div>
  );
}

export default RegistrationForm;

