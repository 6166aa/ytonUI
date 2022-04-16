const componentsCtx = require.context("./components/", true, /\.(vue|js)$/);
const components = [];
componentsCtx.keys().forEach((fileName) => {
    const cp = componentsCtx(fileName).default ?? componentsCtx(fileName);
    //以_开头的vue文件将不会被导入
    if (/\/_\w+\.vue$/.test(fileName)) return;

    //没有设置name的vue文件也不会被导入
    if (!cp || !cp.name) return;
    components.push(cp);
});
console.log(components);
const install = function (Vue) {
    components.forEach((item) => Vue.component(item.name, item));
};

let result = { install };
components.forEach((item) => (result[item.name] = item));

export default { ...result };
