<template>

  <div>
    <WindowLittle></WindowLittle>
    <WindowsError></WindowsError>
    <NavigationBar></NavigationBar>
  </div>
</template>
<script>
import NavigationBar from './components/NavigationBar.vue';
import WindowLittle from './components/WindowLittle.vue';
import WindowsError from './components/WindowsError.vue';

export default {
  components: { NavigationBar, WindowLittle, WindowsError }
}
</script>
<style></style>
