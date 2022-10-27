export const noPasswordLoginMock = {
    email: 'email@mail.com',
  };

  export const noEmailLoginMock = {
    "password": "secret_admin",
  };

  export const InvalidEmail = {
    email: 'admiadmin.com',
    password: 'secret_admin',
  };

  export const mockValid = {
    email: 'admin@admin.com',
    password: 'secret_admin',
  };

  export const InvalidPassword = {
    email: 'admin@admin.com',
    password: 'secret_admiiin',
  };

  export const mockFind = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: 'password',
  };

  export const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImlhdCI6MTY2NjcwODI1MSwiZXhwIjoxNjY3NTcyMjUxfQ.bVqvYyQ6fpMj_K8whKeuLlNESeJQzmjxCNAKy0RPsIo';

  export const mockTokenWrong ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp'