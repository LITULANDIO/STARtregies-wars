<template src="./People.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import { DataProvider } from "@/data-providers/index.js";
import { onBeforeMount, ref } from '@vue/runtime-core';
export default {
    name: 'People',
    components:{
        BoxContent
    },
    emits:[],
    setup(){

        const peopleRefList = ref([]);

        onBeforeMount(async() =>{
            await getPeople();
            setNamePeopletoLoweCase();

        });

        const getPeople = async () =>{
            let request = [];
            let emptyRequest = [];
            try{
                request = await DataProvider("PEOPLE", "GET_PEOPLE");

            }catch(error){
                request = emptyRequest;
                console.error(`Error Loading people ${error}`)
            }

            return request;
        }

        const setNamePeopletoLoweCase = async () =>{
            const peopleList = await getPeople();
            let newPeopleList = [];
            let newPeopleObj = {};

            if(peopleList){
                peopleList.results.forEach(people => {
                    newPeopleObj = {name: people.name.toLowerCase()}
                    newPeopleList.push(newPeopleObj);
                });
            }

            peopleRefList.value = newPeopleList;
        };


        const onGoRouter = (event) =>{
            console.log(event.name)
        }

        return{
            onGoRouter,
            peopleRefList

        }
    }

}
</script>

<style lang="scss" src="./People.scss" scope></style>