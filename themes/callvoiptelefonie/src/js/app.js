var app = new Vue({
  el: '#app',
  data: {
    menuMain: false,
    search: false,
  },

  methods: {
    toggleMenu() {
      this.menuMain = !this.menuMain
    },

    toggleSearch() {
      this.search = !this.search
    }
  }

})