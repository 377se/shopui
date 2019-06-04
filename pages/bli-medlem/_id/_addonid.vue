<template>
  <div 
    id="modal-addon">
    <div class="uk-modal-dialog uk-modal-body">
      <button 
        class="uk-modal-close-default" 
        type="button" 
        uk-close/>
      <h2 class="uk-modal-title">Default</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    '$route' (to, from){
        // Code
    },
    "$route.params.addonid"(value) {
      if(value!=undefined){
        var _this = this
        UIkit.modal('#modal-addon').show()
      }else{
        UIkit.modal('#modal-addon').hide()
      }
    }
  },
  mounted(){
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      var _this = this;
      UIkit.util.on('#modal-addon','hide',function(){
        console.log('hideme')
        if(_this.$route.params.addonid!=undefined)
          _this.$router.back()
      })
    })
  }
}
</script>
<style lang="scss">

</style>
