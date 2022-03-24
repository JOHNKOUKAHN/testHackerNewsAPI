<template>
    <iframe class="details-view" :src="url"></iframe> 
</template>

<script>
export default {
    props:{
        url:{
            type:String
        }
    }
}
</script>

<style>

.details-container{
    height: 100%;
}
.details-view{
    overflow: hidden;
    height: 100%;
    width: 100%;
}
</style>