
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrowseCategories from '@/components/BrowseCategories';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrowseCategories />
      <FeaturedProducts />
    </div>
  );
};

export default Index;
