<template>
    <!-- баннер -->
    <span ref="homeAnch" class="anchor"></span>
    <div class="section banner__section">
        <div class="container banner__container">
            <h1 class="banner__title" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">CODEMAKERS</h1>
            <span class="banner__subtitle" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">Создаём сайты, которые вдохновляют</span>
            <img class="banner_img" src="../assets/img/2.png" alt="img">
        </div>
    </div>

    <!-- бегущая строка -->
    <div class="section marquee__section">
        <MarqueeComponent/> 
    </div>
    

    <!-- немного о команде -->
    <span ref="aboutAnch" class="anchor"></span>
    <div class="section about-us__section">
        <div class="container about-us__container">
            <div class="about-us_img-wrap" data-aos="fade-right">
                <img src="../assets/img/person/comanda2.jpg" alt="img">
            </div>
            <div class="about-us__main-wrap">
                <svg class="about-us__main-wrap__gear about-us__main-wrap__gear-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5576 2.25C10.8544 2.25 11.1234 2.42509 11.2435 2.69656L11.6859 3.69656C11.9052 4.1924 11.5422 4.75 11 4.75L9 4.75C8.47694 4.75 8.11452 4.22806 8.29727 3.73796L8.67016 2.73796C8.77957 2.44455 9.05975 2.25 9.37289 2.25H10.5576Z" fill="#0069ff"></path> <path d="M9.44253 17.75C9.14568 17.75 8.87676 17.5749 8.75666 17.3034L8.31424 16.3034C8.09488 15.8076 8.45793 15.25 9.00012 15.25H11.0001C11.5232 15.25 11.8856 15.7719 11.7029 16.262L11.33 17.262C11.2206 17.5554 10.9404 17.75 10.6272 17.75H9.44253Z" fill="#0069ff"></path> <path d="M17.7501 10.5575C17.7501 10.8544 17.575 11.1233 17.3035 11.2434L16.3035 11.6858C15.8077 11.9052 15.2501 11.5421 15.2501 10.9999V8.99994C15.2501 8.47688 15.772 8.11445 16.2621 8.29721L17.2621 8.6701C17.5555 8.77951 17.7501 9.05969 17.7501 9.37283V10.5575Z" fill="#0069ff"></path> <path d="M2.25006 9.44247C2.25006 9.14562 2.42515 8.8767 2.69662 8.7566L3.69662 8.31418C4.19246 8.09482 4.75006 8.45786 4.75006 9.00006V11.0001C4.75006 11.5231 4.22812 11.8855 3.73802 11.7028L2.73802 11.3299C2.44461 11.2205 2.25006 10.9403 2.25006 10.6272V9.44247Z" fill="#0069ff"></path> <path d="M15.8744 4.91417C16.0843 5.12408 16.1506 5.43804 16.0436 5.71492L15.6493 6.73486C15.4538 7.24059 14.8028 7.37816 14.4194 6.99477L13.0052 5.58056C12.6354 5.21069 12.7482 4.58535 13.2239 4.36803L14.1947 3.92459C14.4796 3.79449 14.8152 3.85504 15.0367 4.07646L15.8744 4.91417Z" fill="#0069ff"></path> <path d="M4.12575 15.0858C3.91584 14.8759 3.84949 14.562 3.95653 14.2851L4.3508 13.2651C4.5463 12.7594 5.19729 12.6218 5.58068 13.0052L6.9949 14.4194C7.36476 14.7893 7.25196 15.4146 6.77618 15.632L5.8054 16.0754C5.52057 16.2055 5.18488 16.145 4.96346 15.9235L4.12575 15.0858Z" fill="#0069ff"></path> <path d="M15.086 15.8743C14.876 16.0842 14.5621 16.1505 14.2852 16.0435L13.2653 15.6492C12.7595 15.4537 12.622 14.8027 13.0054 14.4193L14.4196 13.0051C14.7894 12.6352 15.4148 12.748 15.6321 13.2238L16.0755 14.1946C16.2056 14.4794 16.1451 14.8151 15.9237 15.0365L15.086 15.8743Z" fill="#0069ff"></path> <path d="M4.91417 4.12575C5.12408 3.91584 5.43804 3.84949 5.71492 3.95653L6.73486 4.3508C7.24059 4.5463 7.37816 5.19729 6.99477 5.58068L5.58056 6.9949C5.21069 7.36476 4.58535 7.25196 4.36803 6.77618L3.92459 5.8054C3.79449 5.52057 3.85504 5.18488 4.07646 4.96346L4.91417 4.12575Z" fill="#0069ff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58058 14.4194C6.74366 15.5825 8.32182 16.25 10 16.25C11.6782 16.25 13.2563 15.5825 14.4194 14.4194C15.5825 13.2563 16.25 11.6782 16.25 10C16.25 8.32182 15.5825 6.74366 14.4194 5.58058C13.2563 4.4175 11.6782 3.75 10 3.75C8.32182 3.75 6.74366 4.4175 5.58058 5.58058C4.4175 6.74366 3.75 8.32182 3.75 10C3.75 11.6782 4.4175 13.2563 5.58058 14.4194ZM11.2374 11.2374C10.9099 11.565 10.4724 11.75 10 11.75C9.52756 11.75 9.09009 11.565 8.76256 11.2374C8.43503 10.9099 8.25 10.4724 8.25 10C8.25 9.52756 8.43503 9.09009 8.76256 8.76256C9.09009 8.43503 9.52756 8.25 10 8.25C10.4724 8.25 10.9099 8.43503 11.2374 8.76256C11.565 9.09009 11.75 9.52756 11.75 10C11.75 10.4724 11.565 10.9099 11.2374 11.2374Z" fill="#0069ff"></path> </g></svg>
                <svg class="about-us__main-wrap__gear about-us__main-wrap__gear-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5576 2.25C10.8544 2.25 11.1234 2.42509 11.2435 2.69656L11.6859 3.69656C11.9052 4.1924 11.5422 4.75 11 4.75L9 4.75C8.47694 4.75 8.11452 4.22806 8.29727 3.73796L8.67016 2.73796C8.77957 2.44455 9.05975 2.25 9.37289 2.25H10.5576Z" fill="#0069ff"></path> <path d="M9.44253 17.75C9.14568 17.75 8.87676 17.5749 8.75666 17.3034L8.31424 16.3034C8.09488 15.8076 8.45793 15.25 9.00012 15.25H11.0001C11.5232 15.25 11.8856 15.7719 11.7029 16.262L11.33 17.262C11.2206 17.5554 10.9404 17.75 10.6272 17.75H9.44253Z" fill="#0069ff"></path> <path d="M17.7501 10.5575C17.7501 10.8544 17.575 11.1233 17.3035 11.2434L16.3035 11.6858C15.8077 11.9052 15.2501 11.5421 15.2501 10.9999V8.99994C15.2501 8.47688 15.772 8.11445 16.2621 8.29721L17.2621 8.6701C17.5555 8.77951 17.7501 9.05969 17.7501 9.37283V10.5575Z" fill="#0069ff"></path> <path d="M2.25006 9.44247C2.25006 9.14562 2.42515 8.8767 2.69662 8.7566L3.69662 8.31418C4.19246 8.09482 4.75006 8.45786 4.75006 9.00006V11.0001C4.75006 11.5231 4.22812 11.8855 3.73802 11.7028L2.73802 11.3299C2.44461 11.2205 2.25006 10.9403 2.25006 10.6272V9.44247Z" fill="#0069ff"></path> <path d="M15.8744 4.91417C16.0843 5.12408 16.1506 5.43804 16.0436 5.71492L15.6493 6.73486C15.4538 7.24059 14.8028 7.37816 14.4194 6.99477L13.0052 5.58056C12.6354 5.21069 12.7482 4.58535 13.2239 4.36803L14.1947 3.92459C14.4796 3.79449 14.8152 3.85504 15.0367 4.07646L15.8744 4.91417Z" fill="#0069ff"></path> <path d="M4.12575 15.0858C3.91584 14.8759 3.84949 14.562 3.95653 14.2851L4.3508 13.2651C4.5463 12.7594 5.19729 12.6218 5.58068 13.0052L6.9949 14.4194C7.36476 14.7893 7.25196 15.4146 6.77618 15.632L5.8054 16.0754C5.52057 16.2055 5.18488 16.145 4.96346 15.9235L4.12575 15.0858Z" fill="#0069ff"></path> <path d="M15.086 15.8743C14.876 16.0842 14.5621 16.1505 14.2852 16.0435L13.2653 15.6492C12.7595 15.4537 12.622 14.8027 13.0054 14.4193L14.4196 13.0051C14.7894 12.6352 15.4148 12.748 15.6321 13.2238L16.0755 14.1946C16.2056 14.4794 16.1451 14.8151 15.9237 15.0365L15.086 15.8743Z" fill="#0069ff"></path> <path d="M4.91417 4.12575C5.12408 3.91584 5.43804 3.84949 5.71492 3.95653L6.73486 4.3508C7.24059 4.5463 7.37816 5.19729 6.99477 5.58068L5.58056 6.9949C5.21069 7.36476 4.58535 7.25196 4.36803 6.77618L3.92459 5.8054C3.79449 5.52057 3.85504 5.18488 4.07646 4.96346L4.91417 4.12575Z" fill="#0069ff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58058 14.4194C6.74366 15.5825 8.32182 16.25 10 16.25C11.6782 16.25 13.2563 15.5825 14.4194 14.4194C15.5825 13.2563 16.25 11.6782 16.25 10C16.25 8.32182 15.5825 6.74366 14.4194 5.58058C13.2563 4.4175 11.6782 3.75 10 3.75C8.32182 3.75 6.74366 4.4175 5.58058 5.58058C4.4175 6.74366 3.75 8.32182 3.75 10C3.75 11.6782 4.4175 13.2563 5.58058 14.4194ZM11.2374 11.2374C10.9099 11.565 10.4724 11.75 10 11.75C9.52756 11.75 9.09009 11.565 8.76256 11.2374C8.43503 10.9099 8.25 10.4724 8.25 10C8.25 9.52756 8.43503 9.09009 8.76256 8.76256C9.09009 8.43503 9.52756 8.25 10 8.25C10.4724 8.25 10.9099 8.43503 11.2374 8.76256C11.565 9.09009 11.75 9.52756 11.75 10C11.75 10.4724 11.565 10.9099 11.2374 11.2374Z" fill="#0069ff"></path> </g></svg>
                <h2 data-aos="fade-left"><span class="blue">_</span>Команда CodeMakers</h2>
                <p data-aos="fade-left">Мы - молодые и амбициозные веб-разработчики из Центра цифрового образования детей "IT-Куб" города Липецк. Увлечённые современными технологиями, учимся и активно осваиваем современные веб-технологии, превращая знания в реальные проекты. Участие в конкурсах, чемпионатах и хакатонах помогает нам расти, набирать опыт и реализовывать свои идеи.              
                <br><br>
                Наша цель - научиться создавать качественные и инновационные веб-решения, превращая идеи в эффективные цифровые продукты. Мы уверены, что будущее - за технологиями, и с каждым проектом стремимся быть на шаг впереди!                
                </p>
                <div data-aos="fade-up" class="about-us__result-wrap">
                    <div class="about-us__result-block">
                        <span>10<span class="blue">+</span></span>
                        <p>Совместных проектов</p>
                    </div>
                    <div class="about-us__result-block">
                        <span>5<span class="blue">+</span></span>
                        <p>Выйграных хакатонов</p>
                    </div>     
                    <div class="about-us__result-block">
                        <span>35<span class="blue">+</span></span>
                        <p>Сольных проектов</p>
                    </div>                
                </div>
                <a target="_blank" data-aos="fade-up" class="btn" href="https://vk.com/jun48?from=search">Группа Вконтакте →</a>
            </div>
        </div>
    </div>

    <!-- наше резюме -->
    <span ref="resumeAnch" class="anchor"></span>
    <ResumeComponent/>

    <!-- История команды -->
    <span ref="historyAnch" class="anchor"></span>
    <div class="section">
        <div class="container history__container">
            <h2><span class="blue">_</span>История CodeMakers</h2>
            <div class="history_main-wrap">

                <div class="history_text-wrap">
                    <div class="history_block history_block--h4" data-aos="fade-up">
                        <h4>Начало</h4>
                        <!-- <p>Все мы примерно в одно время стали осваивать эту компетенцию.</p> -->
                    </div>
                    <div class="history_chronology_block">
                        1
                        <div class="points"></div>
                    </div>
                    <div class="history_block history_block--p" data-aos="fade-up">
                        <!-- <h4>Знакомство друг с другом</h4> -->
                        <p>В сентябре 2022 года мы впервые пришли в веб-разработку, записавшись на направление "Веб-технологии" в Центр цифрового образования детей "IT-Куб" города Липецка. Каждый из нас уже имел опыт в программировании, но по другим компетенциям: Python, C++б С#, Java. Но нас заинтересовал веб и мы захотели начать в нём развиваться.</p>
                    </div>
                </div>

                <div class="history_text-wrap">
                    <div class="history_block history_block--h4" data-aos="fade-up">
                        <h4>Изучение базовых основ</h4>
                        <!-- <p>Нами постигаются наши первые html теги</p> -->
                    </div>
                    <div class="history_chronology_block">
                        2
                        <div class="points"></div>
                    </div>
                    <div class="history_block history_block--p" data-aos="fade-up">
                        <!-- <h4>Первые соревнования</h4> -->
                        <p>Первый год мы изучали HTML, CSS, JavaScript, MySQL и PHP, параллельно закрепляя полученные знания итоговыми проектами по каждому блоку.</p>
                    </div>
                </div>

                <div class="history_text-wrap">
                    <div class="history_block history_block--h4" data-aos="fade-up">
                        <h4>Закрепление знаний</h4>
                        <!-- <p>По началу далеко не всегда мы брали верх</p> -->
                    </div>
                    <div class="history_chronology_block">
                        3
                        <div class="points"></div>
                    </div>
                    <div class="history_block history_block--p" data-aos="fade-up">
                        <!-- <h4>Большая мотивация</h4> -->
                        <p>Изучив основы веб-разработки мы приступили к закреплению знаний на практике. Весь второй год обучения мы старались принмиать максимальное участие в региональный и всероссийских конкурсах, таких как: Нам с IT по пути, Первому разработчику приготовиться, олимпиада Созвезжие, Большой фестиваль, чемпионат Профессионалы. Становилось очевидно, что следует выходить на новый уровень...</p>
                    </div>
                </div>

                <div class="history_text-wrap">
                    <div class="history_block  history_block--h4" data-aos="fade-up">
                        <h4>Хакатоны</h4>
                        <!-- <p>И вот мы готовы к серьёзным и большим проектам</p> -->
                    </div>
                    <div class="history_chronology_block">
                        4
                        <div class="points"></div>
                    </div>
                    <div class="history_block history_block--p" data-aos="fade-up">
                        <!-- <h4>Поездка на 1-ый хакатон</h4> -->
                        <p>Данный вид мероприятий как ни какой другой позволяет своим участникам повышать уровень знаний и навыков в короткие сроки. Благодаря возможностям, которые нам предоставил Центр цифрового образования детей "IT-Куб" мы стали ездить по стране принимая участия в хакатонах Всероссийского уровня. Томск, Калуга, Ижевск, Нижний Новогород, Владивосток, мы старались участвовать и побеждать.</p>
                    </div>
                </div>

                <div class="history_text-wrap ">
                    <div class="history_block history_block--h4" data-aos="fade-up">
                        <h4>Коммерческие проекты</h4>
                        <!-- <p>Наше первое первое место!</p> -->
                    </div>
                    <div class="history_chronology_block">
                        5
                        <div class="points"></div>
                    </div>
                    <div class="history_block history_block--p" data-aos="fade-up">
                        <!-- <h4>Изучение фреймворков</h4> -->
                        <p>Как подготовиться к профориентации? Конечно же принимать участие в разработке настоящих проектов, работая с государственными и частными компаниями. Многие из нас стараются находить сторонние проекты и реализовывать частичный и полный функционал для заказчиков. Некоторые из наших работ, созданных в ходе участия в хакатонах имеют историю продолжения. Мы дорабатывали их и отдавали заказчикам кейса.</p>
                    </div>
                </div>
                
                <div class="history_text-wrap history_text-wrap--typed">
                    <div class="history_block">
                        <span></span>
                    </div>
                    <div class="history_block typed_parent"><h4 id="typed_1">Мы продолжаем развиваться...</h4></div>
                    <div class="history_block">
                        <span></span>
                    </div>
                </div>                
            </div>
        </div>
    </div>

    <!-- наши проекты -->
    <span ref="projectsAnch" class="anchor"></span>
    <div class="section">
        <div class="container project__container">
            <h2><span class="blue">_</span>Наши проекты</h2>
            <div class="choosing-person_wrap">
                <span class="person-cursor" :style="{ width: `${personCursor.width}px`, left: `${personCursor.left}px` }"></span>
                <span data-author="utyatskiy" @click="setPersonCursor" :ref="setAutoClickPerson" class="person-btn">Утяцкий&nbsp;В</span>
                <span data-author="fedosenko" @click="setPersonCursor" class="person-btn">Федосенко&nbsp;И</span>
                <span data-author="chernykh" @click="setPersonCursor" class="person-btn">Черных&nbsp;В</span>
                <span data-author="all" @click="setPersonCursor" class="person-btn">Все</span>
            </div>
            <div class="project__main_wrap">
                <a target="_blank" :href="project.link" class="project__main_block" v-for="project in current_projects">
                    <img :src="`/img/projects/${project.author}/${project.img}`" :key="project.id" :alt="project.title">
                    <h5>{{ project.title }}</h5>
                    <div class="project__skills">
                        <div class="project__skill" v-for="skill in project.skills">{{ skill }}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="container video__container">
            <h2 class="video__title"><span class="blue">_</span>Наши видеоролики</h2>
            <div class="video__main_wrap">
                <div @click="openVideoModal(video)" class="video__main_block" v-for="video in videos">
                    <img :src="`/img/videos/${video.img}`" :key="video.id" :alt="video.title">
                    <h5>{{ video.title }}</h5>
                </div>
            </div>
        </div>
    </div>

    <!-- свяжитесь с нами -->
    <span ref="contactsAnch" class="anchor"></span>
    <div class="section">
        <div class="container connection__container">
            <h2><span class="blue">_</span>Свяжитесь с нами</h2>
            <div class="connection__main-wrap">
                <div>
                    <div class="icons_mail"></div>
                    <input v-model="email" class="connection__input" placeholder="Укажите свою почту">
                </div>
                <a @click.prevent="sendEmail()" href="#" class="link">Отправить</a>
            </div>
            <span v-show="error" :style="`text-align: center; font-size: 20px; color: ${message_color}`">{{ error }}</span>
            <div class="connection_pluses">
                <div class="connection_pluses_block">
                    <img src="@/assets/img/icons/mail.png" alt="img">
                    <span>Быстро <br> ответим</span>
                </div>
                <div class="connection_pluses_block">
                    <img src="@/assets/img/icons/tag.png" alt="img">
                    <span>Уверены в <br> каждом теге</span>
                </div>
                <div class="connection_pluses_block">
                    <img src="@/assets/img/icons/tech.png" alt="img">
                    <span>Используем лучшие<br> технологии</span>
                </div>
                <div class="connection_pluses_block">
                    <img src="@/assets/img/icons/web.png" alt="img">
                    <span>Качественные<br> продукты</span>
                </div>
            </div>
        </div>
    </div>
    <AccordionComponent />
    <div class="section">
        <div class="container footer__container">
            <h2 class="footer_title">Рады знакомству!</h2>
            <p class="footer_text">Мы ценим каждую возможность общения, ведь новые знакомства и совместные проекты вдохновляют нас двигаться вперёд! Если у вас есть интересный проект, предложение о сотрудничестве или просто желание пообщаться, пишите нам! Мы будем рады обменяться идеями и создать что-то по-настоящему классное вместе.</p>
        </div>
    </div>

    <VideoComponent
        :current_video="current_video"
        v-if="video_modal_opened"
        @close="closeVideoModal"
    />
</template>

<script setup lang="ts">
    import MarqueeComponent from '@/components/MarqueeComponent.vue';
    import AccordionComponent from '@/components/AccordionComponent.vue';
    import ResumeComponent from '@/components/ResumeComponent.vue';
    import VideoComponent from '@/components/VideoComponent.vue';
    import Typed from 'typed.js';
    import {reactive, ref, defineProps, onMounted, type Ref} from 'vue';
    import type  {Project, Video } from "@/types";
    import AOS from 'aos';
    import axios from 'axios';
    import 'aos/dist/aos.css';

    const props = defineProps({
        updateAnchors: Function
    });

    const homeAnch = ref(null);
    const aboutAnch = ref(null);
    const resumeAnch = ref(null);
    const historyAnch = ref(null);
    const projectsAnch = ref(null);
    const contactsAnch = ref(null);

    const anchors = {   
        homeAnch: homeAnch,
        aboutAnch: aboutAnch,
        resumeAnch: resumeAnch,
        historyAnch: historyAnch,
        projectsAnch: projectsAnch,
        contactsAnch: contactsAnch,
    };

    // Works Cursor Position
    const personCursor = reactive({
        width: 0,
        left: 0,
    });

    // Auto Click Works Element
    const autoClickPerson: Ref<any> = ref(null);

    // Sets AutoClickPerson Variable on Needed Element
    function setAutoClickPerson(el: HTMLElement): undefined {
        autoClickPerson.value = el;
    }

    // Change Works Cursor And Current Projects Array on Click
    function setPersonCursor(e: any): void {
        if (personCursor.width != e.target.offsetWidth && personCursor.left != e.target.offsetLeft) {
            personCursor.width = e.target.offsetWidth
            personCursor.left = e.target.offsetLeft


            if(e.target.dataset.author === 'all'){
                current_projects.value = Array.from(shuffled_projects.value);
            }
            else{
                current_projects.value = Array.from(projects.value.filter((project: Project) => {
                    return project.author === e.target.dataset.author;
                }));
            }
        }
    }

    // Array of Current Picked Projects
    const current_projects: Ref<Project[]> = ref([{id: 0, title: '', img: '', skills: [], author: '', link: ''}]);

    // Array of All Projects
    const projects: Ref<Project[]> = ref([{id: 0, title: '', img: '', skills: [], author: '', link: ''}]);

    // Array of Shuffled Projects
    const shuffled_projects: Ref<Project[]> = ref([{id: 0, title: '', img: '', skills: [], author: '', link: ''}]);

    // Array of All Videos
    const videos: Ref<Video[]> = ref([{id: 0, title: '', src: '', img: ''}]);

    // Function For Future Backend
    function getProjects(): void {
        projects.value = [
            { id: 1, title: "Бизнес", img: '1.png', skills: ["AOS", 'JavaScript', 'HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/anxwamvsbyvrgyaaepgdumvvvv1j9bpp/" },
            { id: 2, title: "WoodPecker", img: '2.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/f9146a5f38ede1116346ab6abf4e7a63/" },
            { id: 3, title: "MoonBase", img: '3.png', skills: ['AOS', 'JavaScript', 'HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/deeda6cb3f62a8b2f3021825d32b59d1/" },
            { id: 4, title: "BlackTaxi", img: '4.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/f9dd9c2c7f64577ab16542fade3b96a1/" },
            { id: 5, title: "Логопед", img: '5.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/a7a92987d41304fbf441b2a3e8ec0c91/" },
            { id: 6, title: "Образовательный маршрут", img: '6.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/0cdf5aac9186d5c7f058a92f43c1c85a/" },
            { id: 7, title: "Мошенничество", img: '7.png', skills: ['HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/ykz9si72vkqq0qxgiuoxgtgbyjg3dyrw/" },
            { id: 8, title: "Блокада Ленинграда", img: '8.png', skills: ['HTML', 'CSS'], author: 'utyatskiy', link: "https://skills.junior-it.ru/work/gorod/" },
            { id: 9, title: "Елец гармошка", img: '9.png', skills: ["Laravel", 'JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://elec.junior-it.ru/" },
            { id: 10, title: "Cargo", img: '1.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://skills.junior-it.ru/work/85512a5c1d08532e363c625fec9c6252/" },
            { id: 11, title: "Марс-2", img: '2.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://skills.junior-it.ru/work/e873d8ea14472fc814360d4317310744/" },
            { id: 12, title: "Край, в котором хорошо", img: '3.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://skills.junior-it.ru/work/c4cf164dc5fd41c420c345321703e5fd/" },
            { id: 13, title: "Сайт педагога", img: '4.png', skills: ["PHP", 'JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://skills.junior-it.ru/work/phgaijnbtpiqqqtxazzeoa3e4mcjiutu/" },
            { id: 14, title: "Праздник в каждый дом", img: '5.png', skills: ['HTML', 'CSS'], author: 'fedosenko', link: "https://skills.junior-it.ru/work/7hqxyoj2sfjf1e4qawcqyqcerjx90jy5/" },
            { id: 15, title: "TulpanStore", img: '6.png', skills: ["PHP", 'JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://skills.junior-it.ru/work/34994d72efdc0990e3a71bf3ef93c576/" },
            { id: 16, title: "Сайт партии", img: '7.png', skills: ["PHP", 'JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://rpplipetsk.ru/" },
            { id: 17, title: "Сайт таролога", img: '8.png', skills: ["PHP", 'JavaScript', 'HTML', 'CSS'], author: 'fedosenko', link: "https://kursy-anna-koval-taro-otzyvy.ru/" },
            { id: 18, title: "Достопримечательности", img: '1.png', skills: ["Django", 'JavaScript', 'HTML', 'CSS'], author: 'chernykh', link: "https://eluchit.ru/dostopremL/django1/main_page" },
            { id: 19, title: "MyTravel", img: '2.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'chernykh', link: "https://mytravel.junior-it.ru/" },
            { id: 20, title: "Blanchard", img: '3.png', skills: ["PHP", 'JavaScript', 'HTML', 'CSS'], author: 'chernykh', link: "https://eluchit.ru/blanchard/main" },
            { id: 21, title: "OnlineMedicalApps", img: '4.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'chernykh', link: "https://oma.junior-it.ru/" },
            { id: 22, title: "Trustcrypt", img: '5.png', skills: ['Wordpress', 'JavaScript', 'HTML', 'CSS'], author: 'chernykh', link: "https://eluchit.ru/trustcrypt/" },
            { id: 23, title: "Aliance", img: '6.png', skills: ['JavaScript', 'HTML', 'CSS'], author: 'chernykh', link: "https://eluchit.ru/Aliance/" },
            { id: 24, title: "Cucumber", img: '7.png', skills: ['HTML', 'CSS'], author: 'chernykh', link: "https://eluchit.ru/Cucumber/" },
        ];

        shuffled_projects.value = Array.from(projects.value);

        // Shuffle Elements
        for (let i = shuffled_projects.value.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = shuffled_projects.value[i];
            shuffled_projects.value[i] = shuffled_projects.value[j];
            shuffled_projects.value[j] = temp;
        }
    }


    // Function For Future Backend
    function getVideos(): void {
        videos.value = [
            { id: 1, title: "Видео", src: 'https://vkvideo.ru/video_ext.php?oid=19529988&id=456240052&hd=2&autoplay=1', img: '1.png' },
        ];
    }

    // Get All Videos And Projects
    getVideos();
    getProjects();

    // Email Sending
    const email: Ref<string> = ref('');
    const error: Ref<string> = ref('');
    const message_color: Ref<'red' | 'green'> = ref('red');
    const sendEmail = (): void => {
        axios.post(window.origin + '/api/email', {
            email: email.value
        }).then(res => {
            if(res.data.success){
                message_color.value = 'green';
            }
            else{
                message_color.value = 'red';
            }
            error.value = res.data.message;
        });
    };


    // Current Video For Modal
    const current_video: Ref<Video> = ref({id: 0, title: '', src: '', img: ''});

    // Is Video Modal Opened
    const video_modal_opened: Ref<boolean> = ref(false);

    // Open Video Modal
    const openVideoModal = (video: Video): void => {
        video_modal_opened.value = true;
        current_video.value = video;
        document.body.style.overflowY = 'hidden';
    };

    // Close Video Modal
    const closeVideoModal = (): void => {
        video_modal_opened.value = false;
        document.body.style.overflowY = '';
    };



    // On Mounted Clicks Default Cursor Object
    onMounted(() => {
        if(props.updateAnchors !== undefined){
            props.updateAnchors(anchors);
        }
        autoClickPerson.value.click();

        // Setup Parallax & Setup Numbers Counting & Typed Animation
        let numbers = Array.from(document.querySelectorAll('.about-us__result-block')) as HTMLElement[];
        let counted: boolean[] = [];
        let max_numbers: number[] = [];
        const time_for_numbers: number = 1000;
        for(let i of numbers){counted.push(false); max_numbers.push(Number(i.children[0].childNodes[0].textContent)); i.children[0].childNodes[0].textContent = '0'}

        let gears = Array.from(document.querySelectorAll('.about-us__main-wrap__gear')) as HTMLElement[];

        let typed_1_string: HTMLElement | null = document.getElementById('typed_1');
        let typed_1_txt = '';
        if(typed_1_string){
            typed_1_txt = typed_1_string.textContent ? typed_1_string.textContent : '';
            typed_1_string.textContent = '';
        }
        let typed_1_done = false;
        window.addEventListener("scroll", (e) => {
            // Gears Parallax
            gears.forEach(gear => {
                let gear_sizes = gear.getBoundingClientRect();
                if(gear_sizes.top <= window.innerHeight && gear_sizes.top >= -(gear_sizes.height)){
                    gear.style.transform = `rotate(${(360 / (window.innerHeight + gear_sizes.height)) * (window.innerHeight - gear_sizes.top)}deg)`;
                }
            });

            // Counting Numbers
            numbers.forEach(number => {
                let number_sizes = number.getBoundingClientRect();
                if(number_sizes.top + number_sizes.height + 50 <= window.innerHeight && number_sizes.top >= -(number_sizes.height + 50)){
                    if(!counted[numbers.indexOf(number)]){
                        counted[numbers.indexOf(number)] = true;
                        let max: number = max_numbers[numbers.indexOf(number)];
                        setTimeout(() => {
                            let interval: number = setInterval(() => {
                                number.children[0].childNodes[0].textContent = String(Number(number.children[0].childNodes[0].textContent) + 1);
                                if(Number(number.children[0].childNodes[0].textContent) >= max){
                                    number.children[0].childNodes[0].textContent = `${max}`;
                                    clearInterval(interval);
                                }
                            }, time_for_numbers / max);
                        }, 250);
                    }
                }
            });

            // Typed Animation
            if(typed_1_string && !typed_1_done){
                let typed_1_sizes = typed_1_string.getBoundingClientRect();
                if(typed_1_sizes.top + typed_1_sizes.height + 50 <= window.innerHeight && typed_1_sizes.top >= -(typed_1_sizes.height + 50)){
                    typed_1_done = true;
                    let typed_1 = new Typed('#typed_1', {
                        strings: typed_1_txt.split(','),
                        typeSpeed: 30,
                        backDelay: 900,
                        backSpeed: 30,
                    });

                }
            }
        });

        // Init AOS
        AOS.init();
    });
</script>

<style scoped>
    .about-us__main-wrap__gear{
        position: absolute;
        width: 200px;
        height: 200px;
    }
    .about-us__main-wrap__gear-1{
        top: 10px;
        right: -75px;
    }
    .about-us__main-wrap__gear-2{
        bottom: 10px;
        left: -75px;
    }
    .typed_parent{
        display: grid;
        grid-auto-flow: column;
        justify-content: start;
        gap: 10px;
        align-items: center;
    }


    @keyframes connection__main-wrap {
        0%{
            box-shadow: var(--colorBlue) 0 0 50px -25px;
        }
        50%{
            box-shadow: var(--colorBlue) 0 0 50px -30px;
        }
        100%{
            box-shadow: var(--colorBlue) 0 0 50px -25px;
        }
    }
    .connection__main-wrap{
        position: relative;
        background-color: var(--colorBlack);
        animation: connection__main-wrap 3s ease infinite;
    }
    .video__title{
        text-align: center;
    }
    .video__container{
        display: grid;
        grid-auto-flow: row;
        justify-items: center;
        align-content: start;
        gap: 50px;
    }
    .video__main_wrap{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        width: 100%;
    }
    .video__main_block{
        cursor: pointer;
    }

    .about-us__section{
        overflow: hidden;
    }

    .banner__section{
        overflow: hidden;
    }

    @media (max-width: 1024px) {
        .about-us__main-wrap__gear{
            position: absolute;
            width: 130px;
            height: 130px;
            z-index: -1;
        }

        .about-us__main-wrap__gear-1{
            top: -20px;
            right: -50px;
        }
        .about-us__main-wrap__gear-2{
            bottom: -20px;
            left: -50px;
        }

        .about-us_img-wrap{
            width: 100%
        }

        .footer__container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
        }
        .footer_text {
            margin-top: 20px;
            grid-area: 2 / 1;
        }

        .connection__main-wrap {
            width: 100%;
        }

        .connection_pluses {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
        }

        .history_text-wrap {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-columns: auto auto;
            gap: 50px;
        }

        .history_chronology_block{
            grid-area: 1 / 1;
        }

        .history_block--p{
            grid-area: 2 / 2;
        }

        .history_block--h4{
            grid-area: 1 / 2;
        }

        .choosing-person_wrap {
            gap: 8px;
            }

        .connection_pluses_block > img {
            width: 30px;
            height: 30px;
        }

        .history_text-wrap--typed{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .typed_parent > h4{
            font-size: 30px;
        }

        .history_main-wrap{
            gap: 120px;
        }

        .connection__input {
            font-size: 20px;
        }
        .connection__main-wrap > div {
            display: flex;
            gap: 10px;
        }

        .connection__main-wrap {
            gap: 10px;
        }

        .connection__main-wrap > a{
            padding: 8px 12px;
        }

        .marquee__section{
            padding: 50px 0;
        }

    }

    @media (max-width: 576px) {
        .person-cursor{
            height: 30px;
        }

        .person-btn {
            font-size: 17px;
            padding: 5px 10px;
        }
    }

        
</style>