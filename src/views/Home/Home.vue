<template src="./Home.html"></template>

<script>
import { useRouter } from "vue-router";

export default {
    name: 'Home',
    setup(){

        const router = useRouter();

        const onGoPeople = () =>{
            router.push('/people');
        }

        const onGoPlanets = () =>{
            router.push('/planets');
        }

        const onGoStarships = () =>{
            router.push('/starships');
        }

        return{
            onGoPeople,
            onGoPlanets,
            onGoStarships
        }
    }

}
</script>

<style lang="scss" src="./Home.scss" scope></style>