<template>
    <div>
        <h2>我是新闻页</h2>
        <ul>
            <li><router-link to="/news/strive">Strive</router-link></li>
            <li><router-link to="/news/vue">Vue</router-link></li>
            <li><router-link to="/news/react">React</router-link></li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="scss"></style>