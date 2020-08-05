Vue.config.devtools = true;
Vue.prototype.window = window;

const app = new Vue({
    el: "#app",
    data() {
        return {
            url: "https://xentv.co.uk/express/api/getphotos",
            error: null,
            data: null,
            specificImage: null,
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
        getSpecificImage(id) {
            this.specificImage = this.data.photoset.photo[id];
        },
        closeModal() {
            this.specificImage = null;
        },
    },
    mounted() {
        this.getImages(this.url);
    },
});
