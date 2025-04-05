import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import LogoSVG from '@site/static/img/docusaurus.png';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('', styles.heroBanner)}>
            <div className='container'>
                <img
                    src={useBaseUrl('/img/avatar.png')}
                    style={{ width: 280, borderRadius: '50%' }}
                />
                <Heading as='h1' className='hero__title'>
                    {siteConfig.title}
                </Heading>
                <p className='hero__subtitle'>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className='button button--secondary button--lg'
                        // to='/cv'
                    >
                        Xem CV của tôi
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description='Description will go into a meta tag in <head />'
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
