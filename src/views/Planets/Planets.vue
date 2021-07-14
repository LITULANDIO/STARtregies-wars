<template src="./Planets.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import GoBack from "@/components/go-back/GoBack.vue";
import Search from "@/components/search/Search.vue";
import { DataProvider } from "@/data-providers/index.js";
import { setNameSectionstoLoweCase } from "@/utils/utils.js";
import { onBeforeMount, ref, computed, reactive, toRefs, onBeforeUpdate } from '@vue/runtime-core';

export default {
    name: 'Planets',
    components:{
        BoxContent,
        GoBack,
        Search
    },
    setup(){

         const planetsList = reactive({
                planets: [],
                search: "",
                filterPlanetsList: computed(()=>{
                return planetsList.planets.filter(data => {
                    if(data.name){
                        return data.name.toLowerCase().includes(planetsList.search.toLowerCase())
                    }
                }
                )})
            });
        const showMessageRefBool = ref(false);

        onBeforeMount(async() =>{
            await getPlanetsList();
        });

        onBeforeUpdate(() =>{
            planetsList.filterPlanetsList != 0? showMessageRefBool.value = false : showMessageRefBool.value = true;
        });

       
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
           planetsList.planets = await setNameSectionstoLoweCase({getSection: getRequestPlanets()})
        };


        const onGoRouter = (event) =>{
            console.log(event.name)
        }

        return{
            onGoRouter,
            ...toRefs(planetsList),
            showMessageRefBool

        }
    }

}
</script>

<style lang="scss" src="./Planets.scss" scope></style>