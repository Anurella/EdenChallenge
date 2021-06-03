<template>
    <section class="listings">
        <div class="">
            <router-link 
                v-for="(item, dimg) in dogImages.message"
                :key="dimg"
                :to="{ name: 'DogDetails', params: { id: trimUrl(item) } }"
            >
                <img :src="item" alt="Beautiful Dog" loading="lazy">
            </router-link>
        </div>
    </section>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
    name: 'DogListings',
    computed: {
        dogImages() {
            return this.$store.state.dogImages;
        }
    },
    methods: {
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
        div {
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

                &:hover {
                    transform: scale(.9);
                    transition: transform .2s .05s cubic-bezier(0.075, 0.82, 0.165, 1);
                }

            @media screen and (min-width: 600px) {
                height:250px;
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
