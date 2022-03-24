<template>
  <div class="story-container pointer"
    @click="$router.push({ name: 'story', params: { id: story.id}})">
    <p class="story-title text-start fw-bold">
    {{story.title}}
    </p>
    <p class="story-date text-end fw-light"> {{fomatDate}}</p>
    <div class="story-description">
          {{shortText}}
      </div>
  </div>
</template>

<script>
export default {
  props:{
    story: {
      type: Object,
    }
  },
  computed:{
    
    shortText() {
        return ( this.story.description.length > 130 )
            ? this.story.description.substring(0,130) + '...'
            : this.story.description
    },
    fomatDate(){
      let date = new Date(this.story.time*1000)
      return date.toDateString()
    }
        
  }

}
</script>

<style lang='scss' scoped>

    .story-container {
        border-bottom: 1px solid #2c3c50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: gray, $amount: 45);
        }
    } 
</style>