<template>
  <div class="accept-container">
    <p>this is home</p>
    <dialog-test msg="hello"></dialog-test>
  </div>
</template>

<script>
  import dialogTest from '@/components/DialogTest'

  export default {
    data () {
      return {
      }
    },
    components: {
      dialogTest
    }
  }
</script>
<style scoped>

</style>
