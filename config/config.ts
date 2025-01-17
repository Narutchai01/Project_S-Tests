const email = String(process.env.EMAIL);
const password = String(process.env.PASSWORD);
const fullname = String(process.env.FULLNAME);

export const adminUserConfig = {
  email,
  password,
  fullname,
};
