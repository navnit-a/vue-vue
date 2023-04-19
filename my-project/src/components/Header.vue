<!-- src/components/Header.vue -->
<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Logo</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
header {
  background-color: #0077ff;
  padding: 0.5rem 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links a {
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
