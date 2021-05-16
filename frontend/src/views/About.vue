<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="item in hello" :key="item">{{ item.msg }}</p>
    <h2>This is autodeployed</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      hello: null,
    };
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get("/api");
      this.hello = data.greetings;
      console.log(data.greetings);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>