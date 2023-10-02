const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

exports.handler = async (event, context) => {
  const items = new Map([
    [1, { price: 7999, name: "ComfortWood Chair" }],
    [2, { price: 8999, name: "Aesthetic Chair" }],
    [3, { price: 11999, name: "Leather Cushion Chair" }],
    [4, { price: 14999, name: "Glass Coffe Table" }],
    [5, { price: 24999, name: "Elegant Oak Desk" }],
    [6, { price: 22000, name: "Sleek Modern Desk" }],
    [7, { price: 34999, name: "Cord Fabric 2 Seater Sofa" }],
    [8, { price: 44999, name: "Premium 2 Seater Sofa" }],
    [9, { price: 5499, name: "Classic Lamp" }],
    [10, { price: 7995, name: "Stylish Lamp" }],
    [11, { price: 115999, name: "Smart Fridge" }],
    [12, { price: 77999, name: "Stainless Steel Fridge" }],
    [13, { price: 8099, name: "Standard Microwave" }],
    [14, { price: 14999, name: "Flat Bed Microwave" }],
    [15, { price: 12000, name: "Stainless Steel Microwave" }],
    [16, { price: 4599, name: "Stainless Steel Toaster" }],
    [17, { price: 3299, name: "Standard Toaster" }],
    [18, { price: 2799, name: "Electric Kettle" }],
    [19, { price: 84999, name: "Double Bed" }],
    [20, { price: 99999, name: "Premium Queen Bed" }],
    [21, { price: 49999, name: "Standard Single Bed" }],
    [22, { price: 2999, name: "Bedding Pack" }],
    [23, { price: 999, name: "Silk Pillow" }],
    [24, { price: 1599, name: "3 Towel Set" }],
    [25, { price: 2399, name: "Towel Jumbo Pack" }],
    [26, { price: 12999, name: "Bathroom Shelf" }],
    [27, { price: 2999, name: "Hair Dryer" }],
    [28, { price: 4499, name: "Saloon Pro Hair Dryer" }],
    [29, { price: 2499, name: "Standard Iron" }],
    [30, { price: 24999, name: "1400 Spin Washing Machine" }],
    [31, { price: 21999, name: "1100 Spin Washing Machine" }],
    [32, { price: 1999, name: "Humidifer" }],
    [33, { price: 24900, name: "4K Ultra HD TV" }],
    [34, { price: 2999, name: "LED TV" }],
    [35, { price: 799, name: "Bin" }],
    [36, { price: 1799, name: "Standard Mop Set" }],
    [37, { price: 2199, name: "Mop Set Plus Set" }],
    [38, { price: 79999, name: "AutoCleaning Robot" }],
    [39, { price: 9999, name: "Vacuum Cleaner" }],
    [40, { price: 999, name: "Hangers Pack (5x)" }],
    [41, { price: 2500, name: "Shoe Rack" }],
    [42, { price: 499, name: "Plastic Garden Pot" }],
    [43, { price: 89999, name: "Outdoor Premium Furniture Set" }],
    [44, { price: 39999, name: "Outdoor Furniture Set" }],
    [45, { price: 13999, name: "Hanging Chair" }],
  ]);

  try {
    const requestBody = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: requestBody.items.map((item) => {
        const storeItem = items.get(item.id);
        return {
          price_data: {
            currency: "gbp",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.price,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.REACT_APP_CLIENT_URL}`,
      cancel_url: `${process.env.REACT_APP_CLIENT_URL}`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
    
  } catch (error) {
    console.error(error.message)
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
