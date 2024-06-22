import { useState } from 'react';

export const useForm = (validate) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioUrl: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const skills = prevData.additionalSkills.includes(value)
          ? prevData.additionalSkills.filter((skill) => skill !== value)
          : [...prevData.additionalSkills, value];
        return {
          ...prevData,
          additionalSkills: skills,
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = (data) => {
    setErrors(validate(data));
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
  };
};
