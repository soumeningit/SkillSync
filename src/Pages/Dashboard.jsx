import React from "react";
import {
  FaBell,
  FaCheckCircle,
  FaListAlt,
  FaPlus,
  FaProjectDiagram,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import { GoClock } from "react-icons/go";

// --- MOCK DATA ---
// In a real app, this data would come from your API.
const currentUser = {
  name: "Naruto",
  profileAvatar: "https://i.imgur.com/9pNffkj.png", // Using the Naruto avatar URL
};

const stats = [
  {
    id: 1,
    label: "Active Projects",
    value: "12",
    icon: <FaProjectDiagram className="text-blue-400" />,
    change: "+2 this week",
  },
  {
    id: 2,
    label: "Tasks Due Today",
    value: "5",
    icon: <FaListAlt className="text-orange-400" />,
    change: "3 overdue",
  },
  {
    id: 3,
    label: "Team Members",
    value: "8",
    icon: <FaUserFriends className="text-green-400" />,
    change: "1 new",
  },
  {
    id: 4,
    label: "Unread Notifications",
    value: "7",
    icon: <FaBell className="text-red-400" />,
    change: "View all",
  },
];

const tasks = [
  {
    id: 1,
    text: "Finalize Q3 marketing budget proposal.",
    completed: false,
    project: "Marketing",
  },
  {
    id: 2,
    text: "Deploy hotfix for user authentication bug.",
    completed: false,
    project: "Core App",
  },
  {
    id: 3,
    text: "Review and approve new UI mockups for the dashboard.",
    completed: true,
    project: "Design System",
  },
  {
    id: 4,
    text: "Onboard the new junior developer, Alex.",
    completed: false,
    project: "HR",
  },
  {
    id: 5,
    text: "Prepare slides for the weekly sync meeting.",
    completed: true,
    project: "General",
  },
];

const recentActivity = [
  {
    id: 1,
    user: { name: "Alice", avatar: "https://picsum.photos/seed/alice/100" },
    action: "commented on",
    target: "Project Alpha's new logo design.",
    time: "5m ago",
  },
  {
    id: 2,
    user: { name: "Ben", avatar: "https://picsum.photos/seed/ben/100" },
    action: "completed the task",
    target: "'Set up Staging Server'.",
    time: "30m ago",
  },
  {
    id: 3,
    user: { name: "Chloe", avatar: "https://picsum.photos/seed/chloe/100" },
    action: "added a new file to",
    target: "Q3 Financials folder.",
    time: "1h ago",
  },
  {
    id: 4,
    user: { name: "David", avatar: "https://picsum.photos/seed/david/100" },
    action: "created a new project",
    target: "'Website Redesign 2025'.",
    time: "4h ago",
  },
];
// --- END MOCK DATA ---

// Main Dashboard Component
function Dashboard() {
  return (
    <div className="h-full w-full bg-gray-800 text-gray-200 p-4 md:p-6 lg:p-8 overflow-y-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-gray-400 mt-1">
            Here's a snapshot of your team's progress today.
          </p>
        </div>
        <div className="flex items-center mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search projects or tasks..."
              className="w-full bg-gray-700 text-white p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="ml-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold p-2 rounded-lg flex items-center transition-colors">
            <FaPlus className="mr-2" /> New Task
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-gray-900 p-5 rounded-xl shadow-lg flex items-start justify-between"
          >
            <div>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
            </div>
            <div className="text-2xl bg-gray-800 p-3 rounded-lg">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area (Tasks & Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* My Tasks Section */}
        <div className="lg:col-span-2 bg-gray-900 p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            My Tasks for Today
          </h2>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  task.completed
                    ? "bg-gray-800/50"
                    : "bg-gray-800 hover:bg-gray-700/70"
                }`}
              >
                <div className="mr-4">
                  <button
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      task.completed
                        ? "bg-green-500"
                        : "border-2 border-gray-600"
                    }`}
                  >
                    {task.completed && <FaCheckCircle className="text-white" />}
                  </button>
                </div>
                <div className="flex-grow">
                  <p
                    className={`font-medium ${
                      task.completed
                        ? "line-through text-gray-500"
                        : "text-gray-200"
                    }`}
                  >
                    {task.text}
                  </p>
                </div>
                <div className="text-xs font-mono bg-gray-700 text-cyan-300 px-2 py-1 rounded-md">
                  {task.project}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-gray-900 p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            Recent Team Activity
          </h2>
          <ul className="space-y-4">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="flex items-start">
                <img
                  src={activity.user.avatar}
                  alt={activity.user.name}
                  className="w-9 h-9 rounded-full mr-3 mt-1"
                />
                <div>
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white">
                      {activity.user.name}
                    </span>{" "}
                    {activity.action}{" "}
                    <span className="font-semibold text-cyan-400">
                      {activity.target}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 flex items-center mt-1">
                    <GoClock className="mr-1.5" /> {activity.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
