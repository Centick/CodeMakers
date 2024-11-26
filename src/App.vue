<template>
  <HeadComponent :anchors="anchors" />
  <MainComponent :updateAnchors="updateAnchors"/>
</template>

<script setup lang="ts">
  import {reactive} from 'vue';
  import MainComponent from "@/components/MainComponent.vue";
  import HeadComponent from "@/components/HeadComponent.vue";
  
  const anchors = {
    homeAnch: null,
    aboutAnch: null,
    resumeAnch: null,
    historyAnch: null,
    projectsAnch: null,
    contactsAnch: null,
  };

  const updateAnchors = newAnchors => {
    anchors.homeAnch = newAnchors.homeAnch;
    anchors.aboutAnch = newAnchors.aboutAnch;
    anchors.resumeAnch = newAnchors.resumeAnch;
    anchors.historyAnch = newAnchors.historyAnch;
    anchors.projectsAnch = newAnchors.projectsAnch;
    anchors.contactsAnch = newAnchors.contactsAnch;
  }
</script>

<style scoped>

</style>
