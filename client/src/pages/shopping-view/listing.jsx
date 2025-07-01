import ProductFilter from "../../components/shopping-view/ProductFilter";

function ShoppingListing() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 p-4 sm:p-6">
      <ProductFilter />
    </div>
  );
}
export default ShoppingListing;
