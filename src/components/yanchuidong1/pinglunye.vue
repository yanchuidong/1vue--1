<template>
    <div class="pinglun">
        sadasdasdasdasdsda
     123{{a}}
    </div>
</template>

<script>

    export default {
        name: "pinglunye",
      data(){
          return{
            a:{}
          }
      },
      created() {
          console.log(this.$route.params.id)
      }
    }
</script>

<style scoped>

</style>
