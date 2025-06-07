import React, { useState } from "react";
import {
  Send,
  Paperclip,
  Image,
  Smile,
  Save,
  X,
  Plus,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmailCompose: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    body: "",
  });
  const [showCC, setShowCC] = useState(false);
  const [showBCC, setShowBCC] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setAttachments((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = () => {
    // Send email logic here
    alert("Email sent successfully!");
    navigate("/email");
  };

  const handleSaveDraft = () => {
    // Save draft logic here
    alert("Draft saved!");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Compose Email</h1>
          <button
            onClick={() => navigate("/email")}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Compose Form */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Recipients */}
          <div className="p-6 border-b border-gray-200">
            <div className="space-y-4">
              {/* To Field */}
              <div className="flex items-center">
                <label className="w-12 text-sm font-medium text-gray-700">
                  To:
                </label>
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={formData.to}
                    onChange={(e) => handleInputChange("to", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="recipient@example.com"
                    multiple
                  />
                </div>
                <div className="ml-4 flex items-center space-x-2 text-sm">
                  <button
                    onClick={() => setShowCC(!showCC)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Cc
                  </button>
                  <button
                    onClick={() => setShowBCC(!showBCC)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Bcc
                  </button>
                </div>
              </div>

              {/* CC Field */}
              {showCC && (
                <div className="flex items-center">
                  <label className="w-12 text-sm font-medium text-gray-700">
                    Cc:
                  </label>
                  <input
                    type="email"
                    value={formData.cc}
                    onChange={(e) => handleInputChange("cc", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="cc@example.com"
                  />
                </div>
              )}

              {/* BCC Field */}
              {showBCC && (
                <div className="flex items-center">
                  <label className="w-12 text-sm font-medium text-gray-700">
                    Bcc:
                  </label>
                  <input
                    type="email"
                    value={formData.bcc}
                    onChange={(e) => handleInputChange("bcc", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="bcc@example.com"
                  />
                </div>
              )}

              {/* Subject Field */}
              <div className="flex items-center">
                <label className="w-12 text-sm font-medium text-gray-700">
                  Subject:
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject"
                />
              </div>
            </div>
          </div>

          {/* Email Body */}
          <div className="p-6">
            <textarea
              value={formData.body}
              onChange={(e) => handleInputChange("body", e.target.value)}
              rows={12}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write your message here..."
            />

            {/* Attachments */}
            {attachments.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Attachments ({attachments.length})
                </h4>
                <div className="space-y-2">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center">
                        <Paperclip className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-700">
                          {file.name}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          ({(file.size / 1024).toFixed(1)}KB)
                        </span>
                      </div>
                      <button
                        onClick={() => removeAttachment(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Toolbar & Actions */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Attachment Button */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <div className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
                  <Paperclip className="w-4 h-4 mr-1" />
                  <span className="text-sm">Attach</span>
                </div>
              </label>

              {/* Image Button */}
              <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
                <Image className="w-4 h-4 mr-1" />
                <span className="text-sm">Image</span>
              </button>

              {/* Emoji Button */}
              <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
                <Smile className="w-4 h-4 mr-1" />
                <span className="text-sm">Emoji</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              {/* Save Draft */}
              <button
                onClick={handleSaveDraft}
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </button>

              {/* Send Button */}
              <button
                onClick={handleSend}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Quick Templates */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Templates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">
                Meeting Request
              </h4>
              <p className="text-sm text-gray-600">
                Schedule a meeting with team members
              </p>
            </button>
            <button className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">Project Update</h4>
              <p className="text-sm text-gray-600">
                Share project progress and milestones
              </p>
            </button>
            <button className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">Follow Up</h4>
              <p className="text-sm text-gray-600">
                Follow up on previous conversations
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCompose;
