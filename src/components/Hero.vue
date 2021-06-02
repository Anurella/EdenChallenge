<template>
    <section class="hero">
        <div class="hero__img">
            
                <img sizes="(max-width: 1920px) 100vw, 19200px"
            srcset="../assets/images/heroimg_200.jpg 200w,
            ../assets/images/heroimg_658.jpg 658w,
            ../assets/images/heroimg_981.jpg 981w,
            ../assets/images/heroimg_1243.jpg 1243w,
            ../assets/images/heroimg_1400.jpg 1400w"
            src="../assets/images/heroimg_1920.jpg"
            alt="Two Beautiful Dogs"
            width="1400"
            height="962">
            
        </div>
        <div class="hero__text">
            <h1> {{ title }} </h1>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Hero',
        data() {
            return {
                title: 'Doggy Gram'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .hero {
      margin-top: var(--spacing-20);
      margin-bottom:var(--spacing-20);
      height:500px;

      @media screen and (max-width:540px) {
          height:230px;
      }
      &__img  {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        img {
            height:100%;
           @media screen and (min-wdith:1440px){
                object-fit: cover;
                object-position: top center;
           }
            // width:100%;
        }
      }

      &__text {
          display: grid;
          place-content: center;
          background-color: rgba(26, 29, 22, 0.3);
          height:100%;
          h1 {
              font-size:3rem;
              color:var(--grash-500);
          }
      }
  }
</style>