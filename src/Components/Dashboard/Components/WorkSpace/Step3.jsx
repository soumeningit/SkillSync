import { FiCheckCircle } from "react-icons/fi";

function Step3({ data, setData }) {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["5 Projects", "Basic Analytics", "Community Support"],
    },
    {
      name: "Pro",
      price: "$15",
      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "Priority Support",
        "Team Collaboration",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated Infrastructure",
        "Premium Support",
        "Custom Integrations",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Choose Your Plan</h2>
      <p className="text-gray-400 mb-6">
        Select a plan that fits your team's needs.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setData({ ...data, pricePlan: plan.name })}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              data.pricePlan === plan.name
                ? "border-blue-500 bg-gray-700"
                : "border-gray-600 hover:border-blue-500"
            }`}
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-3xl font-bold my-2">
              {plan.price}
              <span className="text-sm font-normal text-gray-400">
                {plan.name !== "Free" && "/month"}
              </span>
            </p>
            <ul className="space-y-2 text-gray-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Step3;
