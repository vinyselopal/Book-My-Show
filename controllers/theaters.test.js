const { json } = require("express");

// valid tests
test('get single theater', async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2NzQwNDE1MjR9.Cr5_cDDp5GDDhqLbL4hBKYJZCKvloQnMSn0Y0fw2dTI");


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("http://localhost:8000/theaters/1", requestOptions)

    const theater = await res.json()

    expect(res.status).toBe(200)
    const data = {
        "address": "A1/bla",
        "city": "bangalore",
        "id": "1",
        "name": "theater1"
    }
    expect({ ...theater }).toStrictEqual(data)
})

test('get many theaters', async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2NzQwNDE1MjR9.Cr5_cDDp5GDDhqLbL4hBKYJZCKvloQnMSn0Y0fw2dTI");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("http://localhost:8000/theaters/", requestOptions)

    const theaters = await res.json()

    expect(res.status).toBe(200)
    expect(theaters.length).toBe(3)
})

test('post theaters valid', async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2NzQwNDE1MjR9.Cr5_cDDp5GDDhqLbL4hBKYJZCKvloQnMSn0Y0fw2dTI");

    var raw = JSON.stringify({
        "theater": {
            "name": "mehulkumar",
            "city": "anand",
            "address": "hood"
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const res = await fetch("http://localhost:8000/theaters/", requestOptions)
        
    const id = await res.json()


})

test('delete theater valid', async () => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2NzQwNDE1MjR9.Cr5_cDDp5GDDhqLbL4hBKYJZCKvloQnMSn0Y0fw2dTI");

var raw = JSON.stringify({
  "theater": {
    "name": "mehulkumar",
    "city": "anand",
    "address": "hood"
  }
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const res = await fetch("http://localhost:8000/theaters/1", requestOptions)

const resBody = await res.json()

expect(res.status).toStrictEqual(200)

})

test('update theater valid', async () => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2NzQwNDE1MjR9.Cr5_cDDp5GDDhqLbL4hBKYJZCKvloQnMSn0Y0fw2dTI");

var raw = JSON.stringify({
  "newTheater": {
    "name": "a1",
    "city": "abc",
    "address": "hood"
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const res = await fetch("http://localhost:8000/theaters/1", requestOptions)

expect(res.status).toBe(200)
})

// invalid tests
test('get single theater invalid', async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2NzQwNDE1MjR9.Cr5_cDDp5GDDhqLbL4hBKYJZCKvloQnMSn0Y0fw2dTI");


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("http://localhost:8000/theaters/a", requestOptions)

    const {message} = await res.json()

    expect(res.status).toBe(404)

    const data = {
        "address": "A1/bla",
        "city": "bangalore",
        "id": "1",
        "name": "theater1"
    }
    expect(message).toBe("The requested resource wasnt found")
})

test('get many theaters invalid', async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2NzQwNDE1MjR9.Cr5_cDDp5GDDhqLbL4hBKYJZCKvloQnMSn0Y0fw2dTI");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("http://localhost:8000/theaters?cities=1", requestOptions)

    const {message} = await res.json()

    expect(res.status).toBe(400)
})
