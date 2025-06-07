import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
  CreditCard,
  Calendar,
} from "lucide-react";

const Validation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validators = {
    firstName: (value: string) => {
      if (!value.trim()) return "First name is required";
      if (value.length < 2) return "First name must be at least 2 characters";
      if (!/^[a-zA-Z\s]+$/.test(value))
        return "First name can only contain letters";
      return "";
    },
    lastName: (value: string) => {
      if (!value.trim()) return "Last name is required";
      if (value.length < 2) return "Last name must be at least 2 characters";
      if (!/^[a-zA-Z\s]+$/.test(value))
        return "Last name can only contain letters";
      return "";
    },
    email: (value: string) => {
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return "";
    },
    phone: (value: string) => {
      if (!value.trim()) return "Phone number is required";
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      if (!phoneRegex.test(value)) return "Please enter a valid phone number";
      if (value.replace(/\D/g, "").length < 10)
        return "Phone number must be at least 10 digits";
      return "";
    },
    password: (value: string) => {
      if (!value) return "Password is required";
      if (value.length < 8) return "Password must be at least 8 characters";
      if (!/(?=.*[a-z])/.test(value))
        return "Password must contain at least one lowercase letter";
      if (!/(?=.*[A-Z])/.test(value))
        return "Password must contain at least one uppercase letter";
      if (!/(?=.*\d)/.test(value))
        return "Password must contain at least one number";
      if (!/(?=.*[@$!%*?&])/.test(value))
        return "Password must contain at least one special character";
      return "";
    },
    confirmPassword: (value: string) => {
      if (!value) return "Please confirm your password";
      if (value !== formData.password) return "Passwords do not match";
      return "";
    },
    cardNumber: (value: string) => {
      const cleanValue = value.replace(/\s/g, "");
      if (!cleanValue) return "Card number is required";
      if (!/^\d+$/.test(cleanValue))
        return "Card number can only contain digits";
      if (cleanValue.length < 13 || cleanValue.length > 19)
        return "Card number must be 13-19 digits";
      return "";
    },
    expiryDate: (value: string) => {
      if (!value) return "Expiry date is required";
      const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
      if (!regex.test(value)) return "Expiry date must be in MM/YY format";
      const [month, year] = value.split("/");
      const currentDate = new Date();
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      if (expiry <= currentDate) return "Card has expired";
      return "";
    },
    cvv: (value: string) => {
      if (!value) return "CVV is required";
      if (!/^\d{3,4}$/.test(value)) return "CVV must be 3 or 4 digits";
      return "";
    },
    terms: (value: boolean) => {
      if (!value) return "You must accept the terms and conditions";
      return "";
    },
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validator = validators[field as keyof typeof validators];
    if (validator) {
      const error = validator(formData[field as keyof typeof formData] as any);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    Object.keys(validators).forEach((field) => {
      newTouched[field] = true;
      const validator = validators[field as keyof typeof validators];
      const error = validator(formData[field as keyof typeof formData] as any);
      if (error) newErrors[field] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        terms: false,
      });
      setTouched({});
      setErrors({});
    }

    setIsSubmitting(false);
  };

  const getFieldStatus = (field: string) => {
    if (!touched[field]) return "default";
    return errors[field] ? "error" : "success";
  };

  const ValidatedInput: React.FC<{
    field: string;
    type: string;
    placeholder: string;
    icon?: React.ReactNode;
    showPasswordToggle?: boolean;
  }> = ({ field, type, placeholder, icon, showPasswordToggle }) => {
    const status = getFieldStatus(field);
    const actualType =
      showPasswordToggle && field === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {placeholder} {validators[field as keyof typeof validators] && "*"}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            type={actualType}
            value={formData[field as keyof typeof formData] as string}
            onChange={(e) => handleChange(field, e.target.value)}
            onBlur={() => handleBlur(field)}
            placeholder={placeholder}
            className={`w-full ${icon ? "pl-10" : "pl-4"} ${showPasswordToggle ? "pr-10" : "pr-4"} py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              status === "error"
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : status === "success"
                  ? "border-green-300 focus:ring-green-500 focus:border-green-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {showPasswordToggle && (
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
          )}
          {status !== "default" && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {status === "error" ? (
                <AlertCircle className="w-5 h-5 text-red-500" />
              ) : (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </div>
          )}
        </div>
        {touched[field] && errors[field] && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors[field]}
          </p>
        )}
        {touched[field] &&
          !errors[field] &&
          formData[field as keyof typeof formData] && (
            <p className="mt-1 text-sm text-green-600 flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Looks good!
            </p>
          )}
      </div>
    );
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (value: string) => {
    const formatted = formatCardNumber(value);
    handleChange("cardNumber", formatted);
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleExpiryChange = (value: string) => {
    const formatted = formatExpiryDate(value);
    handleChange("expiryDate", formatted);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Form Validation
          </h1>
          <p className="text-gray-600">
            Real-time validation with comprehensive error handling and user
            feedback
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              User Registration Form
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-900 border-b pb-2">
                  Personal Information
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ValidatedInput
                    field="firstName"
                    type="text"
                    placeholder="First Name"
                    icon={<User className="w-5 h-5" />}
                  />
                  <ValidatedInput
                    field="lastName"
                    type="text"
                    placeholder="Last Name"
                    icon={<User className="w-5 h-5" />}
                  />
                </div>

                <ValidatedInput
                  field="email"
                  type="email"
                  placeholder="Email Address"
                  icon={<Mail className="w-5 h-5" />}
                />

                <ValidatedInput
                  field="phone"
                  type="tel"
                  placeholder="Phone Number"
                  icon={<Phone className="w-5 h-5" />}
                />

                <ValidatedInput
                  field="password"
                  type="password"
                  placeholder="Password"
                  icon={<Lock className="w-5 h-5" />}
                  showPasswordToggle
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                      onBlur={() => handleBlur("confirmPassword")}
                      placeholder="Confirm Password"
                      className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        getFieldStatus("confirmPassword") === "error"
                          ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                          : getFieldStatus("confirmPassword") === "success"
                            ? "border-green-300 focus:ring-green-500 focus:border-green-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      }`}
                    />
                    {getFieldStatus("confirmPassword") !== "default" && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {getFieldStatus("confirmPassword") === "error" ? (
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    )}
                  </div>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                  {touched.confirmPassword &&
                    !errors.confirmPassword &&
                    formData.confirmPassword && (
                      <p className="mt-1 text-sm text-green-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Passwords match!
                      </p>
                    )}
                </div>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="text-sm text-gray-600 mb-2">
                      Password Strength:
                    </div>
                    <div className="space-y-1">
                      {[
                        {
                          test: formData.password.length >= 8,
                          label: "At least 8 characters",
                        },
                        {
                          test: /(?=.*[a-z])/.test(formData.password),
                          label: "One lowercase letter",
                        },
                        {
                          test: /(?=.*[A-Z])/.test(formData.password),
                          label: "One uppercase letter",
                        },
                        {
                          test: /(?=.*\d)/.test(formData.password),
                          label: "One number",
                        },
                        {
                          test: /(?=.*[@$!%*?&])/.test(formData.password),
                          label: "One special character",
                        },
                      ].map((requirement, index) => (
                        <div key={index} className="flex items-center text-xs">
                          {requirement.test ? (
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          ) : (
                            <div className="w-3 h-3 border border-gray-300 rounded-full mr-2" />
                          )}
                          <span
                            className={
                              requirement.test
                                ? "text-green-700"
                                : "text-gray-500"
                            }
                          >
                            {requirement.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Information */}
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-900 border-b pb-2">
                  Payment Information
                </h4>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number *
                  </label>
                  <div className="relative">
                    <CreditCard className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleCardNumberChange(e.target.value)}
                      onBlur={() => handleBlur("cardNumber")}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        getFieldStatus("cardNumber") === "error"
                          ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                          : getFieldStatus("cardNumber") === "success"
                            ? "border-green-300 focus:ring-green-500 focus:border-green-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      }`}
                    />
                    {getFieldStatus("cardNumber") !== "default" && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {getFieldStatus("cardNumber") === "error" ? (
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    )}
                  </div>
                  {touched.cardNumber && errors.cardNumber && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleExpiryChange(e.target.value)}
                        onBlur={() => handleBlur("expiryDate")}
                        placeholder="MM/YY"
                        maxLength={5}
                        className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          getFieldStatus("expiryDate") === "error"
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : getFieldStatus("expiryDate") === "success"
                              ? "border-green-300 focus:ring-green-500 focus:border-green-500"
                              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                      />
                      {getFieldStatus("expiryDate") !== "default" && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {getFieldStatus("expiryDate") === "error" ? (
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {touched.expiryDate && errors.expiryDate && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <ValidatedInput
                    field="cvv"
                    type="text"
                    placeholder="CVV"
                    icon={<Lock className="w-5 h-5" />}
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="mt-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(e) => {
                        handleChange("terms", e.target.checked);
                        if (touched.terms) handleBlur("terms");
                      }}
                      className={`w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 mt-1 ${
                        touched.terms && errors.terms
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      *
                    </span>
                  </label>
                  {touched.terms && errors.terms && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.terms}
                    </p>
                  )}
                </div>

                {/* Form Summary */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-900 mb-2">
                    Form Validation Status
                  </h5>
                  <div className="space-y-1 text-xs">
                    {Object.keys(validators).map((field) => {
                      const status = getFieldStatus(field);
                      return (
                        <div key={field} className="flex items-center">
                          {status === "success" ? (
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          ) : status === "error" ? (
                            <AlertCircle className="w-3 h-3 text-red-500 mr-2" />
                          ) : (
                            <div className="w-3 h-3 border border-gray-300 rounded-full mr-2" />
                          )}
                          <span
                            className={
                              status === "success"
                                ? "text-green-700"
                                : status === "error"
                                  ? "text-red-700"
                                  : "text-gray-500"
                            }
                          >
                            {field.charAt(0).toUpperCase() +
                              field.slice(1).replace(/([A-Z])/g, " $1")}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={
                  isSubmitting || Object.keys(errors).some((key) => errors[key])
                }
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  isSubmitting || Object.keys(errors).some((key) => errors[key])
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Validation;
