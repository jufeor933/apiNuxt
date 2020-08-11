<template>
  <div>
    <b-navbar style="background-color: rgba(0,0,0,.05)" v-show="logged">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Tasks</b-nav-item>
        <b-nav-item to="/rick-and-morty">Rick and Morty API</b-nav-item>
        <b-nav-item @click="closeSession">Close Session</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <Nuxt />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['logged']),
  },
  methods: {
    closeSession() {
      this.$store.commit('SET_LOGGED', false);
      this.$router.push('/login');
    },
  },
};
</script>
