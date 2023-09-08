// 1. GET request using fetch()
fetch("https://jsonplaceholder.typicode.com/users")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {

  // 2. Create a variable to store HTML table headers
    let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Email</th><th>address</th> <th>Phone</th><th>Website</th><th>Company</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
        <td>${user.id}</td>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>Street:${user.address.street}
        </br>
        Suite:${user.address.suite}
        </br>
        City:${user.address.city}
        </br>
        Zipcode:${user.address.zipcode}
        </br>
        Geo:${user.address.geo.lat+", "+ user.address.geo.lng}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>Name:${user.company.name}
            </br>
         CatchPhrase:${user.company.catchPhrase}
         Bs:${user.company.bs}
        </td>
      </tr>`;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
  });

