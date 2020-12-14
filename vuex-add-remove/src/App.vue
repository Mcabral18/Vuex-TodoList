<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(100, 99, 99);
  height: 5rem;
}
#nav a {
  color: #fff;
  padding: 0 2rem;
}
.router-link-exact-active {
  color: red !important;
}
</style>
