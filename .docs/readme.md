# E-Commerce Marketplace API Documentation

## Endpoints

### 1. **Fetch All Products**
- **Endpoint Name:** `/products`
- **Method:** `GET`
- **Description:** Fetch all available products from the marketplace. This will retrieve product details including name, price, stock availability, and product image.
- **Response Example:**
  ```json
  {
    "id": 1,
    "name": "Sofa Set",
    "price": 300,
    "stock": 15,
    "image": "https://example.com/sofa.jpg"
  }


2. Create a New Order

 - Endpoint Name: /orders
 - Method: POST
 - Description: Create a new order in the marketplace. This endpoint handles order creation by accepting customer information, product details, and payment status.
 - Request Body Example:

{
  "customer_id": "123",
  "products": [
    {
      "product_id": "1",
      "quantity": 2
    }
  ],
  "payment_status": "pending"
}

## Response Example:
{
  "order_id": "56789",
  "status": "Order Created",
  "message": "Your order has been successfully created."
}




## Track Order Status

 - Endpoint Name: /order-tracking/{order_id}
 - Method: GET
 - Description: This endpoint provides real-time updates for order status. It fetches shipment details via a third-party shipment tracking API, showing the current status of the order, tracking number, and expected delivery date.
 - Path Parameter:
 - order_id: The unique identifier of the order to track.


Response Example:
{
  "order_id": "12345",
  "shipment_status": "In Transit",
  "current_location": "New York, NY",
  "expected_delivery_date": "2025-01-20",
  "tracking_number": "ABCD1234EFGH",
  "carrier": "FedEx",
  "delivery_status": "On Track"
}


Response Fields:

 - order_id: Unique identifier of the order being tracked.
 - shipment_status: Current status of the shipment (e.g., "Shipped", "In Transit", "Delivered").
 - current_location: Current location of the shipment.
 - expected_delivery_date: Expected date for delivery.
 - tracking_number: Unique tracking number provided by the shipment carrier.
 - carrier: The carrier used for shipment (e.g., FedEx).
 - delivery_status: Current status of the delivery (e.g., "On Track", "Delayed").

## 4. Manage Product Inventory

Endpoint Name: /products
Method: POST
Description: Add a new product to the marketplace (Admin or Seller role required). Accepts product details such as name, price, description, stock quantity, etc.

Request Body Example:


{
  "name": "Office Chair",
  "price": 150,
  "description": "Comfortable ergonomic office chair",
  "stock": 50,
  "image": "https://example.com/chair.jpg"
}


### Authentication
To ensure secure interactions, authentication is required for certain endpoints. Please refer to the Authentication section below for guidance on obtaining and using authentication tokens.

 - Authentication Method:
 - Authentication Type: JWT Token
 - Obtaining the Token: After successful login or registration, a JWT token will be returned. Include this token in the Authorization header for any API request that requires authentication.
 

 
 ### Notes:

 - The API is designed to work with Sanity CMS for content management and Stripe for secure payment processing.
 - Shipment tracking is integrated with third-party services like ShipEngine to ensure real-time updates.
 - For any issues or queries regarding API usage, feel free to contact support.
