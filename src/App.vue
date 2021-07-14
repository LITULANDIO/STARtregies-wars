<template>
<div id="background-stars" class="w-screnn | pl-5 pr-5">
  <div class="text-center py-8">
    <h1>STARtregies WARS</h1>
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
@import "./assets/colors.scss";

#background-stars{
  background-image: url("./assets/img/background.png");
  background-repeat: repeat;
  height: calc(100vh + 400px);
  div, h1, h2, h3{
    font-family: 'Star Jedi', arial;
  }
  h1, h2, h3{
  color: $yellow;
  font-size: 3em !important;
  }
  h2{
    font-size: 2em !important;
  }
  h3{
    font-size: 1.5em !important;
  }

}
</style>
