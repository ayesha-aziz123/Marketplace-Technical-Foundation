export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "stock",
      title: "Stock Availability",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Sofas", "Office Chairs", "Headphones", "Desks"], // Customize categories as per your need
      },
    },
    { name: "rating", type: "number", title: "Rating" },
    {
      name: "rating_counts",
      type: "number",
      title: "Rating Count",
      description: "Number of ratings",
    },
    {
      name: "seller",
      title: "Seller",
      type: "reference",
      to: [{ type: "user" }],
    },
  ],
};
