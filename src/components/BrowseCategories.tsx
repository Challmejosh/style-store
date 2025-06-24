
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';
import { 
  Smartphone, 
  Shirt, 
  Watch, 
  Home, 
  Coffee,
  Package
} from 'lucide-react';

const categoryIcons = {
  electronics: Smartphone,
  clothing: Shirt,
  accessories: Watch,
  home: Home,
  food: Coffee,
  all: Package,
};

const BrowseCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in our organized collections
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || Package;
            
            return (
              <Link 
                key={category.id} 
                to={`/products?category=${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 text-center">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
