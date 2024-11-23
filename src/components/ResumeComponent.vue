<template>
    <!-- уменя и опыт -->
    <div class="section skills__section">
        <div class="container skills__container">
            <div class="skills_block--sticky_parent">
                <div class="skills_block skills_block--sticky">
                    <h2><span class="blue">_</span>Наши Скилы <span class="and blue">&</span> <br> Опыт</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae autem mollitia nulla impedit cum aperiam officia architecto, delectus ad porro. Ea natus totam soluta adipisci dignissimos impedit nihil neque.</p>
                    <br><br>
                    <h3>Скилы</h3>
                    <div class="skills_wrap-skils">
                        <div class="skills_block-skils" v-for="skills_datum in skills_data">
                            <img :src="`src/assets/img/skills/${skills_datum.icon}`" alt="img">
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
                        <p>12.11.2023</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Minin Code <span class="blue">»</span> - 1 место</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur nesciunt magni similique maxime cum neque ex sint voluptatem nulla! Hic sequi, expedita quam repudiandae nihil rem mollitia at maiores?</p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>12.01.2024</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Taskills <span class="blue">»</span> - 1 место</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur nesciunt magni similique maxime cum neque ex sint voluptatem nulla! Hic sequi, expedita quam repudiandae nihil rem mollitia at maiores?</p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>12.01.2024</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> ИТ вызов <span class="blue">»</span> - 1 место</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur nesciunt magni similique maxime cum neque ex sint voluptatem nulla! Hic sequi, expedita quam repudiandae nihil rem mollitia at maiores?</p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>12.01.2024</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Про IT <span class="blue">»</span> - 1 место</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur nesciunt magni similique maxime cum neque ex sint voluptatem nulla! Hic sequi, expedita quam repudiandae nihil rem mollitia at maiores?</p>
                        </div>
                    </div>
                </div>
                <div class="skills_block-experience">
                    <div class="experience">
                        <p>12.01.2024</p>
                        <div class="experience_description">
                            <h4><span class="blue">«</span> Digital Code <span class="blue">»</span> - 1 место</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur nesciunt magni similique maxime cum neque ex sint voluptatem nulla! Hic sequi, expedita quam repudiandae nihil rem mollitia at maiores?</p>
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

    const skills_data: Ref<Skill[]> = ref([]);

    const getSkillsData = (): void => {
        // Function For Future Backend
        skills_data.value = [
            { title: 'Git', icon: 'skills_logo_5.png', description: '', },
            { title: 'NodeJS', icon: 'skills_logo_3.png', description: '', },
            { title: 'Python', icon: 'skills_logo_4.png', description: '', },
            { title: 'Django', icon: 'skills_logo_1.png', description: '', },
            { title: 'JavaScript', icon: 'skills_logo_16.png', description: '', },
            { title: 'JQuery', icon: 'skills_logo_2.png', description: '', },
            { title: 'TypeScript', icon: 'skills_logo_17.png', description: '', },
            { title: 'Vue.js', icon: 'skills_logo_14.png', description: '', },
            { title: 'Laravel', icon: 'skills_logo_12.png', description: '', },
            { title: 'HTML', icon: 'skills_logo_10.png', description: '', },
            { title: 'CSS', icon: 'skills_logo_11.png', description: '', },
            { title: 'REST API', icon: 'skills_logo_18.png', description: '', },
            { title: 'PHP', icon: 'skills_logo_15.png', description: '', },
            { title: 'MySQL', icon: 'skills_logo_9.png', description: '', },
            { title: 'SQLite', icon: 'skills_logo_9.png', description: '', },
            { title: 'Docker', icon: 'skills_logo_8.png', description: '', },
            { title: 'Figma', icon: 'skills_logo_7.png', description: '', },
            { title: 'Photoshop', icon: 'skills_logo_6.png', description: '', },
        ];
    };

    const path_compiler = (root: string, file_name: string) => {
        return `${root}/${file_name}`;
    }
</script>

<style>
    .skills_block--sticky_parent{
        position: relative;
    }
    .skills_block--sticky{
        top: 15vh;
    }
</style>