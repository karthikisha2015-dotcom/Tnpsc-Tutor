import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Ramesh Kumar",
    role: "Director",
    institute: "SK Academy",
    content: "Earlier we spent 3–4 hours correcting papers. Now everything is automatic. Students love the instant results.",
    image: "https://picsum.photos/100/100?random=1",
    rating: 5
  },
  {
    name: "Mrs. Deepa",
    role: "Head",
    institute: "Deepa Coaching Center",
    content: "Our center handles more tests with the same staff. Productivity doubled since we switched to TNPSC Master.",
    image: "https://picsum.photos/100/100?random=2",
    rating: 5
  },
  {
    name: "Dr. Palani",
    role: "Founder",
    institute: "Success Point, Salem",
    content: "The AI question builder helped us create a quick surprise test in 10 minutes when our faculty was on leave. Amazing tech.",
    image: "https://picsum.photos/100/100?random=3",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold font-heading text-gray-900">Trusted by Study Centers Across Tamil Nadu</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-bgLight p-8 rounded-2xl border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}, {t.institute}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;