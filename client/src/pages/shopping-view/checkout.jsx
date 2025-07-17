import { useSelector } from "react-redux";
import CheckOutImage from "../../assets/accountImage.jpg";
import Address from "../../components/shopping-view/address";
import CartItemsContent from "../../components/shopping-view/cart-items-content";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.ShoppingCart);
  const cartitemstotalprice =
    (cartItems &&
      cartItems.items &&
      cartItems.items.length > 0 &&
      cartItems.items
        .reduce(
          (sum, item) =>
            sum +
            (item.salesPrice > 0 ? item.salesPrice : item.price) *
              item.quantity,
          0
        )
        .toFixed(2)) ||
    0.0;
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full h-[300px]">
        <img
          src={CheckOutImage}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        <div className="w-full">
          <Address />
        </div>
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle className="font-bold text-xl text-muted-foreground">
              Proceed With Following Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-8 space-y-4">
              {cartItems &&
                cartItems.items &&
                cartItems.items.length > 0 &&
                cartItems.items.map((item) => (
                  <CartItemsContent cartItems={item} key={item.productId} />
                ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between ">
                <span className="font-bold">Total</span>
                <span className="font-bold">$ {cartitemstotalprice}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              disabled={cartitemstotalprice <= 0}
              className="w-full mt-6 mb-5 bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer hover:from-blue-700 hover:to-purple-700"
            >
              Pay With PayPal
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export default ShoppingCheckout;
