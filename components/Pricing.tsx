import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: 499,
    priceYearly: 399,
    description: "For small centers (up to 100 students)",
    features: [
      "Unlimited tests",
      "Auto-ranking",
      "Analytics",
      "Center branding"
    ]
  },
  {
    name: "Growth",
    priceMonthly: 999,
    priceYearly: 799,
    description: "For growing centers (up to 300 students)",
    features: [
      "Everything in Starter",
      "AI explanations",
      "Advanced analytics",
      "Priority support"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    priceMonthly: 0, 
    priceYearly: 0,
    description: "For large or multi-branch centers",
    features: [
      "Unlimited students",
      "Offline mode",
      "White-label",
      "Dedicated support"
    ]
  }
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-gray-600">No hidden fees. Cancel anytime.</p>
          
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-primary rounded-full p-1 transition-colors focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-success text-xs font-bold ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 shadow-soft border ${plan.isPopular ? 'border-primary ring-2 ring-primary ring-opacity-10' : 'border-gray-100'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-2 min-h-[40px]">{plan.description}</p>
              
              <div className="my-6">
                {plan.priceMonthly > 0 ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">₹{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                    <span className="text-gray-500 ml-1">/mo</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-gray-900">Custom</div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check size={18} className="text-success flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.isPopular 
                  ? 'bg-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
              }`}>
                {plan.priceMonthly > 0 ? 'Start Free Trial' : 'Contact Sales'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;