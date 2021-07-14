<template src="./Home.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import { onBeforeMount, ref } from '@vue/runtime-core';
import { useRouter } from "vue-router";

export default {
    name: 'Home',
    components:{
        BoxContent
    },
    setup(){
        const router = useRouter();
        const sectionsList = ref([]);

        onBeforeMount(() =>{
            getSections();
        })

        const getSections = () =>{
            sectionsList.value = [
                {title: "character", link: "/people", img: require("../../assets/img/character.png")}, 
                {title: "planets", link: "/planets", img: require("../../assets/img/planet.png")}, 
                {title: "starships", link: "/starships", img: require("../../assets/img/starships.png")}]
        }

        const onGoRouter = (event) =>{
            if(event.name === "character") router.push("/people");
            if(event.name === "planets") router.push("/planets");
            if(event.name === "starships") router.push("/starships");
        }

        

        return{
            sectionsList,
            onGoRouter
        }
    }

}
</script>

<style lang="scss" src="./Home.scss" scope></style>