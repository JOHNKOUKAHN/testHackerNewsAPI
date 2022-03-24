<template>
  <div class="about" v-html="About">
  </div>
  <div v-for="story in stories" :key="story.id">{{story.kids.length}}</div>
</template>

<script>
import stories from '../helpers/getStories.js'
export default {
  data(){
    return{
      stories:[],
      About: `
    <button class="btn btn-primary">Algo</button>`
    }
  },
created(){

const {storiesArray} = stories();

console.log(storiesArray)
this.stories = storiesArray;
}

}
</script>
