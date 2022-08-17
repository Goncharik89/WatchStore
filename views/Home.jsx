/* eslint-disable react/prop-types */
const React = require('react');
const About = require('./About');
const Catalog = require('./Catalog');
const Layout = require('./Layout');
const Order = require('./Order');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>Hello!</h1>
      <About />
      <Catalog />
      <Order />

    </Layout>
  );
};
