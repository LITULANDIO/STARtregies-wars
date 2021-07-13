<template src="./Search.html"></template>

<script>
export default {
    name: "Search",
    props:{
        modelSearch:{
            type: String
        }
    },
    emits:["update:modelSearch"],
    setup(props, {emit}){

        const inputSearch = (e) => {
            emit("update:modelSearch", e.currentTarget.value);
        };

        return{
            inputSearch
        }
    }

}
</script>

<style lang="scss" src="./Search.scss" scoped></style>