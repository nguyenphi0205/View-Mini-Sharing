var app = angular.module('myApp', ["ngRoute"]);
app.controller('myCtrl', function ($scope) {

  $scope.table = [{
      category: "all",
      items: [{
        filename: "index.html",
        category: "Code",
        size: "10mb",
        dateupload: "27/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69",
        comment: "This is template for DXCshare"
      }, {
        filename: "bóng rổ",
        category: "Sport",
        size: "15mb",
        dateupload: "25/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69",
        comment: "This is template for DXCsharex"
      }, {
        filename: "dá bóng",
        category: "Sport",
        size: "20mb",
        dateupload: "28/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69",
        comment: "This is template for DXCshare"
      }, {
        filename: "tin Tức",
        category: "News",
        size: "25mb",
        dateupload: "26/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69",
        comment: "This is template for DXCshare"
      }]
    },
    {
      category: "Sport",
      items: [{
        filename: "bóng rổ",
        category: "Sport",
        size: "15mb",
        dateupload: "25/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69",
        comment: "This is template for DXCshare"
      }, {
        filename: "dá bóng",
        category: "Sport",
        size: "20mb",
        dateupload: "28/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69",
        comment: "This is template for DXCshare"
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
        download: "69",
        comment: "This is template for DXCshare"
      }]
    },
    {
      category: "news",
      items: [{
        filename: "tin Tức",
        category: "News",
        size: "25mb",
        dateupload: "26/04/2018",
        uploadby: "Phi đẹp trai",
        download: "69",
        comment: "This is template for DXCshare"
      }]
    },
  ];
  $scope.select_search = $scope.table[0];
});