document.addEventListener("input", (e) => {

    let dataString = jsonToBase64(json);

    var url = new URL(window.location.href);
    url.searchParams.set("data" , dataString);
    window.history.pushState(null, null, url);

});