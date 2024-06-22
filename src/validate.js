export const validate = (formData) => {
    const errors = {};
  
    if (!formData.fullName) {
      errors.fullName = 'Full Name is required.';
    }
  
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
  
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required.';
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a valid number.';
    }
  
    if (!formData.position) {
      errors.position = 'Please select a position.';
    }
  
    if ((formData.position === 'Developer' || formData.position === 'Designer') && (!formData.relevantExperience || formData.relevantExperience <= 0)) {
      errors.relevantExperience = 'Relevant Experience is required and must be a number greater than 0.';
    }
  
    if (formData.position === 'Designer' && (!formData.portfolioUrl || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.portfolioUrl))) {
      errors.portfolioUrl = 'Portfolio URL is required and must be a valid URL.';
    }
  
    if (formData.position === 'Manager' && !formData.managementExperience) {
      errors.managementExperience = 'Management Experience is required.';
    }
  
    if (formData.additionalSkills.length === 0) {
      errors.additionalSkills = 'At least one skill must be selected.';
    }
  
    if (!formData.preferredInterviewTime) {
      errors.preferredInterviewTime = 'Preferred Interview Time is required.';
    }
  
    return errors;
  };
  
  