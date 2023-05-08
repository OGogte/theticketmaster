import axios from 'axios';

const _httpClient = axios.create({
    baseURL: 'https://railwaybooking.azurewebsites.net',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
})

async function login(email, password) {
    try {
        const response = await _httpClient.post('login', {
            email,
            password
        });
        if (response.status === 200) { // 200: OK
            return response.data;
        } else if (response.status === 401) { // 401: Unauthorized
            throw new Error('Invalid email or password');
        } else {
            throw new Error(`Unexpected response status: ${response.status}`);
        }
    } catch (error) {
        throw new Error('Failed to login');
    }
}

async function register(email, password, firstname, lastname) {
    try {
        const response = await _httpClient.post('register', {
            email,
            password,
            firstname,
            lastname,
        });

        if (response.status === 201) { // 201: Created
            return response.data;
        } else if (response.status === 409) { // 409: Conflict
            throw new Error('User with email already exists');
        } else {
            throw new Error(`Unexpected response status: ${response.status}`);
        }
    } catch (error) {
        throw new Error('Failed to register');
    }
}

async function book(source, destination, datetime) {
    try {
        const response = await _httpClient.post('reservation', {
            source: source,
            destination : destination,
            datetime: datetime
        });
        if (response.status === 201) { 
            console.log(response.data)// 201: Created
            return response.data;
        } else {
            throw new Error(`Unexpected response status: ${response.status}`);
        }
    } catch (error) {
        throw new Error('Failed to book reservation');
    }
}

export {
    login, register, book
}
