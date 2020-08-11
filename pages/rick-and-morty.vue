<template>
  <b-container>
    <div class="d-flex flex-wrap mt-1">
      <b-card
        v-for="character of characters"
        :key="character.id"
        :title="character.name"
        :sub-title="character.status"
        :img-src="character.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="m-1"
      >
        <b-card-text>{{ character.species }}</b-card-text>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: ['auth', 'fetch-api'],
  computed: {
    ...mapGetters('api', ['characters']),
  },
};
</script>
