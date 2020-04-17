const xmlReq = async (url) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
    return await new Promise(function (resolve, reject) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhttp.responseXML);
            }
        };
    });
}

export default xmlReq