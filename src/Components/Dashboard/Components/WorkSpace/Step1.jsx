import React, { useState } from "react";

function Step1({ data, setData }) {
  const [error, setError] = useState("");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Workspace Details</h2>
      <p className="text-gray-400 mb-6">
        Give your new workspace a name and a brief description.
      </p>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Registered Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            value={data.email}
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="e.g., narutouzumaki@gmail.com"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="workspaceName"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Workspace Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="workspaceName"
            required
            value={data.workSpaceName}
            onChange={(e) =>
              setData({ ...data, workSpaceName: e.target.value })
            }
            placeholder="e.g., Project Shinobi"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            required
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            placeholder="e.g., Hidden Leaf Village, Konoha"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="workspaceName"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Any Valid Govt ID Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="idNumber"
            required
            value={data.idNumber}
            onChange={(e) => setData({ ...data, idNumber: e.target.value })}
            placeholder="e.g., 123456789"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <label
            htmlFor="workspaceDescription"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="workspaceDescription"
            rows="3"
            value={data.workSpaceDesc}
            required
            onChange={(e) => {
              if (e.target.value.length > 250) {
                setError("Description cannot exceed 100 characters.");
              } else {
                setError("");
                setData({ ...data, workSpaceDesc: e.target.value });
              }
            }}
            placeholder="Describe the purpose of this workspace"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Step1;
