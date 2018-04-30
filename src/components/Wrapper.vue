<template>
  <div class="container">
    <div class="row justify-content-center">
      <StreamOverlay class="resizable w-210"/>
      <Interface class="col-md-6"/>
    </div>
    <div class="footer m-4 p-4 small border-top border-gray-light text-muted">
      <div class="position-relative d-flex justify-content-between">
        <ul class="nav d-flex flex-wrap">
          <li>&copy; 2018 decay42</li>
        </ul>
        <a 
           class="octicon" 
           href="https://github.com/decay42/grubby-requests"
           title="View on GitHub"
           target="_blank">
          <icon name="brands/github" scale="1.5"/>
        </a>
        <ul class="nav d-flex flex-wrap">
          <li>
            <a v-b-modal.helpModal href="#">Help</a>
            <b-modal
               ok-only
               id="helpModal" 
               title="Help">
              <p>
                You can resize the green box with the little handle in the lower right corner of the box.
              </p>
              <p>
                The requests are saved in the browser's localStorage, so they will still be available after closing the tab/window. If you want to clear the queue, use the "Reset" button.
              </p>
              <p>
                If you have any problems or suggestions, feel free to create an issue on the GitHub repo.
              </p>
            </b-modal>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Interface from './Interface'
import StreamOverlay from './StreamOverlay'

import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons/brands/github'

export default {
  name: 'Wrapper',
  components: {
    Interface,
    StreamOverlay,
    Icon
  },
  data () {
    return {
    }
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

.nav li:not(:last-child) {
  margin-right: 1rem;
}

.octicon {
  color: #c6cbd1;

  &:hover {
    color: #959da5;
  }
}
</style>
