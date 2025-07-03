import { Products } from "../../models/Products.models.js";
const fetchFilteredProducts = async (req, res) => {
  try {
    const fetchProduct = await Products.find({});
    console.log(fetchProduct);

    res.status(200).json({
      success: true,
      data: fetchProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured which fetching the filteredProducts",
    });
  }
};
export { fetchFilteredProducts };
