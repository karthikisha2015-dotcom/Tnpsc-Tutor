import React from 'react';
import { Edit3, Database, Zap, Users, BarChart2, LayoutTemplate } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Mock Test Builder",
    description: "Create full and unit tests in minutes. TNPSC format ready.",
    icon: Edit3
  },
  {
    title: "Question Bank Upload",
    description: "Add questions manually or upload Excel in bulk.",
    icon: Database
  },
  {
    title: "Auto-Evaluation",
    description: "Instant results, accuracy charts, and center-level rank list.",
    icon: Zap
  },
  {
    title: "Batch Management",
    description: "Add students, assign tests, and monitor performance.",
    icon: Users
  },
  {
    title: "Analytics Dashboard",
    description: "Question-wise, subject-wise, and student-wise insights.",
    icon: BarChart2
  },
  {
    title: "Center Branding",
    description: "Your logo. Your name. Your identity on every report.",
    icon: LayoutTemplate
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Powerful Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">Everything You Need to Run a <br/> Modern TNPSC Test System</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-blue-100"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;