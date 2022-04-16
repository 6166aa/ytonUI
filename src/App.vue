<template>
    <div id="app">
        <yt-button>测试</yt-button>
        <yt-button2>测试</yt-button2>
    </div>
</template>

<script>
import YtButton from "./components/button.vue";
import YtButton2 from "./components/button2";
export default {
    name: "App",
    components: { YtButton, YtButton2 },
};
</script>
