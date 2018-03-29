<template>
  <div id="nav_barre">
    <div><icon name="angle-left" scale="3"> </icon> </div>
    <div id="bloc_titre"><h3>template utilisé</h3></div>
    <div><icon name="angle-right" scale="3"> </icon> </div>
  
<tbody>
        <tr v-for="temp of tabs" :key="temp.id">
            <td>{{temp.id}}</td>
            <td>{{temp.name}}</td>
            <td>{{temp.race}}</td>
            <td>{{temp.birthdate}}</td>
        </tr>
</tbody>

  </div>

  


</template>

<script>
import Icon from "vue-awesome/components/Icon";
import 'vue-awesome/icons'
 
export default {
name: 'Slide_templates',

components: {
    Icon,
    
  },
props: {
    tabs: {
            type: Array,
            required: true
  
    }
}
  
}
</script>

<style scoped>


 
#nav_barre{    
    height: 50px;
    background-color: antiquewhite;
    margin-left: auto;
  margin-right: auto;
  width: 30em;
  display: flex;
  justify-content: space-between;
}
h1{
    width: 50%;
    margin-left: auto;
  margin-right: auto;

}
#bloc_titre{
    width: 400px;
    text-align: center;
}
</style>
