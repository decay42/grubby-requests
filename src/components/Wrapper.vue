<template>
  <div class="container">
    <div class="row justify-content-center">
      <StreamOverlay class="resizable w-210"/>
      <Interface class="col-md-6"/>
      <Footer/>
    </div>
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
.resizable {
  resize: both;
  overflow: auto;
  padding: 1rem;
}

.w-210 {
  width: 210px;
  min-width: 176px;
}
</style>
