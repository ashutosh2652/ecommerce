import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({
  AddressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setcurrentSelectedAddress,
}) {
  return (
    <Card
      className="bg-gray-400  min-w-[180px]"
      onClick={() => setcurrentSelectedAddress(AddressInfo)}
    >
      <CardContent className="grid gap-3">
        <Label>Address: {AddressInfo?.address}</Label>
        <Label>City: {AddressInfo?.city}</Label>
        <Label>State: {AddressInfo?.state}</Label>
        <Label>Pincode: {AddressInfo?.pincode}</Label>
        <Label>Phone: +91{AddressInfo?.phone}</Label>
        <Label>Notes: {AddressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button
          className="cursor-pointer"
          onClick={(event) => handleEditAddress(event, AddressInfo)}
        >
          Edit
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => handleDeleteAddress(AddressInfo?._id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
export default AddressCard;
