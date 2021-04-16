/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router'; // not listing explicitly in package.json to use gatsby's version

import imageUrl from '../images/preview.png';
import icon32 from '../images/icons/favicon-32x32.png';
import icon16 from '../images/icons/favicon-16x16.png';

const withLocation = Component => props => (
  <Location>
    {({ location }) => <Component location={location} {...props} />}
  </Location>
);

function SEO({ description, lang, meta, title, location }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            absoluteImagePathPrefix
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const url = site.siteMetadata.siteUrl;
  const absoluteImageUrl = site.siteMetadata.absoluteImagePathPrefix + imageUrl;

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: site.siteMetadata.siteUrl,
      name: site.siteMetadata.title
    },
    {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description: metaDescription,
      image: absoluteImageUrl
    }/*,
    {
      '@context': 'http://www.schema.org',
      '@type': 'BusinessEvent',
      url,
      name: site.siteMetadata.title,
      description: site.siteMetadata.description,
      image: absoluteImageUrl
    }*/
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        // uncomment to hide from Search Engines (crawling should be allowed) { name: `robots`, content: `noindex` },
        // General tags
        { name: `description`, content: metaDescription },
        { name: `image`, content: absoluteImageUrl },
        // Open Graph tags
        { property: `og:title`, content: title },
        { property: `og:image`, content: absoluteImageUrl },
        { property: `og:description`, content: metaDescription },
        { property: `og:site_name`, content: site.siteMetadata.title },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: url },

        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: site.siteMetadata.author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: metaDescription },
        { name: 'twitter:creator', content: site.siteMetadata.author },
        { name: 'twitter:image:src', content: absoluteImageUrl }
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default withLocation(SEO);

// this message means nothing - master
