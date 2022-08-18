const React = require('react');
const Layout = require('./Layout');

module.exports = function OrdersPage({ orders }) {
  return (
    <Layout>
      <h1>Заказы:</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Email</th>
              <th scope="col">Телефон</th>
              <th scope="col">Описание заказа</th>
              <th scope="col">Эскиз</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>+7(777)777-77-77</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, at.</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
