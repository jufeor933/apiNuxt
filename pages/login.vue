<template>
  <b-container style="max-width: 600px;">
    <b-form @submit.prevent="login">
      <b-form-group
        class="mt-5"
        id="input-group-1"
        label="Username:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="user"
          type="text"
          required
          autocomplete="off"
          :state="valid"
          placeholder="Enter username"
        ></b-form-input>
        <b-form-invalid-feedback :state="valid">
          Invalid username
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group>
        <b-btn variant="primary" :disabled="!valid">
          Login
        </b-btn>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  middleware: 'auth',
  data: () => ({
    user: '',
    valid: null,
  }),
  watch: {
    user: {
      immediate: true,
      deep: true,
      handler(val, oldVal) {
        if (typeof oldVal === 'undefined') {
          return;
        }

        if (!this.user || this.user.length < 4 || this.user !== 'juan') {
          this.valid = false;
          return;
        }

        this.valid = true;
      },
    },
  },
  methods: {
    ...mapMutations(['SET_LOGGED']),
    login() {
      if (!this.valid) {
        return;
      }

      this.SET_LOGGED(true);
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
