<template lang="pug">
  div.main-container
    Header
    Filters
    Catalog
    Footer
</template>

<script>
import Header from './components/Header.vue';
import Filters from './components/Filters.vue';
import Catalog from './components/Catalog.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Main',
  components: {
    Header,
    Filters,
    Catalog,
    Footer,
  },
};
</script>

<style lang="sass" scoped>
.main-container
</style>
