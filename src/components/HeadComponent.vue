<template>
    <div class="section header__section">
        <div class="container header__container">
            <nav class="header_nav" :class="{'header_nav--open': isBurgerOpen}">
                <div>
                    <span class="header-cursor" :class="{hideHeaderCursor: !headerCursor1.active}" :style="{ width: `${headerCursor1.width}px`, height: `${headerCursor1.height}px`, left: `${headerCursor1.left}px` }"></span>
                    <a class="link header_link header-section-1" @click="getClickFromHeader($event, anchors.homeAnch)" ref="homeHeaderBtn" href="#home">Главная</a>
                    <a class="link header_link header-section-1" @click="getClickFromHeader($event, anchors.aboutAnch)" ref="aboutHeaderBtn" href="#about">Команда</a>
                    <a class="link header_link header-section-1" @click="getClickFromHeader($event, anchors.resumeAnch)" ref="resumeHeaderBtn" href="#resume">Скилы</a>
                </div>
                <a class="link header_link--logo" href="#">CodeMakers</a>
                <div>
                    <span class="header-cursor" :class="{hideHeaderCursor: !headerCursor2.active}" :style="{ width: `${headerCursor2.width}px`, height: `${headerCursor2.height}px`, left: `${headerCursor2.left}px` }"></span>
                    <a class="link header_link header-section-2" @click="getClickFromHeader($event, anchors.historyAnch)" ref="historyHeaderBtn" href="#history">История</a>
                    <a class="link header_link header-section-2" @click="getClickFromHeader($event, anchors.projectsAnch)" ref="projectsHeaderBtn" href="#projects">Проекты</a>
                    <a class="link header_link header-section-2" @click="getClickFromHeader($event, anchors.contactsAnch)" ref="contactsHeaderBtn" href="#contacts">Контакты</a>
                </div>
                <span class="burger_btn" :class="{'burger_btn--open': isBurgerOpen}" @click="isBurgerOpen = !isBurgerOpen"></span>
                <div class="burger_menu">
                    <a class="link header_link header-section-1" href="#home">Главная</a>
                    <a class="link header_link header-section-1" href="#about">Команда</a>
                    <a class="link header_link header-section-1" href="#resume">Скилы</a>
                    <a class="link header_link header-section-2" href="#history">История</a>
                    <a class="link header_link header-section-2" href="#projects">Проекты</a>
                    <a class="link header_link header-section-2" href="#contacts">Контакты</a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {reactive, ref, defineProps, onMounted, type Ref} from 'vue';

    const props = defineProps({
        anchors: Object
    });

    // Works Cursor Position
    const headerCursor1 = reactive({
        width: 0,
        height: 0,
        left: 0,
        active: false,
    });
    const headerCursor2 = reactive({
        width: 0,
        height: 0,
        left: 0,
        active: false,
    });
    const activeBtn: Ref<any> = ref(null);

    const homeHeaderBtn: Ref<any> = ref(null);
    const aboutHeaderBtn: Ref<any> = ref(null);
    const resumeHeaderBtn: Ref<any> = ref(null);
    const historyHeaderBtn: Ref<any> = ref(null);
    const projectsHeaderBtn: Ref<any> = ref(null);
    const contactsHeaderBtn: Ref<any> = ref(null);

    function scrollTo(view: Ref<HTMLElement | null>) { 
        view.value?.scrollIntoView({ behavior: 'smooth' });
    }

    let timerId: ReturnType<typeof setTimeout>;

    function getClickFromHeader(headerBtnEvent: any, scrollElement: any) {
        headerBtnEvent.preventDefault();
        clearTimeout(timerId);
        scrollCheckerActive = false;
        setHeaderCursor(headerBtnEvent.target);
        if (scrollElement) scrollTo(scrollElement);
        timerId = setTimeout(() => {
            scrollCheckerActive = true;
            scrollChecker();
        }, 1000);
    }

    // Change Header Cursor And Current Section on Click
    function setHeaderCursor(element: HTMLElement): void {
        activeBtn.value = element;
        if (element.classList.contains('header-section-1')) {
            if (headerCursor1.active) {
                headerCursor1.width = element.offsetWidth;
                headerCursor1.height = element.offsetHeight;
                headerCursor1.left = element.offsetLeft;
            } else {
                headerCursor1.active = true;
                headerCursor2.active = false;
                headerCursor1.width = element.offsetWidth;
                headerCursor1.height = element.offsetHeight;
                headerCursor1.left = element.offsetLeft;
                headerCursor2.width = element.offsetWidth;
                headerCursor2.height = element.offsetHeight;
                headerCursor2.left = element.offsetLeft;
            }
        } else if (element.classList.contains('header-section-2')) {
            if (headerCursor2.active) {
                headerCursor2.width = element.offsetWidth;
                headerCursor2.height = element.offsetHeight;
                headerCursor2.left = element.offsetLeft;
            } else {
                headerCursor2.active = true;
                headerCursor1.active = false;
                headerCursor2.width = element.offsetWidth;
                headerCursor2.height = element.offsetHeight;
                headerCursor2.left = element.offsetLeft;
                headerCursor1.width = element.offsetWidth;
                headerCursor1.height = element.offsetHeight;
                headerCursor1.left = element.offsetLeft;
            }
        }
    }

    let scrollCheckerActive = true;

    const scrollChecker = () => {
        if (scrollCheckerActive) {
            if (window.pageYOffset >= props.anchors.contactsAnch.value.offsetTop) {
                setHeaderCursor(contactsHeaderBtn.value);
            } else if (window.pageYOffset >= props.anchors.projectsAnch.value.offsetTop) {
                setHeaderCursor(projectsHeaderBtn.value);
            } else if (window.pageYOffset >= props.anchors.historyAnch.value.offsetTop) {
                setHeaderCursor(historyHeaderBtn.value);
            } else if (window.pageYOffset >= props.anchors.resumeAnch.value.offsetTop) {
                setHeaderCursor(resumeHeaderBtn.value);
            } else if (window.pageYOffset >= props.anchors.aboutAnch.value.offsetTop) {
                setHeaderCursor(aboutHeaderBtn.value);
            } else if (window.pageYOffset >= props.anchors.homeAnch.value.offsetTop) {
                setHeaderCursor(homeHeaderBtn.value);
            }
        }
    }

    // On Mounted Clicks Default Cursor Object
    onMounted(() => {
        addEventListener("scroll", scrollChecker);
        addEventListener("DOMContentLoaded", scrollChecker);
        addEventListener("resize", () => setHeaderCursor(activeBtn.value));
    })

    let isBurgerOpen = ref(false)
</script>

<style scoped>
    .burger_btn{
        display: none;
        background: url('../assets/img/icons/burger.svg');
        background-position: center;
        background-size: cover;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .burger_menu{
        display: none;
        user-select: none;
    }

    .burger_menu > .link{
        padding: 8px 12px;
    }

    @media (max-width: 1024px) {
        .header_nav > div{
            display: none;
        }

        .header_nav{
            padding: 8px 20px;
        }

        .burger_btn{
            display: block;
        }

        .burger_btn--open{
            background-image: url('../assets/img/icons/cross.svg');
        }

        .header_nav{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 1px;
        }

        .header_nav--open{
            /* display: flex;
            flex-direction: row;
            justify-content: space-between; */
            position: relative;
        }

        .burger_menu{
            position: absolute;
            padding: 10px;
            background-color: #313131;
            border-radius: 25px;
            top: 60px;
            right: 0;
        }

        .header_nav--open > div{
            display: none;
        }

        .header_nav--open > .burger_menu{
            display: grid;
            grid-auto-columns: 1fr;
        }

        .header_nav--open > div > .header_link {
            border: none;
        }

        .burger_menu{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
</style>