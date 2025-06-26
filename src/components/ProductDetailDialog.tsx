
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductDetailDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetailDialog = ({ product, open, onOpenChange }: ProductDetailDialogProps) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    onOpenChange(false);
  };

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
              )}
              {product.isSale && (
                <Badge className="bg-red-500 hover:bg-red-600">
                  Sale {discount > 0 && `-${discount}%`}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className={`absolute top-4 right-4 ${
                isLiked ? 'text-red-500' : 'text-gray-600'
              }`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
            </Button>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 capitalize mb-4">{product.category}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-green-600 font-medium">
                  You save ${product.originalPrice - product.price}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  This premium {product.category} item offers exceptional quality and style. 
                  Perfect for everyday use with modern design and superior craftsmanship.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• High-quality materials</li>
                  <li>• Modern design</li>
                  <li>• Durable construction</li>
                  <li>• Perfect for daily use</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 border rounded-md text-center min-w-[60px]">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 py-3"
                size="lg"
              >
                <ShoppingBag size={20} className="mr-2" />
                Add {quantity} to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
