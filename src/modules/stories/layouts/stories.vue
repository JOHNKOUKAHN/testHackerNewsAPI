<template>
    <Navbar/>
    <div class="row">
    <div class="col-md-4" >
        <StoryList/>
    </div>
    <div class="col-md-8">
        
    <router-view/>
    </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        
      Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
      StoryList: defineAsyncComponent( () => import('../components/StoryList.vue'))
    }
}
</script>