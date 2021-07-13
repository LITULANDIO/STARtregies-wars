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
                {title: "people", link: "/people"}, 
                {title: "planets", link: "/planets"}, 
                {title: "starships", link: "/starships"}]
        }

        const onGoRouter = (event) =>{
            if(event.name === "people") router.push("/people");
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