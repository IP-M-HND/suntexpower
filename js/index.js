var app = new Vue({
    el: '#app',
    data: {
        totalBill: 0,
        totalConsum: 0,
        sssn:0
    },
    methods: {
        key: function(num) {
        return this.total += num;
        },
        equal: function() {
         let equal = this.total;
         return this.total = eval(equal);
        }         
    }
});
  