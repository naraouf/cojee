<template>
 <div id="bloc1">
<section>
  
    <div id="bloc_formats">
      <div id="format" v-for="(item,index) of tab" :key="index">
                        
            
            <!-- <input type="checkbox" :name="'format' + item.id" :value="item.name" v-model="checkedFormats"> -->
            <div class="titre" scope="row"> {{item[0]}}</div>
            <div class="titre" scope="row"> {{item[1]}}</div>
            <div scope="row"> {{item[2]}}</div>
            
      </div>
  </div>
  


  <div style="clear : both"></div> 
  
    
</section>   
  </div>
</template>

<script>


export default {
  name: "Menu",
  props:{
       tab: {  //tableau venant du parent
            type: Array,
            required: true
  
    }
  },
  components: {
    
  },
  data: () => {
    return  {
   
    }
  },
  methods: {
    
  },
};
</script>

<style >


</style>
