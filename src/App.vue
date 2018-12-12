<template lang="pug">
  div#app
    router-view
</template>

<style lang="scss">
*,
:after,
:before,
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
  background-color: white;
  color: #666;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
