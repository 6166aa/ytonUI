import ytonUI from "@/index";
export default ({ Vue }) => {
    console.log("执行了吗", ytonUI);
    Vue.use(ytonUI);
    // eslint-disable-next-line vue/match-component-file-name
};
