<!-- src/components/Signup.vue -->
<template>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <div class="input-group">
      <input v-model="email" type="email" placeholder="Email" />
    </div>
    <div class="input-group">
      <input v-model="password" type="password" placeholder="Password" />
    </div>
    <div class="input-group">
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebaseConfig';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: 'UserSignup',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        toast("Wow so easy !", {
          position: 'top-right',
          autoClose: 3000,
        }); // ToastOptions
        this.email = '';
        this.password = '';
        this.$router.push('signup');
      } catch (error) {
        this.$t.error(error.message, {
          position: 'top-right',
          duration: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 2s;
}



input {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #0077ff;
}

.input-group {
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;
}

button {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #0077ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0051cb;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
