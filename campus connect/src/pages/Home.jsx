import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Your Campus, <span className="text-campus-primary">Connected.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the ultimate platform for students. Find events, buy textbooks, 
            join clubs, and stay updated with campus news.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/dashboard" className="bg-campus-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center">
              Get Started <ArrowRight className="ml-2" size={20}/>
            </Link>
            <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Users size={40} className="text-campus-primary"/>} 
          title="Student Clubs" 
          desc="Find your community among 50+ active student organizations."
        />
        <FeatureCard 
          icon={<Calendar size={40} className="text-campus-primary"/>} 
          title="Campus Events" 
          desc="Never miss a workshop, seminar, or sports game again."
        />
        <FeatureCard 
          icon={<BookOpen size={40} className="text-campus-primary"/>} 
          title="Marketplace" 
          desc="Buy and sell textbooks, dorm furniture, and electronics safely."
        />
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default Home;