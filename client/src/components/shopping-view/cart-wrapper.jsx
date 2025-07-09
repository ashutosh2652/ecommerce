import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import CartItemsContent from "./cart-items-content";

function CartWrapper({ cartItems }) {
  console.log("cartItems", cartItems.items);

  return (
    <SheetContent className="sm:max-w-md p-4">
      <SheetHeader>
        <SheetTitle className="text-white ">Your Cart</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        {cartItems &&
          cartItems.items &&
          cartItems.items.length > 0 &&
          cartItems.items.map((item) => <CartItemsContent cartItems={item} />)}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">$1000</span>
        </div>
      </div>
      <Button className="w-full mt-6 mb-5 bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer hover:from-blue-700 hover:to-purple-700">
        Checkout
      </Button>
    </SheetContent>
  );
}
export default CartWrapper;
