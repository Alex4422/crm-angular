app.directive('interactionTemplate', function() {
  return {
    templateUrl : '../templates/interaction-tab.html',
    restrict : "E",
    scope: {
      data: '=',
      tableHead: "=",
    }
  }
});
