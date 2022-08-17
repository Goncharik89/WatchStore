/* eslint-disable react/prop-types */
const React = require('react');
const About = require('./About');
const Catalog = require('./Catalog');
const Layout = require('./Layout');
const Order = require('./Order');
const Article = require('./Article');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>HEADER WILL BE HERE</h1>
      <Article />
      <About />
      <Catalog />
      <Order />

    </Layout>
  );
};

