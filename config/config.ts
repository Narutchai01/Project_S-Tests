const email = String(process.env.EMAIL);
const password = String(process.env.PASSWORD);
const fullname = String(process.env.FULLNAME);
const facial = String(process.env.FACIAL);
const skintype = String(process.env.SKINTYPE)
const description = String(process.env.DESCRIPTION)
const skincare = String(process.env.SKINCARE)

export const adminUserConfig = {
  email,
  password,
  fullname,
};

export const facialConfig = {
  facial,
};

export const skinConfig = {
  skintype,
  description,
};

export const SkincareConfig = {
  skincare,
  description,
};

export const UserConfig = {
  email,
  password,
  fullname,
};