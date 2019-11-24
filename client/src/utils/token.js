export default {
  getToken: function (tokenName) {
    return JSON.parse(localStorage.getItem(tokenName)).token
  }
}