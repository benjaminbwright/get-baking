export default {
  getToken: async function (tokenName) {
    return await JSON.parse(localStorage.getItem(tokenName))
  }
}