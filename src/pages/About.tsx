
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About StyleStore</h1>
          <p className="text-xl text-gray-600">Your destination for premium lifestyle products</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, StyleStore began with a simple mission: to curate the finest selection 
              of lifestyle products that blend quality, design, and functionality. We believe that 
              great products enhance everyday life and reflect personal style.
            </p>
            <p className="text-gray-600">
              From premium electronics to sustainable home goods, every item in our collection is 
              carefully selected to meet our high standards of quality and design excellence.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To provide exceptional products that inspire and elevate your lifestyle, 
                backed by outstanding customer service and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1K+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Customers</h3>
            <p className="text-gray-600">Trusted by thousands of satisfied customers worldwide</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">500+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Products</h3>
            <p className="text-gray-600">Carefully curated selection of high-quality items</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">24/7</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for all your needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
