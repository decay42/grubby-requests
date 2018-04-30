<template>
  <div class="col-lg-6 col-md-12 row p-2 m-auto">
    <StreamOverlay class="resize" />
    <Interface class="col-md-6" />
  </div>
</template>

<script>
import Interface from './Interface'
import StreamOverlay from './StreamOverlay'

export default {
  name: 'Wrapper',
  components: {
    Interface,
    StreamOverlay
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resize {
  resize: both;
  overflow: auto;
  padding: 1rem;
  width: 210px;
}
</style>
