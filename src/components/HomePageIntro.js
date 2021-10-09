import React from 'react';
import clsx from 'clsx';
import styles from './HomePageIntro.module.css';
import avatarImg from '@site/static/img/docusaurus.png';
import HomeTag from '../components/HomeIntroTag'
import ReactLogo from '@site/static/img/logos/react.webp'
import VueLogo from '@site/static/img/logos/vue.jpg'
import SpringLogo from '@site/static/img/logos/spring.jpg'
import DotnetLogo from '@site/static/img/logos/dotnet.jpg'
import PythonLogo from '@site/static/img/logos/py.jpg'


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
                            <HomeTag icon={VueLogo} title={'Vue.js'}>
                                用的还算多，最近3.x版本的更新也有在关注，周边的router、Vuex也都有所使用。
                                底层到也看过一些，但理解的不是很透彻吧。
                                项目的话写的还算多，比如简易视频聊天，音乐播放器什么的，还有我逝去的上一个博客。
                            </HomeTag>
                            <HomeTag icon={ReactLogo} title={'React'}>
                                限于能用，不是很深入底层。过了一遍官方文档，也知道一点hooks，
                                又简单的用了用Redux、antd之类的周边生态,
                                但没写过什么正经的项目，相对比较完整的项目就是现在的博客了。
                            </HomeTag>
                            <HomeTag icon={SpringLogo} title={'Java/Spring'}>
                                Java是有选过课，主要基本语法还有一些额外的库（Spring等），
                                用Spring Boot搭过简单的后端，比如小型管理系统，个人博客什么的。
                            </HomeTag>
                            <HomeTag icon={DotnetLogo} title={'.Net'}>
                                专业选修课选过C#，相比Java更喜欢C#的语法。日常会用Winform写些GUI来完成大作业。
                                看过一点asp.net core，然后跟着官方教程，使用Blazor（.net上的前端框架）写过一个披萨店的小项目。
                            </HomeTag>
                            <HomeTag icon={PythonLogo} title={'Python'}>
                                快速上手过一点，主要经历就是写简易的爬虫，还有就是暑期实习做过NLP相关内容，
                                使用RASA框架搭建了一个基于知识图谱的问答系统。
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