<template src="./Starships.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import GoBack from "@/components/go-back/GoBack.vue";
import { DataProvider } from "@/data-providers/index.js";
import { setNameSectionstoLoweCase } from "@/utils/utils.js";
import { onBeforeMount, ref } from '@vue/runtime-core';

export default {
    name: 'Starships',
    components:{
        BoxContent,
        GoBack
    },
    setup(){

        const starShipsRefList = ref([]);

        onBeforeMount(async() =>{
            await getStarShipsList();
        })

       
        const getRequestStarShips = async () =>{
            let request = [];
            let emptyRequest = [];
            try{
                request = await DataProvider("STARSHIPS", "GET_STARSHIPS");

            }catch(error){
                request = emptyRequest;
                console.error(`Error Loading starships ${error}`)
            }
            return request;
        }

        const getStarShipsList = async () =>{
           starShipsRefList.value = await setNameSectionstoLoweCase({getSection: getRequestStarShips()})
        };


        const onGoRouter = (event) =>{
            console.log(event.name)
        }

        return{
            onGoRouter,
            starShipsRefList

        }
    }

}
</script>

<style lang="scss" src="./Starships.scss" scope></style>