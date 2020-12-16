<template>
  <div class="status-footer">
    <span v-if="status === READY">Clique em uma carta para comecar</span>
    <span v-if="status === PLAYING">Ache os pares</span>
    <span v-if="status === PASS">
      Feliz Natal & 2020 - Abraços Gabriel Bessa :) -
      <a v-if="status === PASS" href @click.prevent.stop="reset">Jogar Novamente</a>
    </span>
    <span class="elapsed">{{ elapsedMs }} s</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { STATUS } from '../../vuex/store/statusEnum'

export default {
  data() {
    return STATUS
  },

  computed: {
    ...mapGetters(['status', 'elapsedMs']),
  },

  methods: {
    ...mapActions(['reset']),
  },
}
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
a {
  text-decoration: none;
}
.elapsed {
  position: absolute;
  right: 10px;
  font-size: 15px;
  font-weight: normal;
}
</style>
