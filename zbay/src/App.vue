<template>
  <div id="app">
    <header id="header">
      <img src="./assets/Zbay.png" alt="Logo Zbay">
    
    <nav>
      <router-link to="/" >Accueil </router-link>
      <router-link to="/scrim" >Scrim </router-link>
      <router-link to="/scouting" >Scouting </router-link>

    </nav>
        </header>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

html {
  background: lightgrey;
}

#header img {
  max-width: 200px;
}
#header {
  background: teal;
}

a {
  color: white;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
