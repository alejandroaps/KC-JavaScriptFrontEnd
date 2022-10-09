class SparrestApi {

    baseUrl = 'http://localhost:8000'
    endpoints = {
      login: '/auth/login',
      signup: '/auth/register',
    }
    constructor() {}
  
    async post(endpoint, body) {
      const token = localStorage.getItem('token')
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
  
      const data = await response.json()
  
      return data;
    }
  }
  
  export const sparrestApi = new SparrestApi()