<template>
<div>
<button v-on:click="Increase()"> Increase Counter </button>
<button v-on:click="Decrease()"> Decrease Counter </button>
<br>{{count}}
</div>
</template>

<script>
export default{
    data(){
        return{
            count: 0
        }
    },
    methods:{
        Increase: function(){
            this.count = this.count+1;
            return this.count;
        },
        Decrease: function(){
            if(this.count==0){
                return this.count;
            }
            else{
                this.count = this.count-1;
                return this.count;
            }
        }
    }   
}
</script>

<style scoped>
button{
font-family : ' Avenir',
Helvetica , Arial , sans serif;
text-align : center;
color: #bb0d38a8;
}
</style>