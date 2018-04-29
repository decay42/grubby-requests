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
           placeholder="Request"
           v-model="request"
           :rows="2" />
      </b-form-group>
      <b-btn
         variant="primary"
         type="submit">
        Add Request
      </b-btn>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Interface',
  data () {
    return {
      request: '',
      requester: ''
    }
  },
  methods: {
    ...mapMutations([
      'addRequest'
    ]),

    _addRequest () {
      this.addRequest({
        request: this.request,
        requester: this.requester
      })
    }
  }
}
</script>

<style>

</style>
