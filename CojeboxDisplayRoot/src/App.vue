<template>
  <div id="app">
    <!-- <Slide_templates :tabs="tab"></Slide_templates> -->
    <!-- <Bloc_entete01 :tabsformats="tabsformats"  :tab="tab" v-on:action1="item => showItem(item)"></Bloc_entete01> -->
    <!-- <Bloc_entete01 :tabsformats="tabsfformats"  :tab="tab" v-on:onsubmit="item => showItem(item)"></Bloc_entete01> -->
    
    <router-view :tabsformats="tabsfformats"  :tab="tab" v-on:onsubmit="item => showItem(item)"></router-view>
    <!-- <router-view :tab="tab" ></router-view> -->
    
    <!-- <Menu :tab="tab" ></MENU> -->
    <!-- <HelloWorld/> -->
    
  </div>
</template>

<script>


import Slide_templates from './components/Slide_templates'
import HelloWorld from './components/HelloWorld'
import Bloc_entete01 from './components/Bloc_entete01'
import Menu from './components/Menu'
import 'vue-awesome/icons'

export default {
  name: 'App',
  components: {
    Bloc_entete01,
    HelloWorld,
    Slide_templates,
    Menu
  },
  data:() => ({

        tabsfformats:[
        {id:"0", name: " Medium rectangle", format:"300 x 250", idimage:"10", width : "300", height : "250" },
        {id:"1", name: " Large Rectangle", format:"336 x 280", idimage:"20", width : "336", height : "280" },
        {id:"2", name: " Leaderboard", format:"728 x 90", idimage:"30", width : "728", height : "90"},
        {id:"3", name: " Mobile", format:"320 x 50", idimage:"40", width : "320", height : "50"},
        {id:"4", name: " Large Mobile", format:"320 x 1000", idimage:"50", width : "320", height : "1000"},
        {id:"5", name: " Half Page", format:"300 x 600", idimage:"70", width : "300", height : "600"},
        {id:"6", name: " Wide Skyscraper", format:"160 x 600", idimage:"80", width : "160", height : "600"},
        {id:"7", name: " Skyscraper", format:"120 x 600", idimage:"90", width : "120", height : "600"},
        {id:"8", name: " Square", format:"250 x 250", idimage:"100", width : "250", height : "250"},
        {id:"9", name: " Small Square", format:"200 x 200", idimage:"110",  width : "200", height : "200"},
        {id:"10", name: " Main Banner", format:"468 x 60", idimage:"120", width : "468", height : "60"},
        {id:"11", name: " Portrait", format:"300 x 1050", idimage:"130", width : "300", height : "1050"},
        {id:"12", name: " Billboard", format:"970 x 250", idimage:"140", width : "970", height : "250"},
        {id:"13", name: " Large Leaderboard", format:"970 x 90", idimage:"150", width : "970", height : "90"},
        {id:"14", name: " Half Banner", format:"234 x 60", idimage:"150", width : "200", height : "222"},
        {id:"15", name: " Vertical Banner", format:"120 x 240", idimage:"150", width : "234", height : "60"},
        {id:"16", name: " Small Rectangle", format:"180 x 150", idimage:"150", width : "120", height : "240"},
        {id:"17", name: "Custom size", format:"Y x X", idimage:"150", width : "180", height : "150"},
      ],

    
          tab: [
              
              ["Medium rectangle", "300", "250" ],
              [" Large Rectangle","336","280" ],
              [" Leaderboard","728","90"],
              [" Mobile","320","50"],
              [" Large Mobile","320","1000"],
          ]
        
      }),
  methods: {
            show() {
                alert('kekchoz');
            },
            showItem(tab) {
                // console.log(tab);
                // console.log(this.tab)
                for( let x = 0; x < tab.length; x++){
                let elem = tab[x]
                this.tab.push(elem)
                }
                console.log(this.tab) //c'est à cette etape qu'il faut envoyer le tableau avec les selections avant de le vider en bas
                this.tab = []
            },
        }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>