// Form validation utilities
export const validateForm = (values: Record<string, any>) => {
  const errors: Record<string, string> = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Phone validation (required)
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?[\d\s-]{10,}$/.test(values.phone)) {
    errors.phone = 'Invalid phone number format';
  }

  // Subject validation (optional)
  if (values.subject && values.subject.length < 5) {
    errors.subject = 'Subject must be at least 5 characters';
  }

  // Message validation (optional)
  if (values.message && values.message.length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }

  return errors;
};

// Number input validation
export const validateNumberInput = (
  value: string,
  min: number,
  max: number
): number | null => {
  const num = Number(value.replace(/,/g, ''));
  if (isNaN(num) || num < min || num > max) {
    return null;
  }
  return num;
};

// Schedule demo form validation
export const validateScheduleDemo = (values: Record<string, any>) => {
  const errors: Record<string, string> = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Full name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Business email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Phone validation
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?[\d\s-]{10,}$/.test(values.phone)) {
    errors.phone = 'Invalid phone number format';
  }

  // DateTime validation
  if (!values.dateTime) {
    errors.dateTime = 'Date and time is required';
  } else {
    const selectedDate = new Date(values.dateTime);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    if (selectedDate < tomorrow) {
      errors.dateTime = 'Please select a future date';
    }
  }

  return errors;
};