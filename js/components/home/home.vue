<template>
  <div>
    <div>
      <p>
        Este ano tive a oportunidade de comecar a trabalhar com voces na firework.
      </p>
      <p>
        Me sinto muito grato por ter essa oportunidade e quis fazer uma pequena lembrancinha de natal / ano novo para
        voces.
      </p>
      <p>
        Obrigado por me aceitarem aqui e espero que em 2021 possa contribuir nos nossos projetos.
      </p>
      <p>
        Fiz um jogo curto usando Vue.js e espero que gostem.
      </p>
      <p>
        Abraços e Boas festas!
      </p>
      <p>Bessa</p>
    </div>

    <br />

    <div>
      <p>Um abraco e sucesso em 2021 para todos nós!</p>
    </div>

    <br />
    <div class="flex">
      <router-link class="gg" to="/game"> Acessar o jogo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
// https://garywoodfine.com/using-vuex-and-vue-router-in-a-vue-project/
</script>

<style scoped>
p {
  font-size: large;
  text-align: center;
  margin-left: 3rem;
  margin-right: 3rem;
}

* {
  font-family: Arial, Helvetica, sans-serif;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gg {
  margin-top: 1em;
  padding: 3rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 11px;
  background-color: orange;
  text-decoration: none;
  font-weight: bolder;
  font-size: x-large;
  color: white;
  box-shadow: -20px 20px 60px #d9d9d9, 20px -20px 60px #ffffff;
}

.gg:active {
  background-color: white;
  color: orange;
}
</style>
