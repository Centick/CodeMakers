<template>
    <!-- у меня и опыт -->
    <div class="section skills__section">
        <div class="container skills__container">
            <div class="skills_block--sticky_parent">
                <div class="skills_block skills_block--sticky">
                    <h2><span class="blue">_</span>Наши Скилы <span class="and blue">&</span> <br> Опыт</h2>
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

    // Skills Array
    const skills_data: Ref<Skill[]> = ref([]);

    // Active Skill
    const skill_active: Ref<Skill> = ref({id: 0, title: '', icon: '', description: ''});

    // Function For Future Backend
    const getSkillsData = (): void => {
        skills_data.value = [
            { id: 1, title: 'Git', icon: 'skills_logo_5.png', description: '1' },
            { id: 2, title: 'NodeJS', icon: 'skills_logo_3.png', description: '2' },
            { id: 3, title: 'Python', icon: 'skills_logo_4.png', description: '3' },
            { id: 4, title: 'Django', icon: 'skills_logo_1.png', description: '4' },
            { id: 5, title: 'JavaScript', icon: 'skills_logo_16.png', description: '5' },
            { id: 6, title: 'JQuery', icon: 'skills_logo_2.png', description: '6' },
            { id: 7, title: 'TypeScript', icon: 'skills_logo_17.png', description: '7' },
            { id: 8, title: 'Vue.js', icon: 'skills_logo_14.png', description: '8' },
            { id: 9, title: 'Laravel', icon: 'skills_logo_12.png', description: '9' },
            { id: 10, title: 'HTML', icon: 'skills_logo_10.png', description: '10' },
            { id: 11, title: 'CSS', icon: 'skills_logo_11.png', description: '11' },
            { id: 12, title: 'REST API', icon: 'skills_logo_18.png', description: '12' },
            { id: 13, title: 'PHP', icon: 'skills_logo_15.png', description: '13' },
            { id: 14, title: 'MySQL', icon: 'skills_logo_9.png', description: '14' },
            { id: 15, title: 'SQLite', icon: 'skills_logo_9.png', description: '15' },
            { id: 16, title: 'Docker', icon: 'skills_logo_8.png', description: '16' },
            { id: 17, title: 'Figma', icon: 'skills_logo_7.png', description: '17' },
            { id: 18, title: 'Photoshop', icon: 'skills_logo_6.png', description: '18' }
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