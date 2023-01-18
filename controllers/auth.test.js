test('get single theater no token', async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("http://localhost:8000/theaters/1", requestOptions)

    expect(res.status).toBe(401)

})

test('get single theater wrong token', async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "BEARER dummy_token");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("http://localhost:8000/theaters/1", requestOptions)

    expect(res.status).toBe(401)

})
