<template>
  <div class="chroma">
    <p>Current Request:</p>
    <ul>
      <li v-if="requests[0]">
        {{ requests[0].requester }}: {{ requests[0].request }}
      </li>
      <li v-else>
        Currently no requests
      </li>
    </ul>
    <p>Next Requests:</p>
    <ul>
      <li v-for="request in requests.slice(1)" :key="request.id">
        {{ request.requester }}: {{ request.request }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StreamOverlay',
  computed: {
    ...mapGetters([
      'requests'
    ])
  }
}
</script>

<style scoped>
  .chroma {
    background-color: #00b140;
    color: #FDD017;
    font-weight: bold;
    text-shadow: #000 0 0 1px, #000 0 0 1px, #000 0 0 1px;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style-type: none;
  }

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
</style>