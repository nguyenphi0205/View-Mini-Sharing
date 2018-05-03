var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

  $scope.table = [{
      category: "all",
      items: [{
        filename: "index.html",
        category: "Code",
        size: "10mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }, {
        filename: "bóng rổ",
        category: "Sport",
        size: "15mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }, {
        filename: "Đá bóng",
        category: "Sport",
        size: "10mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }, {
        filename: "Tin Tức",
        category: "News",
        size: "15mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }]
    },
    {
      category: "Sport",
      items: [{
        filename: "bóng rổ",
        category: "Sport",
        size: "15mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }, {
        filename: "Đá bóng",
        category: "Sport",
        size: "10mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }]
    },
    {
      category: "Code",
      items: [{
        filename: "index.html",
        category: "Code",
        size: "10mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }]
    },
    {
      category: "news",
      items: [{
        filename: "Tin Tức",
        category: "News",
        size: "10mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69"
      }]
    },
  ];
  $scope.select_search = $scope.table[0];
});