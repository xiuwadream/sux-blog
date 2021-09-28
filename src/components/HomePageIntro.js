import React from 'react';
import clsx from 'clsx';
import styles from './HomePageIntro.module.css';
import avatarImg from '@site/static/img/avatar.jpg';

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
                            <p className={styles.text}>请容许我向你介绍一下我自己</p>
                            <p className={styles.text}>目前我就读于武汉大学，软件工程专业，目前大四</p>
                            <p className={styles.text}>本人对各类广义上的可视化技术有着浓厚的兴趣，包括但不限于WEB前端，桌面/移动的客户端以及在此之上的游戏图形技术</p>
                            <p className={styles.text}>当然，作为一名学生也还算广有涉猎，对WEB后端，云计算，NLP等方面也作过一定的了解，也有一定的兴趣</p>
                            <p className={styles.text}>在技术之外，生活中爱好各类策略类电子游戏（战棋，CCG，4X等）和各种我称之为“回合制球类”的运动（排球、乒乓球、羽毛球；网球还没怎么打过，希望有机会能试试），也欢迎各位同好与我交流</p>
                            <br/>
                            <p className={styles.text}>联系方式=[🐧:493088943]-[✉️:xsuwhu@foxmail.com]</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}