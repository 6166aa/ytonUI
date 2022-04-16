const button = require("@/components/button");
module.exports = {
    enhanceAppFiles({ Vue }) {
        console.log("执行了吗");
        Vue.component(button.name, button);
    },
    globalUIComponents: button.name,
};
