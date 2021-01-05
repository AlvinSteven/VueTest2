<template>
  <div class="Appindex" id="test">
    <!--<pre v-text="$attrs"/>-->
    hello world!
    <a href="#test">Jump to test</a>

    <a href="#test" v-on:click="testError">Test Function</a>

    <a href="http://www.beian.miit.gov.cn/" class="footer">豫ICP备20019388号</a>
  </div>

</template>

<script>
export default {
  name: 'Appindex',
  methods: {
    testError () {
      console.log('test error')
      myUndefinedFunction5()// test error report
    }
  }
}
</script>

<style scoped>
  .footer {
    /*margin: 50px 0 0 20px;*/
    /*font-size: 100px;*/
    /*float: left;*/
    /*padding-bottom: 0;*/
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    /*margin: auto;*/
  }
</style>
