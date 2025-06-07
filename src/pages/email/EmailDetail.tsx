import React from "react";
import {
  ArrowLeft,
  Reply,
  ReplyAll,
  Forward,
  Trash2,
  Archive,
  Star,
  MoreHorizontal,
  Paperclip,
  Calendar,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmailDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/email")}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Inbox
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <Archive className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Email Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Email Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Project Update - Q2 Results
                  </h2>
                  <p className="text-sm text-gray-600">
                    from Sarah Johnson &lt;sarah.johnson@company.com&gt;
                  </p>
                  <p className="text-xs text-gray-500">
                    to me, marketing-team@company.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-yellow-500 hover:text-yellow-600 transition-colors">
                  <Star className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-500">
                  Jun 15, 2024 2:30 PM
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Reply className="w-4 h-4 mr-2" />
                Reply
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <ReplyAll className="w-4 h-4 mr-2" />
                Reply All
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Forward className="w-4 h-4 mr-2" />
                Forward
              </button>
            </div>
          </div>

          {/* Email Body */}
          <div className="p-6">
            <div className="prose max-w-none">
              <p className="text-gray-800 mb-4">Hi Team,</p>

              <p className="text-gray-800 mb-4">
                I hope this email finds you well. I wanted to share the latest
                updates on our Q2 project results and discuss the next steps for
                our upcoming initiatives.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Key Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
                <li>
                  Successfully launched the new product feature with 95% user
                  adoption rate
                </li>
                <li>Exceeded revenue targets by 23% compared to Q1</li>
                <li>Improved customer satisfaction scores from 4.2 to 4.7</li>
                <li>
                  Reduced support ticket volume by 30% through improved
                  documentation
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Upcoming Milestones
              </h3>
              <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
                <li>Q3 Planning session scheduled for June 20th</li>
                <li>New team member onboarding starts July 1st</li>
                <li>Product roadmap review with stakeholders on June 25th</li>
              </ul>

              <p className="text-gray-800 mb-4">
                Please review the attached quarterly report and come prepared
                with your department updates for our team meeting on Friday.
              </p>

              <p className="text-gray-800 mb-4">
                Looking forward to discussing these results with everyone and
                planning our Q3 strategy.
              </p>

              <p className="text-gray-800 mb-4">
                Best regards,
                <br />
                Sarah Johnson
                <br />
                Project Manager
                <br />
                sarah.johnson@company.com
              </p>
            </div>

            {/* Attachments */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Attachments (2)
              </h4>
              <div className="space-y-2">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Paperclip className="w-5 h-5 text-gray-400 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Q2_Project_Report.pdf
                    </p>
                    <p className="text-xs text-gray-500">2.4 MB</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Download
                  </button>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Paperclip className="w-5 h-5 text-gray-400 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Revenue_Analysis_Q2.xlsx
                    </p>
                    <p className="text-xs text-gray-500">1.8 MB</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Emails */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Related Emails
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Re: Project Update - Q2 Results
                </p>
                <p className="text-xs text-gray-500">
                  Mike Davis • 3 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Q1 Project Retrospective
                </p>
                <p className="text-xs text-gray-500">
                  Sarah Johnson • 2 weeks ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
