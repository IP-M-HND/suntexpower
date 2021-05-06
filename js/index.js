var app = new Vue({
  el: "#app",
  data: {
    totalBill: 0,
    totalConsum: 0,
    sssn: 0,
    rate: 0.14,
    capacity: 34.5,
  },
  methods: {
    key: function (num) {
      return (this.total += num);
    },
    totalToBill: function () {
      this.totalConsum = 0;
      let kws = 0;
      if (this.totalBill > 0) {
        kws = parseFloat(this.totalBill) / parseFloat(this.rate);
        this.totalConsum = kws;
        this.sssn = (kws / this.capacity) * 340;
      }
    },
    totalToConsum: function () {
        this.totalBill=0;
      let kws = 0;
      if (this.totalConsum > 0) {
        kws = this.totalConsum;
        this.totalBill = parseFloat(this.totalConsum) * this.rate;
        this.sssn = (kws / this.capacity) * 340;
      }
    },
  },
});
