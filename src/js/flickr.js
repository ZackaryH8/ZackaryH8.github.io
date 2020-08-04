Vue.config.devtools = true;
Vue.prototype.window = window;

const app = new Vue({
    el: "#app",
    data() {
        return {
            url: "http://81.151.29.103:3000/api/getphotos",
            error: null,
            data: null,
        };
    },
    computed: {},
    methods: {
        getImages(url) {
            fetch(url, {
                method: "GET",
                headers: { "content-Type": "application/json" },
            }).then((res) => {
                res.json().then((json) => {
                    this.data = json;
                });
            });
        },
    },
    mounted() {
        this.getImages(this.url);
    },
});
