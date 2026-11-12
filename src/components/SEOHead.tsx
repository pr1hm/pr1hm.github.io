import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  tags?: string[];
  schemaData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Pratham Solanki — Software Developer & Systems Engineer',
  description = 'Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering. Building resilient systems, distributed backends, and machine learning architectures.',
  canonicalUrl = 'https://prthm.xyz',
  type = 'website',
  publishedTime,
  tags,
  schemaData,
}) => {
  const fullTitle = title.includes('Pratham Solanki') ? title : `${title} — Pratham Solanki`;

  const defaultSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://prthm.xyz/#person',
      name: 'Pratham Solanki',
      jobTitle: 'Software Developer & Systems Engineer',
      email: 'mailto:ahoy@prthm.xyz',
      description: 'Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering.',
      url: 'https://prthm.xyz',
      knowsAbout: [
        'DevOps',
        'Cloud Engineering',
        'Kubernetes',
        'Docker',
        'AI/ML',
        'Linux Systems',
        'NanoHTTPD',
        'Distributed Systems'
      ],
      sameAs: [
        'https://github.com/pr1hm',
        'https://linkedin.com/in/pr1hm/'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://prthm.xyz/#website',
      name: 'Pratham Solanki',
      url: 'https://prthm.xyz',
      publisher: {
        '@id': 'https://prthm.xyz/#person'
      }
    }
  ];

  const finalSchema = schemaData ? (Array.isArray(schemaData) ? schemaData : [schemaData]) : defaultSchema;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Entity Signals */}
      <meta name="author" content="Pratham Solanki" />
      {tags && tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Pratham Solanki" />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {tags && tags.map((tag) => <meta property="article:tag" content={tag} key={tag} />)}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data JSON-LD */}
      {finalSchema.map((item, idx) => (
        <script key={`schema-${idx}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};
