
 var app = angular.module('myApp', ["ngRoute"]);
app.controller('myCtrl', function ($scope) {

  /**Regex Email*/
  $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

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
        uploadby: "Tài đẹp trai",
        download: "70",
        comment: "This is template for DXCsharex"
      }, {
        filename: "dá bóng",
        category: "Sport",
        size: "20mb",
        dateupload: "28/04/2018",
        uploadby: "Oanh đẹp gái",
        download: "71",
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
        uploadby: "Tài đẹp trai",
        download: "70",
        comment: "This is template for DXCshare"
      }, {
        filename: "dá bóng",
        category: "Sport",
        size: "20mb",
        dateupload: "28/04/2018",
        uploadby: "Oanh đẹp gái",
        download: "71",
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
