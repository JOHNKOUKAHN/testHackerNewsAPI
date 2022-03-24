<template>
<div v-if="story" class=" story-view-container">
    <div class="details-container">
     <Details :url="story.url"/>
    </div>
    <div class="comments-container">
    <span class="fw-bolder fs-2">Comments</span>
    <Comment 
        v-for="comment in comments" 
        :key="comment.id"
        :author="comment.by"
        :text="comment.text"/>
    </div>
</div>
</template>


<script>

import {defineAsyncComponent} from 'vue'
import getComments from '../helpers/getComments.js'
import getStoryByID from '../helpers/getStoryByID.js'
export default {
    props:{
        id:{
            type: String,
            required: true
        }
    },
    components:{
        
      Comment: defineAsyncComponent( () => import('../components/Comment.vue')),
      Details: defineAsyncComponent( () => import('../components/Details.vue'))
    },
    data(){
        return{
            comments : [],
            details: '',
            story: null
        }
    },
    methods:{
        loadData(){

            const {story} = getStoryByID(this.id);
            if ( !story ) return this.$router.push({ name: 'no-story' })
            this.story = story;
            
            const {commentsArray} =  getComments(this.id);
            this.comments = commentsArray;
        }
    },
    created(){
        this.loadData();
    },
    watch: {
        id() {
            this.loadData();
        }
     }
}
</script>
<style lang="scss" scoped>
.story-view-container {
        height: calc( 100vh - 70px);
        overflow: scroll;
    }
 
 .story-view-container::-webkit-scrollbar {
  display: none;

}
</style>