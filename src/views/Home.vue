<template>
  <div class="home">

    <button class="btn btn-primary"
    @click="$router.push({ name: 'no-story'})">Stories</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    

  }
}
</script>
