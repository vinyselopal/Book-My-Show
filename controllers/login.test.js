const { exportAllDeclaration } = require("@babel/types");

test('valid login', async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "creds": {
            "username": "a",
            "password": "123"
        }
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const resp = await fetch("http://localhost:8000/login", requestOptions)

    expect(resp.status).toBe(200)
})

test('invalid login', async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "creds": {
            "username": "a",
            "password": "1234"
        }
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const resp = await fetch("http://localhost:8000/login", requestOptions)

    expect(resp.status).toBe(400)
})
