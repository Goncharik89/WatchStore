const React = require('react');
const Layout = require('./Layout');
const OrderItem = require('./OrderItem');

module.exports = function OrdersPage({ orders }) {
  return (
    <Layout>
      <h1>Заказы:</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Дата</th>
              <th scope="col">Имя</th>
              <th scope="col">Email</th>
              <th scope="col">Телефон</th>
              <th scope="col">Описание заказа</th>
              <th scope="col">Эскиз</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => <OrderItem key={order.id} order={order} />)}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
