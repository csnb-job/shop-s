<template>
    <div id="app">
        <div id="container">
            <div class="container index">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    created() {
    }
};
</script>

<style scoped>
*,
#container:after,
:before {
  box-sizing: border-box;
}
div {
  display: block;
}
body,
button,
input,
select,
textarea {
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Sans-serif, \5b8b\4f53;
  *line-height: 1.5;
}
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
</style>
