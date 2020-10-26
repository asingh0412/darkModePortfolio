app.controller('projectController', function($scope , $http) {
    
    var url = "data.json";

    getList = function (){
        $http.get(url)
            .then (function(response) {
            console.log(response);
            $scope.list = response.data;
        });
    };
    getList();

    $scope.addRecord = function (form){
       //console.log($scope.newRecord.fName);
       if(form.$valid){
            console.log(form.$valid);
            $scope.list.push(JSON.parse(JSON.stringify($scope.newRecord))); // to remove the reference to the object
            $scope.newRecord.fName = '';
            $scope.newRecord.lName = '';
            $scope.newRecord.email = '';
            $scope.myForm.$setPristine();
       }
    }

    $scope.deleteRecord = function (){
        console.log(this.$index);
        console.log($scope.list);
        if( confirm("Are you sure you want to delete " + $scope.list[this.$index].email)){
            $scope.list.splice(this.$index,1);
        }
    }

    $scope.resetForm = function() {
        console.log("reset From");
        $scope.newRecord.fName = '';
        $scope.newRecord.lName = '';
        $scope.newRecord.email = '';
        alert("reset form");
    }

  });