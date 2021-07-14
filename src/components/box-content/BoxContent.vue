<template src="./BoxContent.html"></template>

<script>
import { onBeforeMount, onMounted } from '@vue/runtime-core';
export default {
    name: 'BoxContent',
    props:{
        title:{
            type: String,
            required: true
        },
    },
    emits:["onGoRouter"],
    setup(props, {emit}){

        onMounted(() =>{
            setPropTitletoLoweCase();
        });

        const setPropTitletoLoweCase = () =>{
            return props.title.toLowerCase();
        }

        const onGoRouter = (event) =>{
            emit('onGoRouter', {name: event.target.innerText});
        }


        return{
            onGoRouter
        }
    }

}
</script>

<style lang="scss" src="./BoxContent.scss" scoped></style>