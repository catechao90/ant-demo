const Value = {
  session: {
    add: function (key, val) {
      sessionStorage.setItem(key, val)
    },
    get: function (key) {
      return sessionStorage.getItem(key)
    },
    clear: function (key) {
      sessionStorage.removeItem(key)
    }
  },
  auth: {
    isAuthenticated: sessionStorage.getItem("auth")?JSON.parse(sessionStorage.getItem("auth")):false,
    authenticate() {
      sessionStorage.setItem("auth", "true")
    },
    signout() {
      sessionStorage.setItem("auth", "false")
    }
  }  
}

export default Value