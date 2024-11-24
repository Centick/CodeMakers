<template>
    <!-- баннер -->
    <span id="home" class="anchor"></span>
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
    <span id="about" class="anchor"></span>
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
    <span id="resume" class="anchor"></span>
    <ResumeComponent/>

    <!-- История команды -->
    <span id="history" class="anchor"></span>
    <div class="section">
        <div class="container history__container">
            <h2><span class="blue">_</span>История CodeMakers</h2>
            <div class="history_main-wrap">

                <div class="history_text-wrap">
                    <div class="history_block">
                        <h4>Занятие Web-разработкой</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="history_chronology_block">
                        1
                        <div class="points"></div>
                    </div>
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
                    <div class="history_chronology_block">
                        2
                        <div class="points"></div>
                    </div>
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
                    <div class="history_chronology_block">
                        3
                        <div class="points"></div>
                    </div>
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
                    <div class="history_chronology_block">
                        4
                        <div class="points"></div>
                    </div>
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
                    <div class="history_chronology_block">
                        5
                        <div class="points"></div>
                    </div>
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
                    <div class="history_chronology_block">
                        6
                        <div class="points"></div>
                    </div>
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
    <span id="projects" class="anchor"></span>
    <div class="section">
        <div class="container project__container">
            <h2><span class="blue">_</span>Наши проекты</h2>
            <div class="choosing-person_wrap">
                <span class="person-cursor" :style="{ width: `${personCursor.width}px`, left: `${personCursor.left}px` }"></span>
                <span data-author="utyatskiy" @click="setPersonCursor" :ref="setAutoClickPerson" class="person-btn">Утяцкий В</span>
                <span data-author="fedosenko" @click="setPersonCursor" class="person-btn">Федосенко И</span>
                <span data-author="chernyh" @click="setPersonCursor" class="person-btn">Черных В</span>
                <span data-author="all" @click="setPersonCursor" class="person-btn">Все</span>
            </div>
            <div class="project__main_wrap">
                <div class="project__main_block" v-for="project in current_projects">
                    <img :src="`/img/projects/${project.author}/${project.img}`" :key="project.id" :alt="project.title">
                    <h5>{{ project.title }}</h5>
                    <div class="project__skills">
                        <div class="project__skill" v-for="skill in project.skills">{{ skill }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- свяжитесь с нами -->
    <span id="contacts" class="anchor"></span>
    <div class="section">
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
    <AccordionComponent />
    <div class="section">
        <div class="container footer__container">
            <h2 class="footer_title">Спасибо за все!</h2>
            <p class="footer_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam veniam a consequuntur, possimus perferendis! Quidem voluptatum quos sapiente cumque explicabo ut molestias voluptates! Sunt possimus tempore quidem autem animi.</p>
        </div>

    </div>
</template>

<script setup lang="ts">
    import MarqueeComponent from '@/components/MarqueeComponent.vue';
    import AccordionComponent from '@/components/AccordionComponent.vue';
    import ResumeComponent from '@/components/ResumeComponent.vue';
    import {reactive, ref, onMounted, type Ref} from 'vue';
    import type {Project} from "@/types";

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
                current_projects.value = Array.from(projects.value);
            }
            else{
                current_projects.value = Array.from(projects.value.filter((project: Project) => {
                    return project.author === e.target.dataset.author;
                }));
            }
        }
    }

    // Array of Current Picked Projects
    const current_projects: Ref<Project[]> = ref([{id: 0, title: '', img: '', skills: [], author: ''}]);

    // Array of All Projects
    const projects: Ref<Project[]> = ref([{id: 0, title: '', img: '', skills: [], author: ''}]);

    // Function For future Backend
    function getProjects(): void {
        projects.value = [
            { id: 1, title: "Бизнес", img: '1.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
            { id: 2, title: "WoodPecker", img: '2.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
            { id: 3, title: "MoonBase", img: '3.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
            { id: 4, title: "BlackTaxi", img: '4.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
            { id: 5, title: "Логопед", img: '5.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
            { id: 6, title: "Образовательный маршрут", img: '6.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
            { id: 7, title: "Мошенничество", img: '7.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
            { id: 8, title: "Блокада Ленинграда", img: '8.png', skills: ['Vue.js', 'TypeScript', 'HTML', 'CSS'], author: 'utyatskiy' },
        ];
    }

    // Get All Projects
    getProjects();

    // On Mounted Clicks Default Cursor Object
    onMounted(() => {
        autoClickPerson.value.click();
    })
</script>
