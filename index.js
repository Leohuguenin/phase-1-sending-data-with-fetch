    function submitData (name, email) {
    const userData = {
        name: name,
        email: email,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    };


    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function(object) {
            const body = document.querySelector("body");
            const p = document.createElement("p");
            p.textContent = object.id;
            body.appendChild(p);
          })
          .catch(function(error) {
            const body = document.querySelector("body");
            const p = document.createElement("p");
            p.textContent = error.message;
            body.appendChild(p);
          });
      }
      
      submitData("Leo", "leo@example.com");