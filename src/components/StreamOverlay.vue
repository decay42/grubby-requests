<template>
  <div class="chroma p-2">
    <p class="mb-1">Current Request:</p>
    <ul class="pl-2">
      <li v-if="requests[0]">
        <i>{{ requests[0].requester || 'Anonymous' }}</i>: {{ requests[0].request }}
      </li>
      <li v-else>
        Currently no requests
      </li>
    </ul>
    <p class="mb-1">Upcoming Requests:</p>
    <ul class="pl-2">
      <div v-if="requests[1]">
        <li v-for="request in requests.slice(1)" :key="request.id">
          <i>{{ request.requester || 'Anonymous' }}</i>: {{ request.request }}
        </li>
      </div>
      <div v-else>
        <li>No pending requests</li>
      </div>
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

<style scoped lang="scss">
.chroma {
  background-color: #00b140;
  color: #FDD017;
  font-weight: bold;
  text-shadow: #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px, #000 0 0 1px;
  -webkit-font-smoothing: antialiased;
}

ul {
  list-style-type: none;

  li {
    text-indent: -0.9rem;
    padding-left: 0.9rem;
    font-size: 90%;
  }

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}
</style>