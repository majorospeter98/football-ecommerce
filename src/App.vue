<template>
<div>
  <the-header></the-header>
 <router-view></router-view>

</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'


export default {
  name: 'App',
  components: {
    TheHeader
  },
     
  
}
</script>

<style>

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  scroll-behavior: smooth;
 font-family: "Days One", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.65;
 }
 :root{
  --black:#1c1717;
  --red:#d5283d;
  scrollbar-color:  var(--red) var(--black);
  scrollbar-width: thin;
 }
body{
  background-color: var(--black);
}
.container{
  width:80%;
  max-width: 1200px;
  margin:0 auto;
}
a{
  text-decoration:none;
  border:none;
  
}
.router-link-active{
  border-bottom:2px solid white;
  padding:0.5rem;

}

img{
  max-width: 100%;
  height:220px;
  width:260px;
 
}

.mg-top{
  margin-top:2rem;
}
/* CSS */
.button-9 {
  background-color: var(--red);
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
   color: #fff;
  cursor: pointer;
  font-size: 1.3rem;
  height: 44px;
 display:flex;
 justify-content: center;
 align-items: center;
   outline: none;
  overflow: hidden;
    position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
    width: 100%;
}
.button-9:hover{
  background: black;
  color:red;
  border: 1px red solid;
  text-decoration: none;
 }


</style>
