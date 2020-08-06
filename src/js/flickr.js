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
            cachedData: null,
            busy: false,
            specificImage: null,
            errMsg: null,
        };
    },
    computed: {},
    methods: {
        loadFirst(url) {
            fetch(url, {
                method: "GET",
                headers: { "content-Type": "application/json" },
            })
                .then((res) => {
                    res.json().then((json) => {
                        localStorage.setItem(
                            "cachedData",
                            JSON.stringify(json)
                        );
                        this.cachedData = json;
                        this.loadMore();
                    });
                })
                .catch((err) => {
                    this.errMsg =
                        "Sorry we can not process that request, please try again later!";
                });
        },

        loadMore() {
            const append = this.cachedData.photoset.photo.slice(
                this.data.length,
                this.data.length + this.limit
            );
            this.data = this.data.concat(append);
            this.busy = false;
            console.log("Loaded 16 more images");
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
                var d = document.documentElement;
                var offset = d.scrollTop + window.innerHeight;
                var height = d.offsetHeight;

                console.log("offset = " + offset);
                console.log("height = " + height);

                if (offset >= height - 100) {
                    console.log("At the bottom");
                    this.loadMore(); // call function here
                }
            };
        },
    },
    mounted() {
        this.scroll();

        if (
            localStorage.getItem("lastUpdate") == null ||
            new Date() - localStorage.getItem("lastUpdate") >= 1000 * 60 * 60
        ) {
            this.loadFirst(this.url);
            const currentTime = new Date().getTime();
            localStorage.setItem("lastUpdate", currentTime);
        } else {
            this.cachedData = JSON.parse(localStorage.getItem("cachedData"));
            this.loadMore();
        }
    },
});
