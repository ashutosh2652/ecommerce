import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../components/ui/sheet";
import CommonForm from "../../components/common/form";
import { addProductFormElements } from "../../config";
import ProductImageUpload from "../../components/admin-view/Image-Upload";
import {
  addNewProducts,
  fetchAllProducts,
} from "../../store/admin/products-slice";
import { toast } from "sonner";
import { AdminProductTile } from "../../components/admin-view/AdminProductTile";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salesPrice: "",
  totalstock: "",
};
function AdminProducts() {
  const [openCreateProductDialog, setopenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadImageUrl, setuploadImageUrl] = useState("");
  const [ImageLoading, setImageLoading] = useState(false);
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.ProductsSlice);
  function onSubmit(event) {
    event.preventDefault();
    dispatch(addNewProducts({ ...formData, image: uploadImageUrl }))
      .then((data) => {
        console.log("Data!!", data);
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          setImageFile(null);
          setFormData(initialFormData);
          setopenCreateProductDialog(false);
          toast.success("Product Added Successfully");
        } else {
          toast.error("Failed to add the Product");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to add the Product");
      });
  }
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <>
      <div className="w-full flex justify-end text-white">
        <Button
          className="mb-5 cursor-pointer text-background bg-gradient-to-r from-pink-500 to-red-400 transform-gpu transition-transform hover:scale-110 duration-300 hover:scale-z-105"
          onClick={() => setopenCreateProductDialog(true)}
        >
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols:3 lg:grid-cols-4">
        {productList &&
          productList.length > 0 &&
          productList.map((Products) => (
            <AdminProductTile product={Products} />
          ))}
      </div>
      <Sheet
        open={openCreateProductDialog}
        onOpenChange={setopenCreateProductDialog}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              Add New Product
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadImageUrl={uploadImageUrl}
            setuploadImageUrl={setuploadImageUrl}
            setImageLoading={setImageLoading}
            ImageLoading={ImageLoading}
          />
          <div className="py-6 px-6">
            <CommonForm
              formControls={addProductFormElements}
              onSubmit={onSubmit}
              buttonText="Add Product"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
export default AdminProducts;
