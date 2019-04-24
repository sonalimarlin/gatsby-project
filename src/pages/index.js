import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <h1>Aliquip Non Seqitor</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
        </Layout>
    );
}

export default IndexPage;