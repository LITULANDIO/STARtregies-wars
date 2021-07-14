<template src="./DetailPeople.html"></template>

<script>
import GoBack from "@/components/go-back/GoBack.vue";
import { ref, onMounted } from '@vue/runtime-core';
import { DataProvider } from "@/data-providers/index.js";
import { useStore } from "vuex";

export default {
    name: "DetailPeople",
    components:{
        GoBack
    },
    setup(){
        
        const store = useStore();
        const detailPeopleRefObj = ref({})

        onMounted(async() =>{
            await getDetailPeople();
        });

        const getRequestDetailPeople = async () =>{
            let request = [];
            let emptyRequest = [];
            try{
                request = await DataProvider("PEOPLE", "GET_DETAIL", store.getters["GET_PARAM"]);

            }catch(error){
                request = emptyRequest;
                console.error(`Error Loading people ${error}`)
            }
            console.log('request=>', request)
            return request;
        }

        const getDetailPeople = async() =>{
            detailPeopleRefObj.value = await getRequestDetailPeople();
        }


        return{
            detailPeopleRefObj
        }
    }

}
</script>

<style lang="scss" src="./DetailPeople.scss" scoped></style>