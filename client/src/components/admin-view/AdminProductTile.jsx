import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({ product }) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="font-bold text-xl mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product.salesPrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              $ {product?.price}
            </span>
            {product.salesPrice > 0 ? (
              <span className="text-lg font-bold">${product?.salesPrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
export { AdminProductTile };
