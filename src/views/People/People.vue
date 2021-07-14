<template src="./People.html"></template>

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
    name: 'People',
    components:{
        BoxContent,
        GoBack,
        Search
    },
    setup(){

        const characterList = reactive({
                characters: [],
                search: "",
                filterCharactersList: computed(()=>{
                return characterList.characters.filter(data => {
                    if(data.name){
                        return data.name.toLowerCase().includes(characterList.search.toLowerCase())
                    }
                }
                )})
            });
        const showMessageRefBool = ref(false);
        const router = useRouter();
        const store = useStore();


        onBeforeMount(async() =>{
            await getPeopleList();
        });

        onBeforeUpdate(() =>{
            characterList.filterCharactersList != 0? showMessageRefBool.value = false : showMessageRefBool.value = true;
        });

       
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
           characterList.characters = await setNameSectionstoLoweCase({getSection: getRequestPeople()})
        };


        const onGoRouter = (event) =>{
            characterList.characters.forEach((character, index) => {
                if(event.name == character.name){
                    router.push(`/people/${index+1}`)
                    store.commit('SET_PARAM', index+1);
                }
            });
        }



        return{
            onGoRouter,
            ...toRefs(characterList),
            showMessageRefBool
        }
    }

}
</script>

<style lang="scss" src="./People.scss" scoped></style>