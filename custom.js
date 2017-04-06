var a = angular.module("myApp", []);
a.controller("myCtrl", function ($scope) {
    $scope.init = function () {
        $scope.id = 0;
        $scope.myForm1.firstName = "";
        $scope.myForm1.lastName = "";
        $scope.myForm1.address = "";
        $scope.myForm1.email = "";
        $scope.myForm1.countryCode = "";
        $scope.myForm1.mobileNumber = "";
        $scope.myForm1.gender = "";
        $scope.myForm1.password = "";
        $scope.myForm1.confirmPassword = "";
        $scope.male = 0;
        $scope.female = 0;
    };
    $scope.myForm1 = { "firstName":"", "lastName":"", "address":"", "email":"", "countryCode":"", "mobileNumber":"", "gender":"", "password":"", "confirmPassword":""};
    $scope.init(); //init is to make all the fields blank after submit
    var countryRegex = /^[0-9]{1,3}$/;
    var mobileRegex = /^[7-9]{1}[0-9]{9}$/;
    var passwordCheckRegex = /^[a-zA-Z0-9]{10,}$/;
    $scope.opt = ['Male','Female','Other'];
    $scope.data = []; 
    $scope.validateForm = function(){
//        console.log("22");
        if(($scope.myForm1.firstName === "" || $scope.myForm1.firstName === null)){
//                console.log("Enter a valid first name");
                alert("Enter a valid first name");
                return false;
            }
        if(($scope.myForm1.lastName === "" || $scope.myForm1.lastName === null)){
//                console.log("Enter a valid last name");
                alert("Enter a valid last name");
                return false;
            }       
        if($scope.myForm1.address === "" || $scope.myForm1.address === null)
            {
//                console.log("Enter a valid address ");
                alert("Enter a valid address");
                return false;
            }
        if($scope.myForm1.email === "" || $scope.myForm1.email === null)
            {
//                console.log("Enter a valid email id");
                alert("Enter a valid email id");
                return false;
            }
        if(($scope.myForm1.countryCode === "" || $scope.myForm1.countryCode === null) || !$scope.myForm1.countryCode.match(countryRegex))
            {
//                console.log("Enter a valid country code");
                alert("Enter a valid country code");
                return false;
            }
        if(($scope.myForm1.mobileNumber === "" || $scope.myForm1.mobileNumber === null) || !$scope.myForm1.mobileNumber.match(mobileRegex))
            {
//                console.log("Enter a valid mobile number");
                alert("Enter a valid mobile number");
                return false;
            }
        if($scope.myForm1.gender === "" || $scope.myForm1.gender === null)
            {
//                console.log("Select a gender");
                alert("Select a gender");
                return false;
            }
        if(($scope.myForm1.password === "" || $scope.myForm1.password === null) || !$scope.myForm1.password.match(passwordCheckRegex))
            {
//                console.log("Enter a valid password");
                alert("Enter a valid password.");
                return false;
            }
        if($scope.myForm1.confirmPassword === "" || $scope.myForm1confirmPassword === null)
            {
//                console.log("Re-enter the password");
                alert("Re-enter your password");
                return false;
            }
        if($scope.myForm1.password!=$scope.myForm1.confirmPassword)
            {
                alert("Passwords don't match");
                return false;
            }
        $scope.id = $scope.data.length + 1;
        $scope.data.push({
            "srNo":$scope.id, 
            "fName":$scope.myForm1.firstName,
            "lName":$scope.myForm1.lastName,
            "Add":$scope.myForm1.address,
            "Email":$scope.myForm1.email,
            "cCode":$scope.myForm1.countryCode,
            "mNumber":$scope.myForm1.mobileNumber,
            "Gen":$scope.myForm1.gender,
            "Pwd":$scope.myForm1.password
        });
        console.log("Data",$scope.data);
        $scope.init(); 
    };
    $scope.deleteRecord = function(x){
        $scope.data.splice(x,1);
        alert("Record has been deleted");
    };
    $scope.updateRecord = function(i,x){
        console.log(i);
        $scope.myForm1.firstName = x.fName;
        $scope.myForm1.lastName = x.lName;
        $scope.myForm1.address = x.Add;
        $scope.myForm1.email = x.Email;
        $scope.myForm1.countryCode = x.cCode;
        $scope.myForm1.mobileNumber = x.mNumber;
        $scope.myForm1.gender = x.Gen;
        $scope.myForm1.password = x.Pwd;
        $scope.data[i] = $scope.myForm1;
        $scope.data.splice(i,1);
        $scope.validateForm(); 
    }
    $scope.viewRecord = function(x){
        alert("Address : " + x.Add + "\n" + "Email ID : " + x.Email + "\n" + "Mobile Number : " + x.cCode + " " + x.mNumber);
    }
}); 