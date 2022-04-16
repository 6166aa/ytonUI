const { resolve } = require("path");
module.exports = {
    theme: "",
    title: "VuePress + Element",
    description: "VuePress搭建Element的组件库文档教程示例代码",
    base: "/",
    port: "8080",
    themeConfig: {
        nav: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "组件",
                link: "/comps/",
            },
        ],
        sidebar: {
            // 配置侧边栏部分
            "/comps/": ["/comps/", "/comps/select.md", "/comps/test.md"],
        },
    },
    head: [],
    // plugins: [require("./plugins/registerLib")],
    chainWebpack: (config) => {
        config.resolve.alias.set("@", resolve("src"));
    },
};
