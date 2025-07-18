import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ShoppingOrderDetails from "./Order-Details";
function ShoppingOrders() {
  const [opendialogbox, setopendialogbox] = useState(false);
  return (
    <Card className="bg-white/75">
      <CardHeader>
        <CardTitle className="font-semibold text-lg">Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Order Id</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead>
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>12345</TableCell>
              <TableCell>2024/08/15</TableCell>
              <TableCell>In Progress</TableCell>
              <TableCell>$ 1000</TableCell>
              <TableCell>
                <Dialog open={opendialogbox} onOpenChange={setopendialogbox}>
                  <Button
                    className="cursor-pointer"
                    onClick={() => setopendialogbox(true)}
                  >
                    View Details
                  </Button>
                  <ShoppingOrderDetails />
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export default ShoppingOrders;
