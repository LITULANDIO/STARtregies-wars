<template src="./People.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import GoBack from "@/components/go-back/GoBack.vue";
import { DataProvider } from "@/data-providers/index.js";
import { setNameSectionstoLoweCase } from "@/utils/utils.js";
import { onBeforeMount, ref } from '@vue/runtime-core';
export default {
    name: 'People',
    components:{
        BoxContent,
        GoBack
    },
    emits:[],
    setup(){

        const peopleRefList = ref([]);

        onBeforeMount(async() =>{
            await getPeopleList();
        })

       
        const getRequestPeople = async () =>{
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

        const getPeopleList = async () =>{
           peopleRefList.value = await setNameSectionstoLoweCase({getSection: getRequestPeople()})
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