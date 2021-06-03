<template>
    <div class="home">
        <Header />
        <Hero />
        <DogListings />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import DogListings from '@/components/DogListings.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Hero,
        DogListings,
    },
};
</script>
