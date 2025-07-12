import { StarIcon } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useDispatch } from "react-redux";
import { setProductDetails } from "../../store/shop/products-slice";

function ProductDetailDialog({
  open,
  setopen,
  productDetail,
  handleAddToCart,
}) {
  const dispatch = useDispatch();
  function handleproductdetailsdialog() {
    setopen(false);
    dispatch(setProductDetails());
  }
  return (
    <Dialog open={open} onOpenChange={handleproductdetailsdialog}>
      <DialogContent className="bg-gray-800 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] grid grid-cols-2 gap-8 sm:p-12">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={productDetail?.image}
            alt={productDetail?.title}
            height={600}
            width={600}
            className="object-cover w-full aspect-square"
          />
        </div>
        <div>
          <div>
            <h1 className="font-extrabold text-3xl text-muted">
              {productDetail?.title}
            </h1>
            <p className="text-muted-foreground text-xl mt-3 mb-4">
              {productDetail?.description}
            </p>
          </div>
          <div className="flex items-center justify-between mb-2">
            <p
              className={`${
                productDetail?.salesPrice > 0 ? "line-through" : ""
              } text-muted text-2xl font-semibold`}
            >
              ${productDetail?.price}
            </p>
            {productDetail?.salesPrice > 0 ? (
              <p className="text-red-500 text-2xl font-semibold">
                {productDetail?.salesPrice}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarIcon className="h-5 w-5 fill-primary" />
              <StarIcon className="h-5 w-5 fill-primary" />
              <StarIcon className="h-5 w-5 fill-primary" />
              <StarIcon className="h-5 w-5 fill-primary" />
              <StarIcon className="h-5 w-5 fill-primary" />
            </div>
            <span className="text-muted-foreground">(4.5)</span>
          </div>
          <div className="mt-5 mb-5">
            <Button
              className="w-full cursor-pointer bg-blue-500"
              onClick={() => handleAddToCart(productDetail?._id)}
            >
              Add to Cart
            </Button>
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="font-bold text-xl mb-4 text-muted">Reviews</h2>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border ">
                  <AvatarFallback className="bg-gray-200">AK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-bold flex items-center text-purple-300">
                    Ashutosh Kumar
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border ">
                  <AvatarFallback className="bg-gray-200">AK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-bold flex items-center text-purple-300">
                    Ram Kumar
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border ">
                  <AvatarFallback className="bg-gray-200">AK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-bold flex items-center text-purple-300">
                    Ramesh Kumar
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border ">
                  <AvatarFallback className="bg-gray-200">AK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-bold flex items-center text-purple-300">
                    Shayam Kumar
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border ">
                  <AvatarFallback className="bg-gray-200">AK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-bold flex items-center text-purple-300">
                    Rabindra Kumar
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                    <StarIcon className="h-5 w-5 fill-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-4 mb-3 gap-2">
              <Input
                placeholder="Write your review"
                className="border-accent-foreground bg-cyan-200"
              />
              <Button className="cursor-pointer bg-purple-500 hover:bg-purple-600 mr-2">
                Comment
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default ProductDetailDialog;
