<template src="./Planets.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import GoBack from "@/components/go-back/GoBack.vue";
import { DataProvider } from "@/data-providers/index.js";
import { setNameSectionstoLoweCase } from "@/utils/utils.js";
import { onBeforeMount, ref } from '@vue/runtime-core';

export default {
    name: 'Planets',
    components:{
        BoxContent,
        GoBack
    },
    setup(){

        const planetsRefList = ref([]);

        onBeforeMount(async() =>{
            await getPlanetsList();
        })

       
        const getRequestPlanets = async () =>{
            let request = [];
            let emptyRequest = [];
            try{
                request = await DataProvider("PLANETS", "GET_PLANETS");

            }catch(error){
                request = emptyRequest;
                console.error(`Error Loading planets ${error}`)
            }
            console.log('planets =>', request)

            return request;
        }

        const getPlanetsList = async () =>{
           planetsRefList.value = await setNameSectionstoLoweCase({getSection: getRequestPlanets()})
        };


        const onGoRouter = (event) =>{
            console.log(event.name)
        }

        return{
            onGoRouter,
            planetsRefList

        }
    }

}
</script>

<style lang="scss" src="./Planets.scss" scope></style>