import React from 'react';

export const RecaptchaCheckbox = () => {
  return (
    <div className="flex items-center gap-2 mt-4">
      <input
        type="checkbox"
        id="recaptcha"
        className="w-4 h-4 text-primary border-primary/20 rounded focus:ring-primary"
        required
      />
      <label htmlFor="recaptcha" className="text-sm text-primary-dark">
        I'm not a robot
      </label>
    </div>
  );
};