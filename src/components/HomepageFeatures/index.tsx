import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
    {
        title: '💻 Công nghệ',
        imgSrc: '/img/program_language.png',
        description: (
            <>
                Chia sẻ kiến thức về React, NodeJS, NexjsJS, ExpressJS,
                ElectronJS, Dev tips và những xu hướng công nghệ mới nhất.
            </>
        ),
    },
    {
        title: '🗣️ Tiếng Anh',
        imgSrc: '/img/bg-english.png',
        description: (
            <>
                Phương pháp học tập hiệu quả, tài liệu tự học, kinh nghiệm giao
                tiếp và luyện thi chứng chỉ.
            </>
        ),
    },
    {
        title: '🎮 Giải trí',
        imgSrc: '/img/review-mv.png',
        description: (
            <>
                Review phim, game, sách hay và những câu chuyện thú vị trong
                cuộc sống.
            </>
        ),
    },
];

interface FeatureProps {
    title: string;
    description: React.ReactNode;
    imgSrc?: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, description }) => {
    return (
        <div className={clsx('col col--4')}>
            <div className='text--center'>
                {/* <Svg className={styles.featureSvg} role='img' /> */}
                <img src={useBaseUrl(imgSrc)} className={styles.featureSvg} />
            </div>
            <div className='text--center padding-horiz--md'>
                <Heading as='h3'>{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
