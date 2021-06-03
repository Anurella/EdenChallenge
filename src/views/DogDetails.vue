<template>
    <div>
        <Header />
        <section class="details">
            <div>
                <img :src=getSrc(url) alt="Beautiful Dogs" height="400">
                <aside>
                    <p>
                    <span class="bold">Breed: </span> 
                    <span>{{ getBreedName(url) }}</span>
                </p>
                <p> Dogs, often hailed as humans’ best friends, have been the topic of many scientific studies looking 
                    into how they might boost our well-being. In this Spotlight, we’ll explain how your 
                    friendly pup can benefit your health across the board.
                </p>
                </aside>
            </div>
        </section>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'DogDetails',
    components: {
        Header,
    },
    data() {
        return {
            url: "string",
        }
    },
    created() {
            this.url = this.$route.params.id;
    },
    watch: {
    },
    methods: {
       fixBreed(breedName){
            if(breedName === 'germanshepherd'){
                return 'German Shepherd';
            }else if(breedName === 'mexicanhairless'){
                return 'Mexican Hairless';
            }else if(breedName === 'stbernard'){
                return 'St. Bernard';
            }else if(breedName === "african"){
                return 'African Wild Dog';
            }else if(breedName === 'bullterrier'){
                return 'Bull Terier';
            }
            return breedName.charAt(0).toUpperCase() + breedName.slice(1);
        },
        getBreedName(url) {
            let breed = url.split('/')[1];
            return this.fixBreed(breed);
        },
        getSrc(url) {
            return `https://images.dog.ceo/breeds${url}`;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .details {
      div {
        display: flex;
        justify-content: center;
        max-width: 700px;
        margin: 0 auto;
        padding: 30px 0 0;
        align-content: center;
        align-items: center;
        @media screen and ( max-width:540px) {
            flex-wrap: wrap;
        }
      }

      img {
          width:400px;
          height:400px;
          object-fit: cover;
          aspect-ratio: 1 / 1;
      }

      aside {
            margin-left:0;
            margin-top:var(--spacing-20);
          @media screen and (min-width:768px) {
              margin-left:var(--spacing-20);
               margin-top:0;
          }
        span  {
            font-size:1.2rem;

            :nth-child(2) {
                color:var(--grash-200);
            }
        }
        .bold {
            font-weight:bold;
        }

        p {
            margin-bottom: 1rem;
        }
      }
  }
</style>
