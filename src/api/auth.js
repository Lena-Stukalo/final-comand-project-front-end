export const signup = async data => {
  const requestData = {
    name: data.firstName,
    password: data.password,
    email: data.email,
  };

  return requestData;
};
