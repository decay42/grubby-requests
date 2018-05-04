<template>
  <div>
    <b-form @submit.prevent="_addRequest">
      <b-form-group label="Requester Name:">
        <b-input
           placeholder="Requester"
           v-model="requester" />
      </b-form-group>

      <b-form-group label="Request Text:">
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
          <icon name="plus"></icon>Add Request
        </b-btn>

        <b-btn
          variant="success"
          @click="nextRequest"
          title="Drop the current request and move the first upcoming request up into Current Request">
          <icon name="step-forward"></icon>Next Request
        </b-btn>

        <b-btn
           variant="danger"
           @click="resetRequests"
           title="Reset the request queue, clearing all current requests and everythign stored in localStorage">
          <icon name="sync-alt"></icon>Reset
        </b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/step-forward'
import 'vue-awesome/icons/sync-alt'

export default {
  name: 'Interface',
  computed: {
    ...mapGetters([
      'requests'
    ]),
    request: {
      ...mapMutations({
        set: 'setRequest'
      }),

      ...mapGetters({
        get: 'request'
      })
    },
    requester: {
      ...mapMutations({
        set: 'setRequester'
      }),

      ...mapGetters({
        get: 'requester'
      })
    }
  },
  methods: {
    ...mapMutations([
      'addRequest',
      'nextRequest',
      'clearRequests'
    ]),

    _addRequest () {
      this.addRequest({
        request: this.request,
        requester: this.requester
      })
    },

    resetRequests () {
      if (confirm('Are you sure you want to clear all requests currently in the queue?')) {
        this.clearRequests()
      }
    }
  }
}
</script>
