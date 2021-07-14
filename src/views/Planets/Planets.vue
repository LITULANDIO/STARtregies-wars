<template src="./Planets.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import GoBack from "@/components/go-back/GoBack.vue";
import Search from "@/components/search/Search.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { DataProvider } from "@/data-providers/index.js";
import { setNameSectionstoLoweCase } from "@/utils/utils.js";
import { onBeforeMount, ref, computed, reactive, toRefs, onBeforeUpdate } from '@vue/runtime-core';
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
    name: 'Planets',
    components:{
        BoxContent,
        GoBack,
        Search,
        Spinner: PulseLoader,
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
        const router = useRouter();
        const store = useStore();
        const spinnerDataRefObj = ref({
            loading: true,
            color: "#FFE08F",
            size: "25px",
        });

        onBeforeMount(async() =>{
            await getPlanetsList();
            spinnerDataRefObj.value.loading = false;
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
            planetsList.planets.forEach((planet, index) => {
                if(event.name == planet.name){
                    router.push(`/planets/${index+1}`)
                    store.commit('SET_PARAM', index+1);
                }
            });
        }

        return{
            onGoRouter,
            ...toRefs(planetsList),
            showMessageRefBool,
            spinnerDataRefObj

        }
    }

}
</script>

<style lang="scss" src="./Planets.scss" scoped></style>