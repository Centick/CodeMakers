<template>
    <!-- баннер -->
    <div class="section banner__section">
        <div class="container banner__container">
            <h1>CODE <br>MAKERS </h1>
            <img class="banner_img" src="../assets/img/leptop.png" alt="img">
        </div>
    </div>

    <!-- бегущая строка -->
    <div class="section">
        <MarqueeComponent/> 
    </div>
    

    <!-- немного о команде -->
    <div class="section about-us__section">
        <div class="container about-us__container">
            <div class="about-us_img-wrap">
                <img src="../assets/img/person/Iliya.png" alt="img">
            </div>
            <div class="about-us__main-wrap">
                <h2><span class="blue">_</span>Команда CodeMakers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, animi? Unde officiis mollitia voluptatum accusamus ratione laboriosam omnis numquam molestiae, at quam non, consectetur expedita totam quo voluptate neque ea.</p>
                <div class="about-us__result-wrap">
                    <div class="about-us__result-block">
                        <span>20<span class="blue">+</span></span>
                        <p>Совместных проектов</p>
                    </div>
                    <div class="about-us__result-block">
                        <span>10<span class="blue">+</span></span>
                        <p>Выйграных хакатонов</p>
                    </div>     
                    <div class="about-us__result-block">
                        <span>35<span class="blue">+</span></span>
                        <p>Сольных проектов</p>
                    </div>                
                </div>
                <div class="btn">Наша ссылка →</div>
            </div>
        </div>
    </div>

    <!-- наше резюме -->
    <ResumeComponentVue/>

    <!-- История команды -->
    <div class="section">
        <div class="container history__container">
            <h2><span class="blue">_</span>История CodeMakers</h2>
            <div class="history_main-wrap">

                <div class="history_text-wrap">
                    <div class="history_block">
                        <h4>Занятие Web-разработкой</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="history_chronology_block">1</div>
                    <div class="history_block">
                        <h4>Знакомство с ребятами</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="history_text-wrap">
                    <div class="history_block">
                        <h4>Изучение элементов</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="history_chronology_block">2</div>
                    <div class="history_block">
                        <h4>Первые соревнования</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="history_text-wrap">
                    <div class="history_block">
                        <h4>Пройгрышь на соревнованиях</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="history_chronology_block">3</div>
                    <div class="history_block">
                        <h4>Большая мативация</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="history_text-wrap">
                    <div class="history_block">
                        <h4>Окончание изучения базы</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="history_chronology_block">4</div>
                    <div class="history_block">
                        <h4>Предложение на 1-ый хакатон</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="history_text-wrap">
                    <div class="history_block">
                        <h4>Победа на хакатоне</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="history_chronology_block">5</div>
                    <div class="history_block">
                        <h4>Изучение фреймворков</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="history_text-wrap">
                    <div class="history_block">
                        <h4>Различные хакатоны</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="history_chronology_block">6</div>
                    <div class="history_block">
                        <h4>Предложения о работе</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="history_text-wrap">
                    <div class="history_block">
                        <span></span>
                    </div>
                    <div class="history_block"><h4>Это только начало...</h4></div>
                    <div class="history_block">
                        <span></span>
                    </div>
                </div>                
            </div>
        </div>
    </div>

    <!-- наши проекты -->
    <div class="section">
        <div class="container">
            <h2><span class="blue">_</span>Наши проекты</h2>
            <!-- тут илья сам сам { -->
                <br><br>
                <p>тут илюша чет-то сварганит...</p>
            <!-- } -->
        </div>
    </div>

    <!-- свяжитесь с нами -->
    <div class="section ">
        <div class="container connection__container">
            <h2><span class="blue">_</span>Свяжитесь с нами</h2>
            <div class="connection__main-wrap">
                <div>
                    <div class="icons_mail"></div>
                    <input class="connection__input" placeholder="Укажите свою почту...">
                </div>
                <a href="#" class="link">Отправить</a>
            </div>
            <div class="connection_pluses">
                <div class="connection_pluses_block">
                    <img src="../assets/img/icons/mail.png" alt="img">
                    <span>Быстро и <br> качественно</span>
                </div>
                <div class="connection_pluses_block">
                    <img src="../assets/img/icons/mail.png" alt="img">
                    <span>Уверены в <br> каждом теге</span>
                </div>
                <div class="connection_pluses_block">
                    <img src="../assets/img/icons/mail.png" alt="img">
                    <span>С лучшими<br> фреймворками</span>
                </div>
                <div class="connection_pluses_block">
                    <img src="../assets/img/icons/mail.png" alt="img">
                    <span>Отличные<br> web-разработчики</span>
                </div>
            </div>
        </div>
    </div>

    <div class=""></div>
</template>

<script setup >
    import MarqueeComponent from '@/components/MarqueeComponent.vue';
    import ResumeComponentVue from '@/components/ResumeComponent.vue';

</script>

<style> 
</style>