<template>
    <div class="section banner__section">
        <div class="container banner__container">
            <h1>CODE <br>MAKERS </h1>
            <img class="banner_img" src="../assets/img/leptop.png" alt="img">
        </div>
    </div>

    <div class="section">
        <MarqueeComponent/> 
    </div>
    

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
                        <p>Хакатонов</p>
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

    <div class="section skills__section">
        <div class="container skills__container">
            <div class="skills_block">
                <h2><span class="blue">_</span>Наши Скилы <span class="and blue">&</span> опыт</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae autem mollitia nulla impedit cum aperiam officia architecto, delectus ad porro. Ea natus totam soluta adipisci dignissimos impedit nihil neque.</p>
                <br><br>
                <h3>Скилы</h3>
                <div class=""></div>
            </div>

            <div class="skills_block">
                <h3>Опыт</h3>
                
            </div>

            

            
        </div>
    </div>
</template>

<script setup >
    import MarqueeComponent from '@/components/MarqueeComponent.vue';
</script>

<style> 
</style>