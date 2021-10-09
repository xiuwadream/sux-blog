import React from 'react';
import clsx from 'clsx';
import styles from './HomePageIntro.module.css';
import avatarImg from '@site/static/img/docusaurus.png';
import HomeTag from '../components/HomeIntroTag'
import ReactLogo from '@site/static/img/logos/react.webp'

export default function HomepageFeatures() {
    return (
        <section className={styles.intros}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--4')}>
                        <div className={clsx(styles.introl)}>
                            <div>
                                <img
                                    className={styles.avatar}
                                    src={avatarImg}
                                />
                            </div>
                            <div>
                                <b>Su4X(苏宣)</b><br/>
                                <small className={styles.recent}>珞珈山下一少年，保研差点儿，求职中...</small>
                            </div>
                        </div>
                    </div>
                    <div className={clsx('col col--8')}>
                        <div>
                            <p className={styles.hello}>你好,</p>
                            <p className={styles.text}>在这里做个简单的自我介绍</p>
                            <p className={styles.text}>目前我就读于武汉大学，软件工程专业，目前大四</p>
                            <p className={styles.text}>本人对各类客户端开发感兴趣，包括但不限于WEB前端，
                            桌面/移动的客户端以及在此之上的游戏图形技术。
                            当然，作为一名学生也还算广有涉猎，对WEB后端，云计算，NLP等方面也作过一定的了解，也有一定的兴趣</p>
                            <p className={styles.text}>兴趣爱好方面，主要是电子游戏（以策略类为主），排/乒/羽球以及宅家看番</p>
                            <h3>技术栈？</h3>
                            <HomeTag icon={ReactLogo} title={'React'}>
                                限于了解，不是很深入底层。过了一遍官方文档，也看过hooks的用法，
                                又简单的看了看Redux、antd之类的周边生态,
                                但没写过什么正经的项目，相对比较完整的项目就是现在的博客了。
                            </HomeTag>
                            <br/>
                            <p className={styles.text}>联系方式=[🐧:493088943]-[✉️:xsuwhu@foxmail.com]</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}