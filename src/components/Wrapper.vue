<template>
  <div class="row p-2">
    <StreamOverlay class="col-md-6" />
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
</style>
