import {createStore} from 'vuex';
const store= createStore({
state(){
    return {
        memories:[
            {id:'m1',
            image:'https://th.bing.com/th/id/R.4eb9a26806333377d725375b1c67e24c?rik=NaTyPSR4vJNkDg&pid=ImgRaw&r=0%27',
            title:'A trip into the mountains',
            description:'it was a really nice trip !'
            },
            {id:'m2',
            image:"https://ukfilmlocation.com/images/location/thumbs/825x620/24156.jpg",
            title:'Surfing the sea side',
            description:'Feeling the cool breeze !'
            },
            {id:'m3',
            image:"https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg",
            title:'Good eating',
            description:'Really tasty  !'
            },
        ]
    };
},
mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description

    };
    state.memories.unshift(newMemory);
  }},
  actions:{
    addMemory (context, memoryData){
     context.commit('addMemory', memoryData);
     
    }
  },
getters:{
    memories(state){
        return state.memories;
    },
    memory(state) {
        return (memoryId) => {
            return state.memories.find((memory) => memory.id===memoryId)
        };
    }
}
});
export default store;
