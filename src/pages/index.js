import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomePageIntro from '../components/HomePageIntro'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p>
          你好，
          <ruby>
          Explorer <rp>(</rp><rt>探索者</rt><rp>)</rp>
          </ruby>
        </p>
        <p>我是苏宣，欢迎来到我的小站</p>
        <p>目前只有我的个人简介和博客功能，未来会开发更多功能的</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary"
            to="#intro">
            了解更多 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`主页`}
      description="个人网站">
      <HomepageHeader />
      <main id="intro">
        <HomePageIntro/>
      </main>
    </Layout>
  );
}
