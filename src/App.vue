<!--  -->
<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
    name: '',
    components:{},
      setup() {
          console.log('1-开始创建组件-setup')
          const refData = ref();
          onBeforeMount(() => {
              console.log('2.组件挂载页面之前执行----onBeforeMount')
          })
          onMounted(() => {
              console.log('3.-组件挂载到页面之后执行-------onMounted')
          })
          return {
              ...refData,
          }

      }
  };
</script>
<style lang='less' scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>