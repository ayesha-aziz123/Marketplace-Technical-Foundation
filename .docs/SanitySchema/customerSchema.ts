export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Shipping Address',
        type: 'string',
      },
      {
        name: 'orderHistory',
        title: 'Order History',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'order' }],
          },
        ],
      },
    ],
  };
  