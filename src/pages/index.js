import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { Form } from '../components/form';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>

    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="" />
    <section className="wt-container wt-offset-top-48">
      <div className="wt-row wt-row_size_m">
        <h2 className="wt-h2 wt-col-12">
          Ktor Project Generator
        </h2>
      </div>

      <div className="wt-row wt-row_size_m wt-offset-top-8">
        <p className="wt-text-2 wt-text-2_hardness_hard wt-col-8">
        You can create a Ktor project in two simple steps. Enter your project name and click “Add Features” to select the features you need. You can also fine-tune the settings of your project.
        </p>
      </div>

      <div className="wt-row wt-row_size_m wt-offset-top-24">
        <div className="wt-col-7">
          <Form />
        </div>
      </div>

    </section>

  </Layout>
);

export default IndexPage;
