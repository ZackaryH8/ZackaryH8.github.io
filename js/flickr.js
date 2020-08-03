Vue.config.devtools = true;
Vue.prototype.window = window;

const app = new Vue({
    el: "#app",
    data() {
        return {
            url:
                "https://www.flickr.com/services/feeds/photos_public.gne?id=153939265@N07&format=json&callback=flickr_callback",
            error: null,
            data: null,
        };
    },
    computed: {},
    methods: {
        jsonpRequest(url, callback) {
            window["jsonFlickrFeed"] = function (data) {
                delete window["jsonFlickrFeed"];
                document.body.removeChild(script);
                callback(data);
            };

            const script = document.createElement("script");
            script.src = url;
            document.body.appendChild(script);
        },
        imagesCallback(data) {
            this.data = data;
            console.log(this.data);
        },
    },
    mounted() {
        this.jsonpRequest(this.url, this.imagesCallback);
    },
});
