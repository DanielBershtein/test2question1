const USER_KEY = "user";
const WILLING_KEY = "willing";

export const storageService = {
  saveUser(userData) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(userData));
  },
  getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY)) || null;
  },
  getWillings() {
    return JSON.parse(localStorage.getItem(WILLING_KEY)) || [];
  },
  saveWilling(willing) {
    const totalWillings = this.getWillings();
    totalWillings.push(willing);
    localStorage.setItem(WILLING_KEY, JSON.stringify(totalWillings));
  },
};
