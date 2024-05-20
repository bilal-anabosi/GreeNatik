import React from "react";
import Order from "./Order"; 

const OrderList = () => {
    const orders = [
    {
    images: "img/product-img-1.jpg",
    ProductTitle: "Product 1",
    ProductSize: "400g",
    orderCode: "#ABC123",
    date: "2024-05-18",
    price: "$99.99",
    items: 3
    },
    {
    images: "img/product-img-1.jpg",
    ProductTitle: "Product 2",
    ProductSize: "Medium",
    orderCode: "#DEF456",
    date: "2024-05-19",
    price: "$79.99",
    items: 2
    },
    {
    images: "img/product-img-1.jpg",
    ProductTitle: "Product 3",
    ProductSize: "50g",
    orderCode: "#GHI789",
    date: "2024-05-20",
    price: "$59.99",
    items: 1
    }
];

return (
    <div>
        <section>
            <div className="container">
                <div className="row">
                <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
        <h2 className="mb-6">Your Orders</h2>
            <div className="table-responsive-xxl border-0">
                <table className="table mb-0 text-nowrap table-centered">
                    <thead className="bg-light">
                        <tr>
                        <th>&nbsp;</th>
                        <th>Product</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Amount</th>
                        <th />
                        </tr>
                    </thead>
                        <tbody>
                        {orders.map((order, index) => (
                        <Order
                            key={index}
                            images={order.images}
                            ProductTitle={order.ProductTitle}
                            ProductSize={order.ProductSize}
                            orderCode={order.orderCode}
                            date={order.date}
                            price={order.price}
                            items={order.items}
                        />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
</section>
</div>
);
};
export default OrderList;