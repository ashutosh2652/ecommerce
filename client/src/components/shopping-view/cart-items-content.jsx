import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";

function CartItemsContent({ cartItems }) {
  function handlecartItemDelete(getcartItem) {}
  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItems.image}
        alt={cartItems.title}
        className="h-20 w-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItems.title}</h3>
        <div className="flex items-center mt-1 gap-4">
          <Button
            variant="outline"
            size="icon"
            className="text-black rounded-s-full border-muted cursor-pointer"
          >
            <Minus />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="font-semibold text-lg">{cartItems.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="text-black  rounded-e-full border-muted cursor-pointer"
          >
            <Plus />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          $
          {(
            (cartItems.salesPrice > 0
              ? cartItems.salesPrice
              : cartItems.price) * cartItems.quantity
          ).toFixed(2)}
        </p>
        <Trash
          className="cursor-pointer"
          size={20}
          onClick={() => handlecartItemDelete(cartItems)}
        />
      </div>
    </div>
  );
}
export default CartItemsContent;
