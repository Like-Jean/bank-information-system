/**
 * Created by lau on 2016/3/20.
 */
app.controller('applyCtrl',function($scope,bankListFac,$rootScope,$location){
    $scope.zip="94400";
    bankListFac.success(function(bankData){$scope.banks=bankData.bankList;});
    //$scope.showList=false;
    $scope.returnBanks=[];
    $rootScope.recoCode="";

    $scope.findABank=function(){
        var zipCode=$scope.zip;
        var j=0;
        var bankList=document.getElementById("locationSelector");
        var checkBt=document.getElementById("checkZipBt");

        for(var i= 0;i<$scope.banks.length;i++){
            var temp=$scope.banks[i];
            if(temp.location[0].zip===zipCode){
                $scope.returnBanks[j++]=$scope.banks[i];
            }
        }
        bankList.style.visibility="visible";
        checkBt.style.visibility="hidden";
    };

    $scope.submit=function(){
        //alert("submit");
        var bankSelector=document.getElementById("bankSelector");
        var locationSelector=document.getElementById("locationSelector");
        $scope.applyer=$rootScope.loginUser;
        $rootScope.chose_bank=bankSelector.options[bankSelector.selectedIndex].text;
        $rootScope.chose_bankLocation=locationSelector.options[locationSelector.selectedIndex].text;
        if($rootScope.recoCode!="123"){
            $rootScope.recoCode="";
        }
        $location.path('/applied');
    };


});