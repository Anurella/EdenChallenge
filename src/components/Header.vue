<template>
    <header>
        <div class="header__wrap">
            <router-link to="/">
                <span>
                  <svg aria-label="Site Logo" enable-background="new 0 0 390.126 390.125" version="1.1" viewBox="0 0 390.13 390.12" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="m132.64 177.86c31.162 0 56.508-34.014 56.508-75.834 0-41.817-25.347-75.841-56.508-75.841-31.153 0-56.502 34.023-56.502 75.841 0 41.82 25.349 75.834 56.502 75.834z"/>
                    <path d="m300.25 251.63c-1.159-1.579-2.27-3.068-2.864-4.348-12.635-27.046-47.27-58.931-103.38-59.724l-2.159-0.012c-55.25 0-89.627 30.197-103.38 58.469-0.475 0.967-1.52 2.222-2.627 
                          3.549-1.31 1.555-2.606 3.146-3.714 4.875-11.619 18.075-17.543 38.426-16.669 57.299 0.916 20.037 9.305 36.131 23.581 45.312 5.768 3.705 11.992 5.572 18.522 5.572 13.465 0 25.793-7.584 
                          40.079-16.368 9.083-5.598 18.465-11.374 28.886-15.697 1.168-0.385 5.954-0.973 13.781-0.973 9.307 0 15.991 0.828 17.419 1.321 10.173 4.491 19.107 10.382 27.748 16.068 13.247 8.731 
                          25.755 16.97 39.326 16.97 5.824 0 11.469-1.537 16.795-4.563 29.382-16.693 34.979-62.492 12.484-102.09-1.129-1.987-2.474-3.842-3.825-5.662z"/>
                    <path d="m252.8 177.86c31.147 0 56.499-34.014 56.499-75.834 0-41.817-25.352-75.841-56.499-75.841-31.165 0-56.511 34.023-56.511 75.841 0 41.82 25.346 75.834 56.511 75.834z"/>
                    <path d="m345.6 138.92c-24.975 0-44.521 25.901-44.521 58.967 0 33.051 19.558 58.955 44.521 58.955 24.961 0 44.531-25.904 44.531-58.955 0-33.065-19.558-58.967-44.531-58.967z"/>
                    <path d="m89.048 197.88c0-33.065-19.558-58.967-44.522-58.967-24.965 0-44.526 25.902-44.526 58.967 0 33.051 19.561 58.955 44.526 58.955s44.522-25.904 44.522-58.955z"/>
                  </svg>  
                </span>
                <span class="header__title"> {{ appTitle }} </span>
            </router-link>
           <div>
                <div v-if="!isLoading" class="search">
                    <form action="" @submit.prevent="processForm">
                        <input type="text" role="searchbox" autocomplete="on" 
                            aria-label="Search by Dog Breed" placeholder="Search by dog breed" 
                            name="search" class="search__input"
                            v-model="breedType" @keyup="removeError"
                        >
                        <svg aria-label="Search Icon" viewBox="0 0 24 24" class="search__view">
                            <path fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" 
                                d="M9.5 17a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm12.007 4.507l-6.694-6.694">
                            </path>
                        </svg>
                    </form>
                </div>
               <div v-if="isLoading" class="loading">Searching</div>
               <div v-if="isError" class="error">
                   <p>We are sorry but your search <b>"{{ breedType}}"</b> did not match any breed</p>
               </div>
           </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            appTitle: 'Woff',
            breedType : "",
            isLoading: false,
            isError: false
        }
    },
    computed:{
        doglist() {
            return this.$store.state.dogList;
        }
    },
    methods: {
        removeError() {
            this.isError = false;
        },
        processForm() {
            this.isLoading = true;
            let tempBreed = (this.breedType).toLowerCase()
            if (this.doglist.includes(tempBreed)) {
                // this.$router.push("/search?q="+tempBreed);
                this.$store.dispatch('getByBreed', tempBreed)
                    .then(() => {
                        this.isLoading = false;
                        this.$router.replace("/search");
                    })
            }
            else {
                this.isLoading = false;
                this.isError = true;
            }
        }
    }
};

</script>

<style lang="scss" scoped>
  header {
      padding:var(--spacing-20) 0;
      position: sticky;
      top:0;
      z-index:1;
      background-color:var(--white);
      @media (prefers-color-scheme: dark) {
          background-color:var(--grash-100);
      }
      svg {
          width:20px;
          height:20px;
          fill: var(--grash-300);
          @media (prefers-color-scheme: dark) {
            fill: hsl(90, 20%, 75%) 
        }
      }
  }

  .header {
      &__wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      &__title {
          font-weight:bold;
          font-size:1.5rem;
          color:var(--grash-300);

          @media(prefers-color-scheme: dark) {
              color:hsl(90, 20%, 75%) 
          }
      }
  }
  .search {
      transition: all .3s;
    //   padding: var(--spacing-10);
    @media screen and (max-width:540px) {
        max-inline-size: 220px;
    }
      input {
        background-color:transparent;
        font-size:16px;
        padding: 0 40px 0 15px;
        color: var(--grash-100);
        height:40px;
        width:100%;
        outline:none;
        border:1px solid var(--grash-500);
        border-radius:10px;
        background-color:var(--grash-500);

        @media(prefers-color-scheme: dark) {
            border-color:var(--grash-400);
            background-color: var(--grash-400);
            color: var(--grash-100);
        }

        &:focus {
            border-color:var(--grash-200);
            @media(prefers-color-scheme: dark) {
                border-color:var(--grash-500);
            }
        }
      }
      
      &__view {
        position: absolute;
        right: 10px;
        opacity: .4;
        top:calc(50% - 20px / 2);
        path{
            stroke: var(--grash-100);
            @media(prefers-color-scheme: dark) {
            stroke: var(--grash-100);
        }
        }
      }
  }

  .loading {  
      transition: all .3s;
    &:after {
        content:" ";
        display: inline-block;
        width:22px;
    height:22px;
    margin-left:10px;
    --c:radial-gradient(circle closest-side,currentColor 90%,var(--grash-200));
    background: 
    var(--c) 0    0,
    var(--c) 0    100%,
    var(--c) 100% 100%;
    background-size:5px 5px;
    background-repeat: no-repeat;
    animation:d1 1s infinite linear;
    }
  }

  @keyframes d1 {
    25% {background-position:100% 0   ,0 100%,100% 100%}
    50% {background-position:100% 0   ,0 0   ,100% 100%}
    75% {background-position:100% 0   ,0 0   ,0    100%}
    100%{background-position:100% 100%,0 0   ,0    100%}
}

.error {
    margin-top:var(--spacing-10);
}

</style>