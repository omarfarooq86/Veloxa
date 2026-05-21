const fs = require('fs');
const pages = [
  { name: 'SEOServices', title: 'SEO Services', desc: 'Dominate search rankings with our data-driven SEO strategies.' },
  { name: 'WebDesign', title: 'Web Design', desc: 'Stunning, high-performance websites built for optimal user experience.' },
  { name: 'Creative', title: 'Creative', desc: 'Captivating branding and creative assets.' },
  { name: 'Marketing', title: 'Marketing', desc: 'Omnichannel marketing campaigns that generate high-quality leads.' },
  { name: 'Portfolio', title: 'Our Portfolio', desc: 'Check out our recent super impressive projects.' },
  { name: 'Pricing', title: 'Pricing Plans', desc: 'Transparent pricing for agencies of all sizes.' },
  { name: 'Blog', title: 'Insights & Blog', desc: 'The latest news, trends, and strategies in digital marketing.' }
];

pages.forEach(p => {
  const content = `import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';

const ${p.name}: React.FC = () => {
  useEffect(() => {
    document.title = '${p.title} | Veloxa';
  }, []);

  return (
    <div>
      <PageHeader 
        title="${p.title}" 
        description="${p.desc}" 
      />
      <section className="section container text-center">
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="mb-4">Experience the extraordinary.</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            We are meticulously crafting the content for this section to ensure it meets our rigorous standards of excellence. Check back soon for super impressive updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ${p.name};
`;
  fs.writeFileSync(`src/pages/${p.name}.tsx`, content);
});
console.log('Pages created.');
