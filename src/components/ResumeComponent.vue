<template>
    <!-- у меня и опыт -->
    <div class="section skills__section">
        <div class="container skills__container">
            <div class="skills_block--sticky_parent">
                <div class="skills_block skills_block--sticky">
                    <h2><span class="blue">_</span>Наши Скилы&nbsp;<span class="and blue">&</span>&nbsp;Опыт</h2>
                    <div class="skills__inner">
                        <div class="skills-inner__img_wrap">
                            <img class="skills-inner__img" :src="`/img/skills/${skill_active.icon}`" :alt="skill_active.title">
                        </div>
                        <p class="skills-inner__text">{{ skill_active.description }}</p>
                    </div>
                    <h3>Скилы</h3>
                    <div class="skills_wrap-skils">
                        <div @click="setActiveSkill(skills_datum.id)" class="skills_block-skils" :class="{'skills_block-skils_active': skill_active.id === skills_datum.id}" :key="skills_datum.id" v-for="skills_datum in skills_data">
                            <img :src="`/img/skills/${skills_datum.icon}`" :alt="skills_datum.title">
                        </div>
                    </div>
                </div>
            </div>

            <div class="skills_block">
                <div class="skills_block-experience">
                    <h3>Опыт</h3>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>25.11.2023</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Minin Code <span class="blue">»</span> - 1 место</h4>
                            <p>Участники хакатона "Минин Code" представляют собой молодых программистов в возрасте от 12 до 18 лет. Участие в мероприятии позволяет им демонстрировать профессиональные навыки, расширять сеть контактов и набираться опыта в командной работе.</p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>17.12.2023</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Taskills <span class="blue">»</span> - 1 место</h4>
                            <p>Всероссийский хакатон по информационным технологиям «TASKILLS» для учащихся образовательных учреждений (от 12 до 18 лет) в дистанционном формате и в два этапа: отборочный и финальный!</p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>24.08.2024</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> ИТ вызов <span class="blue">»</span> - 1 место</h4>
                            <p>Оффлайн хакатон для школьников и студентов в городе Ижевск. Возраст участников Хакатона: 15-20 лет включительно (на момент времени проведения мероприятия), которые интересуются сферой информационных технологий, имеют опыт в разработке сайтов и мобильных приложений.</p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>31.08.2024</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Про IT <span class="blue">»</span> - 1 место</h4>
                            <p>Цель Хакатона – погружение школьников в процесс профессионального самоопределения с учетом стратегии социальноэкономического развития Липецкой области. </p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>02.11.2024</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Digital Code <span class="blue">»</span> - 1 место</h4>
                            <p>Целью проведения Хакатона является популяризация технической направленности основного и дополнительного образования для школьников, науки и знаний в области современных технологий в Липецкой области.</p>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </div>
</template>

<script setup lang="ts">
    import { type Ref, ref } from "vue";
    import { type Skill } from '@/types';

    // Skills Array
    const skills_data: Ref<Skill[]> = ref([]);

    // Active Skill
    const skill_active: Ref<Skill> = ref({id: 0, title: '', icon: '', description: ''});

    // Function For Future Backend
    const getSkillsData = (): void => {
        skills_data.value = [
            { id: 1, title: 'Git', icon: 'skills_logo_5.png', description: 'Git — это система управления версиями с распределённой архитектурой' },
            { id: 2, title: 'NodeJS', icon: 'skills_logo_3.png', description: 'Node.js — это платформа с открытым исходным кодом для работы с языком JavaScript.' },
            { id: 3, title: 'Python', icon: 'skills_logo_4.png', description: 'Python — это высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью.' },
            { id: 4, title: 'Django', icon: 'skills_logo_1.png', description: 'Django — это бесплатный высокоуровневый фреймворк с открытым исходным кодом, предназначенный для создания приложений на языке Python. Его основная цель — помочь разработчикам быстро и безопасно создавать серверную часть сайтов.' },
            { id: 5, title: 'JavaScript', icon: 'skills_logo_16.png', description: 'JavaScript — это язык программирования, который используется для создания интерактивных и динамических веб-сайтов' },
            { id: 6, title: 'JQuery', icon: 'skills_logo_2.png', description: 'jQuery — это быстрая, небольшая и богатая функциями JavaScript-библиотека, предназначенная для упрощения написания скриптов на языке JavaScript.' },
            { id: 7, title: 'TypeScript', icon: 'skills_logo_17.png', description: 'TypeScript — это язык программирования для веб-разработки, основанный на JavaScript. Он делает код понятнее и надёжнее, добавляет статическую типизацию (переменные привязаны к конкретным типам данных).' },
            { id: 8, title: 'Vue.js', icon: 'skills_logo_14.png', description: 'Vue.js — это прогрессивный JavaScript-фреймворк для разработки сайтов и веб-приложений, написанный на JavaScript' },
            { id: 9, title: 'Laravel', icon: 'skills_logo_12.png', description: 'Laravel — бесплатный PHP-фреймворк с открытым исходным кодом, специально разработанный для создания сложных сайтов и веб-приложений.' },
            { id: 10, title: 'HTML', icon: 'skills_logo_10.png', description: 'HTML — это язык гипертекстовой разметки, который лежит в основе веб-разработки и помогает упорядочивать содержимое веб-страниц.' },
            { id: 11, title: 'CSS', icon: 'skills_logo_11.png', description: 'CSS — это каскадные таблицы стилей, язык описания внешнего вида HTML-документа.' },
            { id: 12, title: 'REST API', icon: 'skills_logo_18.png', description: 'REST API — это архитектурный стиль взаимодействия компонентов распределённой системы, который используют для передачи данных между сервером и клиентом.' },
            { id: 13, title: 'PHP', icon: 'skills_logo_15.png', description: 'PHP — это скриптовый язык программирования. Имеет открытый исходный код. Изначально создавался для разработки веб-приложений, но в процессе обновлений стал языком общего назначения.' },
            { id: 14, title: 'MySQL', icon: 'skills_logo_9.png', description: 'MySQL — это система управления реляционными базами данных (СУРБД).' },
            { id: 15, title: 'Docker', icon: 'skills_logo_8.png', description: 'Docker — это платформа контейнеризации с открытым исходным кодом, с помощью которой можно автоматизировать создание приложений, их доставку и управление.' },
            { id: 16, title: 'Figma', icon: 'skills_logo_7.png', description: 'Figma — онлайн-сервис для веб-дизайна. В нём можно отрисовать иллюстрации и элементы интерфейса, создать интерактивный макет сайта, прототип приложения или векторную графику.' },
            { id: 17, title: 'Photoshop', icon: 'skills_logo_6.png', description: 'Photoshop — многофункциональный графический редактор. Позволяет обрабатывать фото, создавать иллюстрации, прототипы и макеты для веб-дизайна, несложные анимации и многое другое.' }
        ];

        // Set Active Skill
        skill_active.value = Object.assign(skills_data.value[0], {});
    };

    // Get Skills
    getSkillsData();

    // Set Active Skill on Click Function
    function setActiveSkill(id: number): void {
        skill_active.value = Object.assign(skills_data.value.filter((skill: Skill) => {
            return skill.id === id;
        })[0], {});
    }
</script>

<style>
    .skills_block--sticky_parent{
        position: relative;
    }
    .skills_block--sticky{
        top: 15vh;
    }
    .skills-inner__img_wrap{
        width: 100px;
        height: 100px;
        border: 3px solid var(--colorWhite);
        border-radius: 18px;
        display: grid;
        grid-auto-flow: row;
        align-content: center;
        justify-items: center;
    }
    .skills-inner__img{
        width: 60%;
    }
    .skills__inner{
        display: grid;
        grid-auto-flow: row;
        justify-items: start;
        align-content: start;
        gap: 25px;
    }
    .skills-inner__text{
        font-size: 20px;
    }
</style>
