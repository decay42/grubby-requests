<template>
  <div>
    <b-form @submit.prevent="_addRequest">
      <b-form-group
         label="Requester Name:">
        <b-input
           placeholder="Requester"
           v-model="requester" />
      </b-form-group>

      <b-form-group
         label="Request Text:">
        <b-form-textarea
           required
           placeholder="Request"
           v-model="request"
           :rows="2" />
      </b-form-group>

      <div class="text-nowrap">
        <b-btn
          variant="primary"
          type="submit"
          title="Add a request to the request queue">
          Add Request
        </b-btn>

        <b-btn
          variant="success"
          @click="nextRequest"
          title="Drop the current request and move the first upcoming request up into Current Request">
          Next Request
        </b-btn>

        <b-btn
           variant="warning"
           @click="saveRequests"
           title="Save the current request queue in the browser's localStorage, to have them available even after closing this window">
          Save requests
        </b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Interface',
  data () {
    return {
      request: null,
      requester: null
    }
  },
  computed: {
    ...mapGetters([
      'requests'
    ])
  },
  methods: {
    ...mapMutations([
      'addRequest',
      'nextRequest'
    ]),

    _addRequest () {
      this.addRequest({
        request: this.request,
        requester: this.requester
      })
      this.request = null
      this.requester = null
    },

    saveRequests () {
      localStorage.setItem('requestQueue', JSON.stringify(this.requests))
    }
  }
}
</script>

<style>

</style>
