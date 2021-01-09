new Vue({
    el: '#app',
    data: {
        colors: [
            {
                name: 'Red',
                status: false
            },

            {
                name: 'White',
                status: false
            },

            {
                name: 'Green',
                status: true
            },

            {
                name: 'Black',
                status: false
            },
        ],
        message: ''
    },
    methods: {
        click: function () {
            alert(this.message)
        }
    }
})