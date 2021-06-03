<template>
    <section class="listings">
        <div class="listings__item" v-show="arrayEmpty">
            <router-link 
                v-for="(item, dimg) in dogImages.message"
                :key="dimg"
                :to="{ name: 'DogDetails', params: { id: trimUrl(item) } }"
            >
                <VueClazyLoad :src="item">
                        <img :src="item" alt="Beautiful Dog" loading="lazy" width="300" height="300">
                        <div class="loader" slot="placeholder"></div>
                </VueClazyLoad>
            </router-link>
            
        </div>
        <div v-show="!arrayEmpty">
             <h2> Sorry! There are no dogs to view, Please refresh </h2>
        </div>
    </section>
</template>

<script>

import { VueClazyLoad } from 'vue-clazy-load'

export default {
    name: 'DogListings',
    components:{
        VueClazyLoad,
    },
    data() {
        return {
            arrayEmpty: true,
            imgShow: true,
        }
    },
    computed: {
        dogImages() {
            return this.$store.state.dogImages;
        }
    },
    mounted() {
        
    },
    methods: { 
        showImage() {
            this.imgShow = false;
        },
        trimUrl(url) {
            return url.match(/\/([^/]+)\/[^/]*$/)[0];
        }
    }
};
</script>


<style scoped lang="scss">
    .listings {
        content-visibility: auto;
        padding-bottom:var(--spacing-20);

        h2 {
            text-align: center;
        }
        &__item {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            min-width: 0;
            gap: var(--spacing-10);
            justify-content: center;
            @media screen and (min-width:600px) {
                gap: var(--spacing-20);
                grid-template-columns: repeat(4, minmax(min-content, 250px));
            }
            a {
                height:100px;
                width:100%;
                transition: transform .2s ease-out;
                .loaded {
                    height: 100%;
                }
                .loader {
                     height:100px;
                }
                &:hover {
                    transform: scale(.9);
                    transition: transform .2s .05s cubic-bezier(0.075, 0.82, 0.165, 1);
                }

            @media screen and (min-width: 600px) {
                .loader {
                     height:300px;
                }
                height:300px;
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

</style>
