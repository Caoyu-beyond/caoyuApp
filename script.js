var app = new Vue({
  el: '#app',
  data: {
    textInput:"",
    todos:[]
  },
  methods: {
  	enters:function(){
  		if(this.textInput.trim()){
  			this.todos.push({
          text:this.textInput,
          isDelete:false,
          isState:false,
          isFinish:false
        });
  			this. textInput = ""
  		}
  	},
    enteritem:function(todo){
       todo.isDelete = true
    },
    leaveitem:function(todo){
       todo.isDelete = false
    },
    checkitem:function(todo){
      todo.isState = !todo.isState;
      if(todo.isState){
        todo.isFinish = true;
      }else{
        todo.isFinish = false;
      }
    },
    deltxt:function(ind){
      this.todos.splice(ind,1)
    }
  }
})





// 注册
/*Vue.component("my-component",{
	template:"<div>Hi Hello Vue!</div>"
})

// 注册根实例
 new Vue({
 	el:"#app-7",

 })*/

/* var Child = {
  template: '<h1>A custom component!</h1>'
}
new Vue({
  // ...
  el:"#app-7",
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
})*/
//var data = { counter: 0 }
/*Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return {
    	counter:0
    }
  }
})
new Vue({
  el: '#example-2'
})*/
