<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <StreamOverlay/>
        <Interface class="col-md-6"/>
      </div>
    </div>
    <div class="container">
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