import React from "react";
import {
  FiUserPlus,
  FiEdit,
  FiCheckCircle,
  FiUpload,
  FiSettings,
} from "react-icons/fi";

function Task() {
  // Placeholder for activity data. In a real app, this would come from an API.
  const activityLog = [
    {
      id: 1,
      icon: <FiCheckCircle className="text-green-400" size={20} />,
      text: (
        <>
          Completed task:{" "}
          <span className="font-semibold text-cyan-400">
            "Deploy to production"
          </span>
        </>
      ),
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      icon: <FiUpload className="text-purple-400" size={20} />,
      text: (
        <>
          Uploaded 3 new files to the project{" "}
          <span className="font-semibold text-cyan-400">"Project Phoenix"</span>
        </>
      ),
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      icon: <FiEdit className="text-yellow-400" size={20} />,
      text: <>Edited profile information</>,
      timestamp: "1 day ago",
    },
    {
      id: 4,
      icon: <FiSettings className="text-gray-400" size={20} />,
      text: <>Updated notification settings</>,
      timestamp: "1 day ago",
    },
    {
      id: 5,
      icon: <FiUserPlus className="text-blue-400" size={20} />,
      text: (
        <>
          A new user,{" "}
          <span className="font-semibold text-cyan-400">"Sasuke Uchiha"</span>,
          joined your team.
        </>
      ),
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="text-white space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Recent Activity</h1>
        <p className="mt-1 text-gray-400">
          A log of recent events and activities in your account.
        </p>
      </div>

      {/* Activity Timeline Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activityLog.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {/* Vertical line for the timeline */}
                  {activityIdx !== activityLog.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-4">
                    {/* Icon */}
                    <div>
                      <span className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center ring-8 ring-gray-800">
                        {activity.icon}
                      </span>
                    </div>
                    {/* Activity Text and Timestamp */}
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="text-sm text-gray-300">{activity.text}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Task;
