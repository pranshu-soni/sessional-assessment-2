document.querySelector('#button').addEventListener('click', () => {
    // API call
    const xhr = new XMLHttpRequest()
    const value = document.querySelector('#search').value

    const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&q=${value}&maxResults=50`

    xhr.open('GET', url, true)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText)

            let list = document.getElementById('list');
            let output = ''
            for(key in response) {
                output += `
                
                <li>Name: ${response[key].name}</li>
                <li>Username: ${response[key].username}</li>
                <li>Email-id: ${response[key].email}</li>
                <li>Street-Address: ${response[key].address.street}</li>
                <li>Suite: ${response[key].address.suite}</li>
                <li>City: ${response[key].address.city}</li>
                <li>Zipcode: ${response[key].address.zipcode}</li>
                <li>Latitude: ${response[key].address.geo.lat}</li>
                <li>Longitude: ${response[key].address.geo.lng}</li>
                <li>Phone-number: ${response[key].phone}</li>
                <li>Website: ${response[key].website}</li>
                <li>Company-Name: ${response[key].company.name}</li>
                <li>Company-CatchPhrase: ${response[key].company.catchPhrase}</li>
                <li>Company-BS: ${response[key].company.bs}</li>
                
            `
            }
            list.innerHTML=output;
        }
    }

    xhr.send()
}) 



document.querySelector('#button1').addEventListener('click', () => {
    // API call
    const xhr = new XMLHttpRequest()

    const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

    xhr.open('GET', url, true)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText)

            let list = document.getElementById('list');
            let output = ''
            for(key in response) {
                output += `
                
                <li>${response[key].name}</li>
                
            `
            }
            list.innerHTML=output;
        }
    }

    xhr.send()
}) 