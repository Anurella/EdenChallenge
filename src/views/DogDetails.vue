<template>
    <section>
        <div>
            <img src="" alt="">
            <p>
                <span>Breed: </span> <span></span>
            </p>
            <p>
                All dogs are lovely
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DogDetails',
    data() {
        return {
            url: "string",
        }
    },
    created() {
            this.id = this.$route.params.id;
    },
    watch: {
        'route' (to, from) {
            console.log(from.path)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
