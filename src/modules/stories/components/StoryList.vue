<template>
    <div class="story-scroll-area">
        <Story v-for="story in stories"
        :key="story.id"
        :story='story'/>
    </div>

</template>

<script>
import {defineAsyncComponent} from 'vue'
import getStories from '../helpers/getStories.js'
export default {
    data(){
        return{
            stories: []
        }
    },
    components:{
      Story: defineAsyncComponent( () => import('./Story.vue'))
    },
    created(){
        
        const {stories} = getStories();

        this.stories = stories;

    }
    
}
</script>


<style lang ="scss" scoped>

    .story-scroll-area {
        height: calc( 100vh - 70px);
        overflow: scroll;
        border-right-style: outset;
    }
     
 .story-scroll-area::-webkit-scrollbar {
  display: none;
}
</style>