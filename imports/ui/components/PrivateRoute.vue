<template>
  <div class="container-fluid m-0 p-0">
    <div class="top-bar">
      <navbar />
    </div>
    <div
      class="home-content d-flex justify-content-center align-items-center" id="home"
      :style="image"
    >
      <div class="text-background w-50 mt-5 p-4">
        <div class="home-content-text text-white text-center">
          <h3>Hi, team Keela </h3>
          <h5>
            This is private route, only logged user can visit here.
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.home-content {
  height: 100vh;
  overflow-x: hidden;
}
.text-background {
  background-color: black;
}
</style>