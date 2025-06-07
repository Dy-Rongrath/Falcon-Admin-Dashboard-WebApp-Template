import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  CreditCard,
  Calendar,
  MapPin,
  Building,
} from "lucide-react";

const FloatingLabels: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
    position: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    website: "",
    bio: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const FloatingInput: React.FC<{
    id: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    icon?: React.ReactNode;
    required?: boolean;
    className?: string;
  }> = ({
    id,
    type,
    value,
    onChange,
    label,
    icon,
    required = false,
    className = "",
  }) => (
    <div className={`relative ${className}`}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent transition-all duration-200"
        placeholder={label}
        required={required}
      />
      <label
        htmlFor={id}
        className="absolute left-12 top-3 text-gray-500 text-sm transition-all duration-200 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
        style={{
          top: value ? "0.5rem" : "0.75rem",
          fontSize: value ? "0.75rem" : "0.875rem",
          transform: value
            ? "translateY(-1.5rem) scale(0.75)"
            : "translateY(0) scale(1)",
          color: value ? "#3B82F6" : "#6B7280",
        }}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
    </div>
  );

  const FloatingTextarea: React.FC<{
    id: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    rows?: number;
    required?: boolean;
    className?: string;
  }> = ({
    id,
    value,
    onChange,
    label,
    rows = 4,
    required = false,
    className = "",
  }) => (
    <div className={`relative ${className}`}>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent resize-none transition-all duration-200"
        placeholder={label}
        required={required}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
        style={{
          top: value ? "0.5rem" : "0.75rem",
          fontSize: value ? "0.75rem" : "0.875rem",
          transform: value
            ? "translateY(-1.5rem) scale(0.75)"
            : "translateY(0) scale(1)",
          color: value ? "#3B82F6" : "#6B7280",
        }}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );

  const FloatingSelect: React.FC<{
    id: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    options: { value: string; label: string }[];
    icon?: React.ReactNode;
    required?: boolean;
    className?: string;
  }> = ({
    id,
    value,
    onChange,
    label,
    options,
    icon,
    required = false,
    className = "",
  }) => (
    <div className={`relative ${className}`}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white transition-all duration-200"
        required={required}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-12 top-3 text-gray-500 text-sm transition-all duration-200 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500"
        style={{
          top: value ? "0.5rem" : "0.75rem",
          fontSize: value ? "0.75rem" : "0.875rem",
          transform: value
            ? "translateY(-1.5rem) scale(0.75)"
            : "translateY(0) scale(1)",
          color: value ? "#3B82F6" : "#6B7280",
        }}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Floating Labels Forms
          </h1>
          <p className="text-gray-600">
            Modern form inputs with smooth floating label animations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Personal Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingInput
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(value) => handleChange("firstName", value)}
                  label="First Name"
                  icon={<User className="w-5 h-5" />}
                  required
                />
                <FloatingInput
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(value) => handleChange("lastName", value)}
                  label="Last Name"
                  icon={<User className="w-5 h-5" />}
                  required
                />
              </div>

              <FloatingInput
                id="email"
                type="email"
                value={formData.email}
                onChange={(value) => handleChange("email", value)}
                label="Email Address"
                icon={<Mail className="w-5 h-5" />}
                required
              />

              <FloatingInput
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(value) => handleChange("phone", value)}
                label="Phone Number"
                icon={<Phone className="w-5 h-5" />}
              />

              <div className="relative">
                <FloatingInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(value) => handleChange("password", value)}
                  label="Password"
                  icon={<Lock className="w-5 h-5" />}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <FloatingInput
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(value) => handleChange("confirmPassword", value)}
                label="Confirm Password"
                icon={<Lock className="w-5 h-5" />}
                required
              />

              <FloatingTextarea
                id="bio"
                value={formData.bio}
                onChange={(value) => handleChange("bio", value)}
                label="Bio / About"
                rows={3}
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Professional Information
            </h3>
            <div className="space-y-6">
              <FloatingInput
                id="company"
                type="text"
                value={formData.company}
                onChange={(value) => handleChange("company", value)}
                label="Company Name"
                icon={<Building className="w-5 h-5" />}
              />

              <FloatingSelect
                id="position"
                value={formData.position}
                onChange={(value) => handleChange("position", value)}
                label="Position"
                icon={<User className="w-5 h-5" />}
                options={[
                  { value: "developer", label: "Software Developer" },
                  { value: "designer", label: "UI/UX Designer" },
                  { value: "manager", label: "Project Manager" },
                  { value: "analyst", label: "Business Analyst" },
                  { value: "executive", label: "Executive" },
                  { value: "other", label: "Other" },
                ]}
              />

              <FloatingInput
                id="website"
                type="url"
                value={formData.website}
                onChange={(value) => handleChange("website", value)}
                label="Website URL"
                icon={<CreditCard className="w-5 h-5" />}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingInput
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(value) => handleChange("city", value)}
                  label="City"
                  icon={<MapPin className="w-5 h-5" />}
                />
                <FloatingInput
                  id="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={(value) => handleChange("zipCode", value)}
                  label="ZIP Code"
                  icon={<MapPin className="w-5 h-5" />}
                />
              </div>

              <FloatingTextarea
                id="address"
                value={formData.address}
                onChange={(value) => handleChange("address", value)}
                label="Full Address"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Payment Information
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <FloatingInput
                id="cardNumber"
                type="text"
                value={formData.cardNumber}
                onChange={(value) => handleChange("cardNumber", value)}
                label="Card Number"
                icon={<CreditCard className="w-5 h-5" />}
              />

              <div className="grid grid-cols-2 gap-4">
                <FloatingInput
                  id="expiryDate"
                  type="text"
                  value={formData.expiryDate}
                  onChange={(value) => handleChange("expiryDate", value)}
                  label="MM/YY"
                  icon={<Calendar className="w-5 h-5" />}
                />
                <FloatingInput
                  id="cvv"
                  type="text"
                  value={formData.cvv}
                  onChange={(value) => handleChange("cvv", value)}
                  label="CVV"
                  icon={<Lock className="w-5 h-5" />}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600">
                  Your payment information is
                </p>
                <p className="text-sm text-gray-600">securely encrypted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Examples */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Validation States */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Validation States
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value="valid@example.com"
                  className="peer w-full px-4 py-3 pl-12 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-transparent"
                  placeholder="Valid Email"
                  readOnly
                />
                <label className="absolute left-12 top-0.5 text-green-600 text-xs font-medium">
                  Valid Email
                </label>
                <Mail className="w-5 h-5 text-green-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="invalid-email"
                  className="peer w-full px-4 py-3 pl-12 border-2 border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-transparent"
                  placeholder="Invalid Email"
                  readOnly
                />
                <label className="absolute left-12 top-0.5 text-red-600 text-xs font-medium">
                  Invalid Email
                </label>
                <Mail className="w-5 h-5 text-red-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-xs text-red-600 mt-1">
                  Please enter a valid email address
                </p>
              </div>
            </div>
          </div>

          {/* Different Sizes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Different Sizes
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value="Small Input"
                  className="peer w-full px-3 py-2 pl-10 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent"
                  placeholder="Small Input"
                  readOnly
                />
                <label className="absolute left-10 top-0 text-blue-600 text-xs font-medium">
                  Small Input
                </label>
                <User className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="Medium Input"
                  className="peer w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent"
                  placeholder="Medium Input"
                  readOnly
                />
                <label className="absolute left-12 top-0.5 text-blue-600 text-xs font-medium">
                  Medium Input
                </label>
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="Large Input"
                  className="peer w-full px-5 py-4 pl-14 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent"
                  placeholder="Large Input"
                  readOnly
                />
                <label className="absolute left-14 top-1 text-blue-600 text-xs font-medium">
                  Large Input
                </label>
                <User className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Color Variations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Color Variations
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value="Primary Blue"
                  className="peer w-full px-4 py-3 pl-12 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent"
                  placeholder="Primary Input"
                  readOnly
                />
                <label className="absolute left-12 top-0.5 text-blue-600 text-xs font-medium">
                  Primary Blue
                </label>
                <User className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="Success Green"
                  className="peer w-full px-4 py-3 pl-12 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-transparent"
                  placeholder="Success Input"
                  readOnly
                />
                <label className="absolute left-12 top-0.5 text-green-600 text-xs font-medium">
                  Success Green
                </label>
                <User className="w-5 h-5 text-green-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="Warning Orange"
                  className="peer w-full px-4 py-3 pl-12 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-transparent"
                  placeholder="Warning Input"
                  readOnly
                />
                <label className="absolute left-12 top-0.5 text-orange-600 text-xs font-medium">
                  Warning Orange
                </label>
                <User className="w-5 h-5 text-orange-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Complete Your Profile
              </h3>
              <p className="text-sm text-gray-600">
                All fields with floating labels are ready for submission
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Reset Form
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingLabels;
