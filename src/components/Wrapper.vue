<template>
  <div class="container">
    <div class="row justify-content-center">
      <StreamOverlay/>
      <Interface class="col-md-6"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Interface from './Interface'
import StreamOverlay from './StreamOverlay'
import Footer from './Footer'

export default {
  name: 'Wrapper',
  components: {
    Interface,
    StreamOverlay,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
