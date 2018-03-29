<template>

  <div id="bloc1">
    
<section>
  <form @submit.prevent="onSubmit(tab)">
    <div id="bloc_formats">
      <div id="format" v-for="(item,index) of tabsformats" :key="index">
            <div id="bloc_img"><img scope="row" src="../assets/logo.png">            
            </div>
            <input type="checkbox" :name="'format' + item.id" :value="item.name" v-model="checkedFormats">
            <div class="titre" scope="row"> {{item.name}}</div>
            <div class="titre" scope="row"> {{item.format}}</div>
            <div scope="row"> {{item.supplement}}</div>
            
      </div>
  </div>
  <input id="bouton" type="submit" value="Commencer">
</form>
<!-- <ul>
  <h1>ici</h1>
    <li v-for="(item,index) of tab" :key="index"
    @click="action1(tab)" >
         {{item[0]}}
    </li>
</ul> -->
  <div style="clear : both"></div> 
  
    
</section>   
  </div>
  
</template>


<script>
import Menu from './Menu'

export default {
  name: 'Component1',
  components: {
    Menu,
  },

  props:{
       tabsformats: {  //tableau venant du parent
            type: Array,
            required: true
  
    }
  },
  
  data () {

    return {
        checkedFormats: [],
       
      msg: 'Choix des formats',
    
      tab: [], //contient tous les templates selectionnés avec leur format
      element: [], // un seul template qui contient nom, width, height
    }
  },
    
    methods:{
        // la méthode onSubmit() est appelée lorsqu'on submit le formulaire    
        onSubmit(tab){        
                                            //    console.log(this.checkedFormats);  // tableau des noms  checked 
                                            //     console.log(this.tabs_format[0].name);
                                                // console.log(this.tabs_format.length)
                // console.log(this.tabsformats.length)

            for( let x = 0; x < this.tabsformats.length; x++){
            let check_name = this.checkedFormats[x]
                for( let i = 0; i < this.tabsformats.length; i++){
                    let tab_name = this.tabsformats[i].name
                    if(check_name == tab_name){
                        this.element.push(this.tabsformats[i].name)
                        this.element.push(this.tabsformats[i].width)
                        this.element.push(this.tabsformats[i].height)
                        this.tab.push(this.element)
                        this.element = []
                        
                    }
                }
            }
            // console.log(this.tab[2])
            
            /**
             * On utilise la méthode $emit pour dire à notre component
             * d'émettre un event vers son parent. Le nom de l'event est
             * le premier argument, les arguments suivant sont les paramètres
             * passés par l'event
             */
            
          this.$emit('onsubmit', tab);
          //  vider ici le tableau----------------------------------------------------
          this.$router.push({name:'Menu', params: {nin:"this.tab"}})
          console.log(this.tab)
          this.tab = []
        },
        // action1(tab){
        //   this.$emit('action1', tab);
        // },
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items:center;
/* background-color: red; */
 
}

#bloc_formats{
display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  /* background-color: #42b983; */

}
#format{
  width: 135px;
  height: 176px;
  background-color:#6079e1;
  margin: 10px;
  border-radius: 20px;
}

#bloc_img{
  width: 90px;
  height: 100;
  margin-left: auto;
  margin-right: auto;
  width: 5em;
  margin-bottom: 10px;
}
img { max-width: 100% }

section{  
  height: 100%;
 
   margin-left: auto;
   margin-right: auto;
   width: 55vw;
   background-color: #3b5ff3;

}

#bloc1{
  width: 100%;
  background-color: #3b5ff3;

}

#bouton{
border-radius: 44px;
width: 117px;
height: 45px;
background-color: #6079e1;
box-shadow: -1px 3px 0px #575555;
}
#bouton:hover{
background-color: #3a5ce4;
}
#bouton:active{
  box-shadow: 0px 0px 0px #aaa;
}
.titre{
  color:white;
}

@supports (-ms-ime-align:auto) {   /*pour appliquer ce style uniquement pour edge*/
    #bouton {
        width: 250px;
    }
}














h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
