const React = require('react');

module.exports = function OrderItem({ order }) {
  return (
    <tr>
      <th scope="row">{order.id}</th>
      <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(order.createdAt)}</td>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.phone}</td>
      <td>{order.description}</td>
      <td><img src={`/images/${order.pic}`} alt="pic" style={{ width: 300 }} /></td>
      <td><button type="button" id={order.id}>Удалить</button></td>
    </tr>
  );
};
