const API_TARGET_PRE = "http://fundresearch.sp.gofund.cn/";
const API_TARGET_TEST = "http://fundresearch.ss.gofund.cn/";
const API_TARGET_MOCK = "http://sntp-mock.ss.gofund.cn/";

// const API_TARGET_TEST = 'http://client.go-goal.cn/'
let api_target = API_TARGET_PRE;
if (process.env.NODE_ENV !== "production") {
    api_target =
        process.env.NODE_ENV === "test" ? API_TARGET_TEST : API_TARGET_PRE;
    console.log("api target  is:", api_target);
}
module.exports = {
    devServer: {
        hot: true,
        open: true,
        proxy: {
            "/sntpapi": {
                target: api_target,
                changeOrigin: true,
                pathRewrite: {
                    "^/sntpapi": "/sntpapi",
                },
            },
            "/api": {
                target: 'http://zyfp-fof.ss.gofund.cn/',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/api",
                },
            },
            "/file_export": {
                target: api_target,
                changeOrigin: true,
                pathRewrite: {
                    "^/file_export": "/file_export",
                },
            },
            "/mock_api": {
                target: API_TARGET_MOCK,
                changeOrigin: true,
                pathRewrite: {
                    "^/mock_api": "/mock_api",
                },
            },
        },
    },
};
