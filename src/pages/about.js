import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
        </Layout>
    );
}

export default AboutPage;