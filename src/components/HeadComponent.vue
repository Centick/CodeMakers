<template>
    <div class="section header__section">
        <div class="container header__container">
            <nav class="header_nav">
                <div>
                    <span class="header-cursor" :class="{hideHeaderCursor: !headerCursor1.active}" :style="{ width: `${headerCursor1.width}px`, left: `${headerCursor1.left}px` }"></span>
                    <a class="link header_link header-section-1" @click="setheaderCursor" :ref="setautoAppointHeaderItem" href="#home">Home</a>
                    <a class="link header_link header-section-1" @click="setheaderCursor" href="#about">О нас</a>
                    <a class="link header_link header-section-1" @click="setheaderCursor" href="#resume">Резюме</a>
                </div>
                <a class="link header_link--logo" href="#">CodeMakers</a>
                <div>
                    <span class="header-cursor" :class="{hideHeaderCursor: !headerCursor2.active}" :style="{ width: `${headerCursor2.width}px`, left: `${headerCursor2.left}px` }"></span>
                    <a class="link header_link header-section-2" @click="setheaderCursor" href="#history">Истоки</a>
                    <a class="link header_link header-section-2" @click="setheaderCursor" href="#projects">Проекты</a>
                    <a class="link header_link header-section-2" @click="setheaderCursor" href="#contacts">Контакты</a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {reactive, ref, onMounted, type Ref} from 'vue';

    // Works Cursor Position
    const headerCursor1 = reactive({
        width: 0,
        left: 0,
        active: false,
    });
    const headerCursor2 = reactive({
        width: 0,
        left: 0,
        active: false,
    });

    // Auto Click Works Element
    const autoAppointHeaderItem: Ref<any> = ref(null);

    // Sets AutoClickPerson Variable on Needed Element
    function setautoAppointHeaderItem(el: HTMLElement): undefined {
        autoAppointHeaderItem.value = el;
    }

    // Change Works Cursor And Current Projects Array on Click
    function setheaderCursor(e: any): void {
        if (e.target.classList.contains('header-section-1')) {
            if (headerCursor1.active) {
                headerCursor1.width = e.target.offsetWidth;
                headerCursor1.left = e.target.offsetLeft;
            } else {
                headerCursor1.active = true;
                headerCursor2.active = false;
                headerCursor1.width = e.target.offsetWidth;
                headerCursor1.left = e.target.offsetLeft;
                headerCursor2.width = e.target.offsetWidth;
                headerCursor2.left = e.target.offsetLeft;
            }
        } else if (e.target.classList.contains('header-section-2')) {
            if (headerCursor2.active) {
                headerCursor2.width = e.target.offsetWidth;
                headerCursor2.left = e.target.offsetLeft;
            } else {
                headerCursor2.active = true;
                headerCursor1.active = false;
                headerCursor2.width = e.target.offsetWidth;
                headerCursor2.left = e.target.offsetLeft;
                headerCursor1.width = e.target.offsetWidth;
                headerCursor1.left = e.target.offsetLeft;
            }
        }
    }

    // On Mounted Clicks Default Cursor Object
    onMounted(() => {
        headerCursor1.width = autoAppointHeaderItem.value.offsetWidth;
        headerCursor1.left = autoAppointHeaderItem.value.offsetLeft;
        setTimeout(() => headerCursor1.active = true, 300);
    })
</script>