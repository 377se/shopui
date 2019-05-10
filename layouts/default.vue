<template>
  <div>
    <LFCHeader></LFCHeader>

    <nuxt/>

    <OffscreenMenu></OffscreenMenu>
  </div>
</template>

<script>
import LFCHeader from "@/components/lfc/LFCHeader";
import OffscreenMenu from "@/components/lfc/menu/OffscreenMenu";

export default {
  components: {
    LFCHeader,
    OffscreenMenu
  }
};
</script>

<style lang="scss">
</style>
