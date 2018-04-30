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
          type="submit">
          Add Request
        </b-btn>
        <b-btn
          variant="success"
          @click="nextRequest">
          Next Request
        </b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Interface',
  data () {
    return {
      request: null,
      requester: null
    }
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
    }
  }
}
</script>

<style>

</style>
