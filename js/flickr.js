const url = "https://www.flickr.com/services/feeds/photos_public.gne";

function file_get_contents(filename) {
    fetch(filename)
        .then((resp) => resp.text())
        .then(function (data) {
            return data;
        });
}

const data = file_get_contents(url);

console.log(data);
