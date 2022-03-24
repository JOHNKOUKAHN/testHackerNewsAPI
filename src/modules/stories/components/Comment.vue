<template>
<div class="comment-container">
    <span class="fw-bold">{{author}}</span>
    <p v-html="text"></p>
</div>  
</template>

<script>
export default {
    props:{
        author: {
            type: String
        },
        text:{
            type: String
        }
    }

}
</script>

<style>
.comment-container{
    padding-top: 1px;
    border-bottom: solid gray;
    font-size: rfs-fluid-value(1.125rem);
}

</style>