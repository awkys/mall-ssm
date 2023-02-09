const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmxkv4e/",
            name: "ssmxkv4e",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmxkv4e/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "跨境电商网站"
        } 
    }
}
export default base
