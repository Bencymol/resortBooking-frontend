import { jwtDecode } from "jwt-decode";

export const saveCreds = token => {
  const decoded = jwtDecode(token);
  localStorage.setItem("token", token);
  localStorage.setItem("id", decoded.id);
  localStorage.setItem("role", decoded.role);
  localStorage.setItem("name", decoded.name);
};

export const isAuthenticated = () => {
  try {
    const decoded = jwtDecode(localStorage.token);
    console.log(decoded);
    const currentDate = Date.now() / 1000;
    return currentDate < decoded.exp;
  } catch (e) {
    return false;
  }
};

export const checkRole = roles => {
  const role = localStorage.getItem("role");
  return role.includes(roles);
};
