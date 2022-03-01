let myObj = {
    url: "https://randomuser.me/api/?results=5"
}

let request = obj => {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        //headers
        if (xhr.headers) {
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key])

            });
        }
        //onload
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        }
        //onerror
        xhr.onerror = () => {
            reject(xhr.statusText)
        }
        //send
        xhr.send(obj.body)

    })
}

let buildHtml = function (data) {
    let users = JSON.parse(data);
    let html = "";

    users.results.forEach(user => {
        html += `
        <div>
            <img src="${user.picture.medium}">
        </div>
        <div>
        ${user.name.title}
        ${user.name.first}
        ${user.name.last}
        </div>
        `;
    });
    document.querySelector("#users").innerHTML = html;

    return Promise.resolve("Html is loaded")
}

request(myObj)
    .then(buildHtml)
    .then(msg => {
        console.log(msg);
    })
    .catch(error => {
        console.log(error);
    })