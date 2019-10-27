import React from 'react';
import Layout from '../components/layout';

import Head from '../components/head';

const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact" />
            <h1>
                Contact Page
            </h1>
            <p> Celular num : 1123332312</p>
            <p> My twitter account: <a href='https://twitter.com/IgnacioB35' rel="noopener noreferrer"  target='_blank'>Go to Twitter!</a></p>
        </Layout>
    )
}

export default ContactPage;