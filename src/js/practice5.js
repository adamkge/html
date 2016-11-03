var input = document.getElementById("input");
input.addEventListener("click", loadThatShit);

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onloadend = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        console.log("valami");
        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}
function loadThatShit() {
    get('data.json').then(function (response) {
        document.getElementById("input").innerHTML = response;
        return response;
    }).then(function(response){
        document.getElementById("input2").innerHTML = response;
        return response;
    }).then(function (response) {
        document.getElementById("input3").innerHTML = response;
    }).then(function () {
        alert("Done!");
    });
}

