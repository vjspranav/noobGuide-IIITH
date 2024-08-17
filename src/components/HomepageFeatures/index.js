import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Update these SVG imports with relevant illustrations for your guide
const VindhyaSvg = require('@site/static/img/undraw_docusaurus_mountain.svg').default;
const AdvisorSvg = require('@site/static/img/undraw_docusaurus_tree.svg').default;
const ResearchSvg = require('@site/static/img/undraw_docusaurus_react.svg').default;

const FeatureList = [
  {
    title: 'Balance Work and Fun at IIITH',
    Svg: VindhyaSvg,
    description: (
      <>
        Finding the right balance between academics and leisure is key to thriving at IIITH. Discover the best spots to relax, join exciting clubs, you can count on the information here!
      </>
    ),
  },
  
  {
    title: 'Decipher Advisor-Speak',
    Svg: AdvisorSvg,
    description: (
      <>
        Learning to understand your advisor can feel like decoding ancient hieroglyphs. Our guide turns their "suggestions" into actionable tasks, making your path clearer.
      </>
    ),
  },
  {
    title: 'Research Made Less Daunting',
    Svg: ResearchSvg,
    description: (
      <>
        Diving into research can be as thrilling as exploring uncharted territories. We'll help you navigate through dense jungles of academic papers and discover treasures of knowledge.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

