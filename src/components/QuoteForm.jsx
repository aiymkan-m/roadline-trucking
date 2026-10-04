import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './QuoteForm.css';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    freightType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const freightOptions = [
    'Dry Van',
    'Reefer (Temperature Controlled)',
    'Flatbed',
    'Box Truck',
    'Expedited',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery location is required';
    }

    if (!formData.freightType) {
      newErrors.freightType = 'Please select a freight type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide shipment details or message';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Reset form state after successful submission display
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickupLocation: '',
      deliveryLocation: '',
      freightType: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <div className="quote-wrapper">
          <div className="quote-info">
            <span className="section-subtitle light">Fast & Accurate Pricing</span>
            <h2 className="quote-title">Request a Freight Quote</h2>
            <p className="quote-description">
              Fill out the form with your load details, and our 24/7 dispatch team will get back to you immediately with competitive rates and available lane capacity.
            </p>

            <div className="quote-perks">
              <div className="perk-item">
                <CheckCircle2 className="perk-icon" size={20} />
                <span>No obligation, free instant quote calculation</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 className="perk-icon" size={20} />
                <span>Customized freight solutions for all cargo sizes</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 className="perk-icon" size={20} />
                <span>Direct dispatch consultation within 15 minutes</span>
              </div>
            </div>
          </div>

          <div className="quote-form-card">
            {isSubmitted ? (
              <div className="submission-success">
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={48} />
                </div>
                <h3>Quote Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our dispatch team is reviewing your shipment from <strong>{formData.pickupLocation}</strong> to <strong>{formData.deliveryLocation}</strong> and will contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button onClick={handleReset} className="btn btn-primary btn-reset">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && (
                      <span className="error-message">
                        <AlertCircle size={14} /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && (
                      <span className="error-message">
                        <AlertCircle size={14} /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pickupLocation">
                      Pickup Location <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      placeholder="City, State or ZIP"
                      className={errors.pickupLocation ? 'input-error' : ''}
                    />
                    {errors.pickupLocation && (
                      <span className="error-message">
                        <AlertCircle size={14} /> {errors.pickupLocation}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="deliveryLocation">
                      Delivery Location <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="deliveryLocation"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      placeholder="City, State or ZIP"
                      className={errors.deliveryLocation ? 'input-error' : ''}
                    />
                    {errors.deliveryLocation && (
                      <span className="error-message">
                        <AlertCircle size={14} /> {errors.deliveryLocation}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="freightType">
                    Freight Type <span className="required">*</span>
                  </label>
                  <select
                    id="freightType"
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                    className={errors.freightType ? 'input-error' : ''}
                  >
                    <option value="">Select Freight Type</option>
                    {freightOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.freightType && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.freightType}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Shipment Details & Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Weight, dimensions, special handling requirements..."
                    className={errors.message ? 'input-error' : ''}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-submit-quote">
                  <Send size={18} /> Request Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
