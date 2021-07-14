<template src="./DetailStarship.html"></template>

<script>
import GoBack from "@/components/go-back/GoBack.vue";
import { ref, onMounted } from '@vue/runtime-core';
import { DataProvider } from "@/data-providers/index.js";
import { useStore } from "vuex";

export default {
    name: "DetailStarship",
    components:{
        GoBack
    },
    setup(){
        
        const store = useStore();
        const detailStarshipRefObj = ref({})

        onMounted(async() =>{
            await getDetailStarship();
        });

        const getRequestDetailStarship = async () =>{
            let request = [];
            let emptyRequest = [];
            try{
                request = await DataProvider("STARSHIPS", "GET_DETAIL", store.getters["GET_PARAM"]);

            }catch(error){
                request = emptyRequest;
                console.error(`Error Loading people ${error}`)
            }
            console.log('request=>', request)
            return request;
        }

        const getDetailStarship = async() =>{
            detailStarshipRefObj.value = await getRequestDetailStarship();
        }


        return{
            detailStarshipRefObj
        }
    }

}
</script>

<style lang="scss" src="./DetailStarship.scss" scoped></style>