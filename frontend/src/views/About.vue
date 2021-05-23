<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="message in messages" :key="message">{{ message.msg }}</p>
    <h2>This is autodeployed</h2>
    <button @click="clickas">click</button>
    <p>{{ messages }} | {{ user }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      hello: null,
    };
  },
  computed: {
    ...mapState(["messages", "user"]),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(["fetchData", "fetchUser"]),
  },
  created() {
    this.fetchData();
    this.fetchUser();
    console.log(this.messages);
  },
};
</script>