app.controller('loginController', function($scope) {
    $scope.message = 'Look! I am an home page.';

    $scope.formData = {};
    //$scope.formData.loginEmail = "test@test.com";



    $scope.login = function(){
      console.log("in login controller");
      var loginEmail = $scope.formData.loginEmail;
      var loginPassword = $scope.formData.loginPassword;
      console.log(loginEmail);
      console.log('loginPassword:',loginPassword);
      
    }
  });