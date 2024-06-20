const baseUrl = process.env.REACT_APP_BASE_URL;
console.log({ baseUrl });

export const login = async (username, password) => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(username, password),
    });
    return response.JSON;
  } catch (error) {
    return `error during login ${error.message}`;
  }
};


// const baseUrl = process.env.REACT_APP_BASE_URL;

// export const fetchUsers = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/users`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     return [];
//   }
// };

// export const fetchUserById = async (userId) => {
//   try {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return null;
//   }
// };