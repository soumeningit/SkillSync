import { FiCheckCircle } from "react-icons/fi";

function Step4({ data }) {
  return (
    <div className="text-center">
      <FiCheckCircle className="mx-auto text-green-400 h-16 w-16 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Ready to Go!</h2>
      <p className="text-gray-400 mb-6">
        Review your workspace details below before creating.
      </p>
      <div className="bg-gray-700 text-left p-4 rounded-lg space-y-2">
        <p>
          <strong>Name:</strong> {data.workSpaceName || "Not provided"}
        </p>
        <p>
          <strong>Description:</strong> {data.workSpaceDesc || "Not provided"}
        </p>
        <p>
          <strong>Selected Plan:</strong>{" "}
          <span className="font-bold text-cyan-400">
            {data.pricePlan || "Not selected"}
          </span>
        </p>
        <p>
          <strong>Members to Invite:</strong>{" "}
          {data.invites.length > 0 ? data.invites.join(", ") : "None"}
        </p>
      </div>
    </div>
  );
}

export default Step4;
