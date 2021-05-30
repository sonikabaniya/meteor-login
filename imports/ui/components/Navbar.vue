<template>
  <div data-spy="scroll" data-target=".navbar" data-offset="50">
    <nav class="navbar navbar-expand-lg tbg-light fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span role="button"
          ><i class="fa fa-bars" aria-hidden="true" style="color: #e6e6ff"></i
        ></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar ml-auto">
          <ul class="navbar-nav" v-if="!currentUser()">
            <li class="nav-item pr-4">
              <router-link to="/login">
                <a class="nav-link text-white">Login</a>
              </router-link>
            </li>
            <li>
              <button
                @click="signUp"
                class="btn btn-outline-light text-white my-2 my-sm-0"
              >
                Register
              </button>
            </li>
          </ul>
          <ul class="navbar-nav" v-if="currentUser()">
            <li>
              <button
                @click="home()"
                class="btn btn-outline-light text-white my-2 my-sm-0 mr-2 mb-sm-2"
              >
                Home
              </button>
            </li>
            <li>
              <button
                @click="logOut()"
                class="btn btn-outline-light text-white my-2 my-sm-0"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  name: "Navbar",

  methods: {
    signUp() {
      this.$router.push("/register").catch((err) => {
        if (
          err.name !== "NavigationDuplicated" &&
          !err.message.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          logError(err);
        }
      });
    },

    currentUser() {
      return Meteor.user();
    },
    logOut() {
      Meteor.logout(() => {
        this.$router.push("/");
      });
    },
    home() {
      
        this.$router.push("/");
      
    },
  },
};
</script>

<style scoped>
.logo-name {
  font-family: "Satisfy", cursive;
}
.tbg-light {
  background-color: black;
}
.btn-outline-light:hover {
  background: green;
  border: none;
}
.navbar-nav a:hover {
  color: white !important;
}
.toggle-button {
  background: black;
}
.navbar-toggler {
  width: 47px;
  height: 34px;
  background-color: black;
}
</style>