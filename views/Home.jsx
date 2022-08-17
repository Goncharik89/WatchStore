/* eslint-disable react/prop-types */
const React = require('react');
const Catalog = require('./Catalog');
const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>Hello!</h1>
      <Catalog />

    </Layout>
  );
};
