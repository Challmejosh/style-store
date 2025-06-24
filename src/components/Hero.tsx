import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Discover
                </span>
                <br />
                <span className="text-gray-900">Amazing Products</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Shop the latest trends and timeless classics. Quality products, 
                exceptional service, and unbeatable prices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" 
                    alt="Featured Product 1"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" 
                    alt="Featured Product 2"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop" 
                    alt="Featured Product 3"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop" 
                    alt="Featured Product 4"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
