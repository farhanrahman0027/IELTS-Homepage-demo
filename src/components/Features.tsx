import { Mic, FileText, Award, Users, BookOpen, Target } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Speaking Practice',
    description: 'Interactive speaking sessions with certified examiners using real IELTS question formats.',
  },
  {
    icon: FileText,
    title: 'Full-Length Mock Tests',
    description: 'Computer-delivered and paper-based practice tests that replicate actual exam conditions.',
  },
  {
    icon: Award,
    title: 'Band Score Prediction',
    description: 'Accurate assessment of your current level with detailed feedback on improvement areas.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from qualified instructors with extensive IELTS examination experience.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Materials',
    description: 'Access to official preparation materials and extensive question banks for all modules.',
  },
  {
    icon: Target,
    title: 'Targeted Preparation',
    description: 'Personalized study plans tailored to your target band score and timeline.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our IELTS Programme?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by universities, employers, and governments worldwide for accurate English proficiency assessment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-gray-50 p-8 hover:bg-red-50 transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-red-600"
              >
                <div className="inline-flex p-3 bg-red-100 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
