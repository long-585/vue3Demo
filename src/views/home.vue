<!--  -->
<template>
  <div>{{refData}}
    <div @click="updateEmp">提交</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name: 'HomePage',
    components:{},
      setup() {
          let i = 0;
          console.log('1-开始创建组件-setup')
          let refData = ref('欢迎进入VUE3');
          onBeforeMount(() => {
              console.log('2.组件挂载页面之前执行----onBeforeMount')
          })
          onMounted(() => {
              console.log('3.-组件挂载到页面之后执行-------onMounted')
          })
          function updateEmp() {
            i++
            refData = '欢迎进入VUE3'+i;
            refData = ref(refData)
            console.log(refData);
          }
          return {
              refData,
              updateEmp
          }

      }
  };
</script>
<style lang='less' scoped>
</style>