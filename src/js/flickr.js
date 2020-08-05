Vue.config.devtools = true;
Vue.prototype.window = window;

const app = new Vue({
    el: "#app",
    data() {
        return {
            url: "https://xentv.co.uk/express/api/getphotos",
            error: null,
            limit: 16,
            data: [],
            busy: false,
            specificImage: null,
        };
    },
    computed: {},
    methods: {
        loadMore(url) {
            console.log("Adding 10 more data results");
            this.busy = true;
            fetch(url, {
                method: "GET",
                headers: { "content-Type": "application/json" },
            }).then((res) => {
                res.json().then((json) => {
                    const append = json.photoset.photo.slice(
                        this.data.length,
                        this.data.length + this.limit
                    );
                    this.data = this.data.concat(append);
                    this.busy = false;
                });
            });
        },
        getSpecificImage(id) {
            this.specificImage = this.data[id];
        },
        closeModal() {
            if (this.specificImage) {
                this.specificImage = null;
            }
        },
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow =
                    Math.max(
                        window.pageYOffset,
                        document.documentElement.scrollTop,
                        document.body.scrollTop
                    ) +
                        window.innerHeight ===
                    document.documentElement.offsetHeight;

                if (bottomOfWindow) {
                    console.log("Hi");
                    this.loadMore(this.url);
                }
            };
        },
    },
    mounted() {
        this.scroll();
        this.loadMore(this.url);
    },
});
