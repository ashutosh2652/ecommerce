import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { motion } from "framer-motion";

function ShoppingProductTile({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="w-full max-w-sm mx-auto"
    >
      <Card className="bg-gray-900 border-gray-800 overflow-hidden shadow-xl group">
        <div className="relative">
          <motion.img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[250px] object-cover"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {product.salesPrice > 0 && (
            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 shadow-lg">
              Sale
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white text-sm"
            >
              {product?.description?.substring(0, 100)}...
            </motion.p>
          </div>
        </div>

        <CardContent className="p-5">
          <motion.h2
            className="text-xl font-bold mb-2 text-white"
            whileHover={{ color: "#a78bfa" }}
          >
            {product?.title}
          </motion.h2>

          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium bg-gray-800 px-2 py-1 rounded-full">
              {product?.category}
            </span>
            <span className="text-gray-400 text-sm font-medium">
              {product?.brand}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <span
                className={`${
                  product?.salesPrice > 0
                    ? "line-through text-gray-500"
                    : "text-purple-400"
                } font-semibold text-lg`}
              >
                ${product?.price}
              </span>
              {product?.salesPrice > 0 && (
                <motion.span
                  className="text-purple-400 font-bold text-xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ${product?.salesPrice}
                </motion.span>
              )}
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <span className="text-xs text-gray-400">
                ⭐ {product?.rating?.rate || "4.5"}
              </span>
            </motion.div>
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 rounded-lg shadow-lg transition-all duration-300">
              Add to Cart
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ShoppingProductTile;
