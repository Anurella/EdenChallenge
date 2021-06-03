<template>
    <div>
        <Header />
        <section class="search">
             <h1>
                 <span>Breed:</span>
                 <span> {{ dogBreed }} </span>
             </h1>
             <ul class="search__list">
                 <li v-for="(item, dimg) in dogImages.message"
                :key="dimg">
                    <img :src="item" alt="Beautiful Dog" loading="lazy" @load="showImage" v-show="!imgShow" 
                        width="300" height="300">
                   <div class="loader" v-show="imgShow"></div>
                </li>
             </ul>
        </section>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
    export default {
        name: "Search",
        components: {
            Header,
        },
        data() {
            return {
                imgShow: true,
            }
        },
        mounted() {
            this.$store.dispatch('getByBreed', (this.$store.getters.getCurBreed));
        },
        computed: {
            dogBreed() {
                return this.$store.state.currentBreed;
            },
            dogImages() {
                return this.$store.state.dogImages;
            }
        },
        watch: {
            // '$route.query.q'() {
            //     this.$store.dispatch('getByBreed', (this.$route.query.q));
            // }
        },
        methods:{
            showImage() {
            this.imgShow = false;
           },
        }
    }
</script>

<style lang="scss" scoped>
 .search {
     padding-top:80px;
      h1 {
       text-transform: capitalize;
       margin-bottom: calc(1.5*var(--spacing-20));
     }

     &__list {
         display: grid;
    grid-template-columns: repeat(3, 100px);
    min-width: 0;
    gap: var(--spacing-20);
    justify-content:start;
            @media screen and (min-width: 600px) {
                gap: var(--spacing-20);
                grid-template-columns: repeat(5, minmax(min-content, 300px));
            }

            li {
                height:100px;
                width:100%;

            @media screen and (min-width: 768px) {
                height:auto;
            }
                img {
                    border-radius:10px;
                    height:100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
     }
 }

 .loader {
     height:300px;
 }

</style>