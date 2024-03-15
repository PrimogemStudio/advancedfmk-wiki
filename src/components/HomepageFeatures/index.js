import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import SilverWolfTop from '@site/static/img/silver-wolf.png';
import TrailblazerTop from '@site/static/img/trailblazer.png';
import HertaTop from '@site/static/img/herta.png';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="home.features.project.title"/>,
    Svg: SilverWolfTop,
    textline: <Translate id="home.features.project.textline"/>, 
    description: (<Translate id="home.features.project.desc"/>),
  },
  {
    title: <Translate id="home.features.modular.title"/>,
    Svg: TrailblazerTop,
    textline: <Translate id="home.features.modular.textline"/>, 
    description: (<Translate id="home.features.modular.desc"/>),
  },
  {
    title: <Translate id="home.features.mmdrenderer.title"/>,
    Svg: HertaTop,
    textline: <Translate id="home.features.mmdrenderer.textline"/>, 
    description: (
      <Translate
          id="home.features.mmdrenderer.desc"
          values={{
            mmdbase_link: (
              <Link href='https://github.com/PrimogemStudio/mmdbase'><Translate id="home.features.mmdrenderer.mmdbase"/></Link>
            ), 
            saba_native_link: (
              <Link href='https://github.com/PrimogemStudio/saba-native'><Translate id="home.features.mmdrenderer.saba_native"/></Link>
            )
          }}/>
    ),
  },
];

function Feature({Svg, title, textline, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h4" style={{color: 'grey', fontStyle: 'italic'}}>{textline}</Heading>
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
