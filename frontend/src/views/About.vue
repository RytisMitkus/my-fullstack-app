<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="hi in data" :key="hi">{{ hi }}</p>
    <h2>This is autodeployed</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hello: {},
    };
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get("/api");
      this.hello = data.hello;
      console.log(data);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>