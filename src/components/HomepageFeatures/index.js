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
    title: <Translate id="home.features.project.title">一个全新的项目</Translate>,
    Svg: SilverWolfTop,
    textline: <Translate id="home.features.project.textline">笑死, 这里还有一个新项目</Translate>, 
    description: (
      <Translate id="home.features.project.desc">Advanced Framework 起始于 2023 年 12 月 7 日, 在 2024 年 1 月 7 日从 Advanced UI 更名 Advanced Framework, 主要灵感来自于在 2023 年 8 月 9 日停更的 Genshin UI</Translate>
    ),
  },
  {
    title: <Translate id="home.features.modular.title">模块化</Translate>,
    Svg: TrailblazerTop,
    textline: <Translate id="home.features.modular.textline">模块, 就是用来打碎的</Translate>, 
    description: (
      <Translate id="home.features.modular.desc">为了分离带有本地库的 MMD 渲染器, 整个 Mod 被设计成多模块, 可以独立加载或嵌入到其他 Mod 的内部</Translate>
    ),
  },
  {
    title: <Translate id="home.features.mmdrenderer.title">新 MMD 渲染器实现</Translate>,
    Svg: HertaTop,
    textline: <Translate id="home.features.mmdrenderer.textline">渲染器更新了, 快来测</Translate>, 
    description: (
      <Translate
          id="home.features.mmdrenderer.desc"
          values={{
            mmdbase_link: (
              <Link href='https://github.com/PrimogemStudio/mmdbase'>
                <Translate id="home.features.mmdrenderer.mmdbase">
                {'mmdbase (基于 JVM)'}
              </Translate></Link>
            ), 
            saba_native_link: (
              <Link href='https://github.com/PrimogemStudio/saba-native'>
                <Translate id="home.features.mmdrenderer.saba_native">
              {'saba-native (基于 C++)'}
            </Translate></Link>
            )
          }}>
          {'MMD 渲染器的实现已从 {mmdbase_link} 迁移到 {saba_native_link}, 没有使用KAIMyEntity的实现, 由于没有直接操作 OpenGL 缓存提交数据, 增强了对 Iris 的兼容性。但目前仍然会引起性能和渲染问题'}
        </Translate>
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
