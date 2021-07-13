<template src="./People.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import { DataProvider } from "@/data-providers/index.js";
import { setNameSectionstoLoweCase } from "@/utils/utils.js";
import { onBeforeMount, onMounted, ref } from '@vue/runtime-core';
export default {
    name: 'People',
    components:{
        BoxContent
    },
    emits:[],
    setup(){

        const peopleRefList = ref([]);

        onMounted(async() =>{
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
           console.log('peopleRefList', peopleRefList.value)
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