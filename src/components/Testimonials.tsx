import { Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    score: '8.5',
    destination: 'University of Melbourne',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The comprehensive preparation materials and expert guidance helped me achieve the score I needed for my Master\'s programme. The mock tests were particularly helpful.',
  },
  {
    name: 'Raj Kumar',
    score: '8.0',
    destination: 'Canada PR Application',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'I achieved my target CLB 9 score for Canadian immigration. The trainers understood exactly what examiners look for and helped me improve significantly.',
  },
  {
    name: 'Emma Chen',
    score: '7.5',
    destination: 'UK Work Visa',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Professional training with realistic test simulations. The speaking practice sessions were invaluable for building my confidence and fluency.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 3 million people take the IELTS test each year for study, work and migration purposes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 hover:shadow-xl transition-shadow duration-300 relative border-t-4 border-red-600"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-red-100" />

              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.destination}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-bold text-gray-900">Overall Band: {testimonial.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
