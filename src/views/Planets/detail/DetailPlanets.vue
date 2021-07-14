<template src="./DetailPlanets.html"></template>

<script>
import GoBack from "@/components/go-back/GoBack.vue";
import { ref, onMounted } from '@vue/runtime-core';
import { DataProvider } from "@/data-providers/index.js";
import { useStore } from "vuex";

export default {
    name: "DetailPlanets",
    components:{
        GoBack
    },
    setup(){
        
        const store = useStore();
        const detailPlanetsRefObj = ref({})

        onMounted(async() =>{
            await getDetailPlanets();
        });

        const getRequestDetailPlanets= async () =>{
            let request = [];
            let emptyRequest = [];
            try{
                request = await DataProvider("PLANETS", "GET_DETAIL", store.getters["GET_PARAM"]);

            }catch(error){
                request = emptyRequest;
                console.error(`Error Loading people ${error}`)
            }
            console.log('request=>', request)
            return request;
        }

        const getDetailPlanets = async() =>{
            detailPlanetsRefObj.value = await getRequestDetailPlanets();
        }


        return{
            detailPlanetsRefObj
        }
    }

}
</script>

<style lang="scss" src="./DetailPlanets.scss" scoped></style>