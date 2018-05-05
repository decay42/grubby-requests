<template>
  <div class="footer my-4 mx-auto py-4 px-1 border-top border-gray-light">
    <div class="small text-muted position-relative d-flex justify-content-between">
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
        </li>
      </ul>
    </div>
    <b-modal
       ok-only
       id="helpModal" 
       title="Help">
      <p>
        You can resize the green box with the little handle in the lower right corner of the box.
      </p>
      <p>
        Use "Color Key" filter in OBS rather than "Chroma Key".<br>
        Check <a href="https://i.imgur.com/iASK7OM.png" target="_blank">this image <icon name="external-link-alt" scale="0.7"/></a> for settings that I have tested myself and found to work quite well.
      </p>
      <p>
        The requests are saved in the browser's localStorage, so they will still be available after closing the tab/window. If you want to clear the queue, use the "Reset" button.
      </p>
      <p>
        If you have any problems or suggestions, feel free to create an issue on the GitHub repo.
      </p>
    </b-modal>
  </div>
</template>

<script>
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/external-link-alt'

export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
  max-width: 1000px;
}

.nav li:not(:last-child) {
  margin-right: 1rem;
}

.octicon {
  color: #c6cbd1;

  &:hover {
    color: #959da5;
  }

  &:active {
    color: #f08812
  }
}
</style>
