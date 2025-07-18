import { Separator } from "../ui/separator";
import { DialogContent } from "../ui/dialog";
import CommonForm from "../common/form";
import { AdminOrderDetailformControl } from "../../config";
import { useState } from "react";
const initialFormData = {
  status: "",
};
function AdminOrderDetails() {
  const [formdata, setformdata] = useState(initialFormData);
  return (
    <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-pink-500 to-blue-600">
      <div className="grid gap-4">
        <div className="grid gap-2 mt-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-red-700">Order Id</p>
            <p className="font-semibold text-black/70">12345</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-red-700">Order Date</p>
            <p className="font-semibold text-black/70">17/07/2025</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-red-700">Order Price</p>
            <p className="font-semibold text-black/70">$500</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-red-700">Order Status</p>
            <p className="font-semibold text-black/70">In Proccess</p>
          </div>
        </div>
        <Separator className="bg-black/80" />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="text-lg">Order Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span>Product One</span>
                <span>$100</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className=" text-lg">Shipping Info</div>
            <div className="grid gap-0.5 ">
              <span>Name: John Due</span>
              <span>Address:</span>
              <span>City:</span>
              <span>Pincode:</span>
              <span>Phone:</span>
              <span>notes:</span>
            </div>
          </div>
          <div>
            <CommonForm
              formControls={AdminOrderDetailformControl}
              formData={formdata}
              setFormData={setformdata}
              buttonText={"Change Status"}
            />
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
export default AdminOrderDetails;
