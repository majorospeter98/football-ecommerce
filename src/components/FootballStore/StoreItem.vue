<template>
<div>
    
   <img :src="require(`../../assets/Teams/${img}`)" @click="openDetailsImg" >
 <p> {{team}} </p>
 <router-link class="button-9" :to="openDetails">Details</router-link>
</div>
</template>

<script>
export default {
props:['id','team', 'department','type','brand','img'],
computed:{
openDetails(){
    console.log(this.id);
    return 'store/' + this.id
},

},
methods:{
openDetailsImg(){
    this.$router.push('store/'+ this.id)
}
}
}
</script>

<style scoped>
a{

}
img{
    cursor: pointer;
}
</style>