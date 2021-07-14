<template src="./Starships.html"></template>

<script>
import BoxContent from "@/components/box-content/BoxContent.vue";
import GoBack from "@/components/go-back/GoBack.vue";
import Search from "@/components/search/Search.vue";
import { DataProvider } from "@/data-providers/index.js";
import { setNameSectionstoLoweCase } from "@/utils/utils.js";
import { onBeforeMount, ref, computed, reactive, toRefs, onBeforeUpdate } from '@vue/runtime-core';
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
    name: 'Starships',
    components:{
        BoxContent,
        GoBack,
        Search
    },
    setup(){

        const starshipsList = reactive({
                starships: [],
                search: "",
                filterStarshipsList: computed(()=>{
                return starshipsList.starships.filter(data => {
                    if(data.name){
                        return data.name.toLowerCase().includes(starshipsList.search.toLowerCase())
                    }
                }
                )})
            });
        const showMessageRefBool = ref(false);
        const router = useRouter();
        const store = useStore();

        onBeforeMount(async() =>{
            await getStarShipsList();
        });

        onBeforeUpdate(() =>{
            starshipsList.filterStarshipsList != 0? showMessageRefBool.value = false : showMessageRefBool.value = true;
        });


       
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
           starshipsList.starships = await setNameSectionstoLoweCase({getSection: getRequestStarShips()})
        };


        const onGoRouter = (event) =>{
             starshipsList.starships.forEach((starship, index) => {
                if(event.name == starship.name){
                    router.push(`/starships/${index+1}`)
                    store.commit('SET_PARAM', index+1);
                }
            });
        }

        return{
            onGoRouter,
            ...toRefs(starshipsList),
            showMessageRefBool

        }
    }

}
</script>

<style lang="scss" src="./Starships.scss" scoped></style>