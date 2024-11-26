<template>
    <div class="section header__section">
        <div class="container header__container">
            <nav class="header_nav">
                <div>
                    <span class="header-cursor" :class="{hideHeaderCursor: !headerCursor1.active}" :style="{ width: `${headerCursor1.width}px`, height: `${headerCursor1.height}px`, left: `${headerCursor1.left}px` }"></span>
                    <a class="link header_link header-section-1" @click="getClickFromHeader($event, props.anchors.homeAnch)" ref="homeHeaderBtn" href="#home">Home</a>
                    <a class="link header_link header-section-1" @click="getClickFromHeader($event, props.anchors.aboutAnch)" ref="aboutHeaderBtn" href="#about">О нас</a>
                    <a class="link header_link header-section-1" @click="getClickFromHeader($event, props.anchors.resumeAnch)" ref="resumeHeaderBtn" href="#resume">Резюме</a>
                </div>
                <a class="link header_link--logo" href="#">CodeMakers</a>
                <div>
                    <span class="header-cursor" :class="{hideHeaderCursor: !headerCursor2.active}" :style="{ width: `${headerCursor2.width}px`, height: `${headerCursor2.height}px`, left: `${headerCursor2.left}px` }"></span>
                    <a class="link header_link header-section-2" @click="getClickFromHeader($event, props.anchors.historyAnch)" ref="historyHeaderBtn" href="#history">Истоки</a>
                    <a class="link header_link header-section-2" @click="getClickFromHeader($event, props.anchors.projectsAnch)" ref="projectsHeaderBtn" href="#projects">Проекты</a>
                    <a class="link header_link header-section-2" @click="getClickFromHeader($event, props.anchors.contactsAnch)" ref="contactsHeaderBtn" href="#contacts">Контакты</a>
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
</script>