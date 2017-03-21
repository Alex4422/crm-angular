app.directive('clientTemplate', function() {
  return {
    templateUrl : '../templates/client-tab.html',
    restrict : "E",
    scope: {
      data: '=',
      tableHead: "=",
    }
  }
});
