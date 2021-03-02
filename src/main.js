import Vue from 'vue';
//test jsx support
const Ctor = Vue.extend({
    render(h){
        return <div>hahah</div>
    }
})
import CompTest from './component-test'
new Vue({
    el:'#app',
    components:{CompTest},
    render(h){
        return h('div',[
            h(Ctor),
            h(CompTest)
        ]);
    }
})
