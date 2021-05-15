<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ hello }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hello: "",
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