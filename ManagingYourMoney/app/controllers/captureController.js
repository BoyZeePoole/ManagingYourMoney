'use strict';
app.controller('captureController', ['$scope', '$http', 'ngSettings', '$routeParams', '$location', function ($scope, $http, ngSettings, $routeParams, $location) {

  $scope.searchText = "";

  $scope.form = {};

  $scope.init = function () {
    $scope.searchText = "";
    $scope.form.id = 0;
    $scope.form.province = '';
    $scope.form.district = '';
    $scope.form.date = '';
    $scope.form.invitation = '';
    $scope.form.venue = '';
    $scope.form.refreshments = '';
    $scope.form.length = '';
    $scope.form.presentationSkills = '';
    $scope.form.activities = '';
    $scope.form.receive = '';
    $scope.form.newKnowledge = '';
    $scope.form.practicalNature = '';
    $scope.form.preparedToImplement = '';
    $scope.form.meaningful = '';
    $scope.form.recommend = '';
    $scope.form.recommendWhy = '';
    $scope.form.comments = '';

    $scope.showProvince = '';
    $scope.showInvitaton = '';
    $scope.showVenue = '';
    $scope.showRefreshments = '';
    $scope.showlength = '';
    $scope.showPresentationSkills = '';
    $scope.showActivities = '';
    $scope.showReceive = '';
    $scope.showNewKnowledge = '';
    $scope.showPracticalNature = '';
    $scope.showPreparedToImplement = '';
    $scope.showRecommend = '';
    $scope.showLength = '';
    $scope.crud = 'Add';
    $('#province').select();
    $('html, body').animate({ scrollTop: 0 }, 500);
  }

  $scope.clear = function () {
    $scope.searchText = "";
  }
  $scope.init();
  $scope.crud = "Add";

  $scope.provinces = ['Eastern Cape','Free State', 'Gauteng', 'Kwa-Zulu Natal', 'Limpopo','Mpumalanga','North West', 'Northern Cape', 'Western Cape'];
  $scope.options5 = ['poor', 'reasonable', 'average', 'good', 'excellent'];
  $scope.options3 = ['Too long', 'Just right', 'Too short'];
  $scope.options2 = ['YES', 'NO'];

  $scope.captureForm = function (event, nextFieldId) {
    switch (event) {
      case 'province':
        DoProvince(nextFieldId)
        break;
      case 'invitation':
        DoInvitation(nextFieldId)
        break;
      case 'venue':
        DoVenue(nextFieldId)
        break;
      case 'refreshments':
        DoRefreshments(nextFieldId)
        break;
      case 'length':
        DoLength(nextFieldId)
        break;
      case 'presentationSkills':
        DoPresentationSkills(nextFieldId)
        break;
      case 'activities':
        DoActivities(nextFieldId)
        break;
      case 'receive':
        DoReceive(nextFieldId)
        break;
      case 'newKnowledge':
        DoNewKnowledge(nextFieldId)
        break;
      case 'practicalNature':
        DoPracticalNature(nextFieldId)
        break;
      case 'preparedToImplement':
        DoPreparedToImplement(nextFieldId)
        break;
      case 'recommend':
        DoRecommend(nextFieldId)
        break;
    }
  }
  function DoProvince(nextFieldId) {
    if (!$.isNumeric($scope.form.province) || $scope.form.province < 1 || $scope.form.province > 9) {
      $scope.showProvince = 'Error!!';
      $('#province').select();
    }
    else {
      $scope.showProvince = $scope.getProvince(parseInt($scope.form.province) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoInvitation(nextFieldId) {
    if (!$.isNumeric($scope.form.invitation) || $scope.form.invitation < 1 || $scope.form.invitation > 5) {
      $scope.showInvitaton = 'Error!!';
      $('#invitation').select();
    }
    else {
      $scope.showInvitaton = $scope.getOptions5(parseInt($scope.form.invitation) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoVenue(nextFieldId) {
    if (!$.isNumeric($scope.form.venue) || $scope.form.venue < 1 || $scope.form.venue > 5) {
      $scope.showVenue = 'Error!!';
      $('#venue').select();
    }
    else {
      $scope.showVenue = $scope.getOptions5(parseInt($scope.form.venue) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoRefreshments(nextFieldId) {
    if (!$.isNumeric($scope.form.refreshments) || $scope.form.refreshments < 1 || $scope.form.refreshments > 5) {
      $scope.showRefreshments = 'Error!!';
      $('#refreshments').select();
    }
    else {
      $scope.showRefreshments = $scope.getOptions5(parseInt($scope.form.refreshments) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoLength(nextFieldId) {
    if (!$.isNumeric($scope.form.length) || $scope.form.length < 1 || $scope.form.length > 3) {
      $scope.showLength = 'Error!!';
      $('#length').select();
    }
    else {
      $scope.showLength = $scope.getOptions3(parseInt($scope.form.length) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoPresentationSkills(nextFieldId) {
    if (!$.isNumeric($scope.form.presentationSkills) || $scope.form.presentationSkills < 1 || $scope.form.presentationSkills > 5) {
      $scope.showPresentationSkills = 'Error!!';
      $('#presentationSkills').select();
    }
    else {
      $scope.showPresentationSkills = $scope.getOptions5(parseInt($scope.form.presentationSkills) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoActivities(nextFieldId) {
    if (!$.isNumeric($scope.form.activities) || $scope.form.activities < 1 || $scope.form.activities > 5) {
      $scope.showActivities = 'Error!!';
      $('#activities').select();
    }
    else {
      $scope.showActivities = $scope.getOptions5(parseInt($scope.form.activities) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoReceive(nextFieldId) {
    if (!$.isNumeric($scope.form.receive) || $scope.form.receive < 1 || $scope.form.receive > 2) {
      $scope.showReceive = 'Error!!';
      $('#receive').select();
    }
    else {
      $scope.showReceive = $scope.getOptions2(parseInt($scope.form.receive) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoNewKnowledge(nextFieldId) {
    if (!$.isNumeric($scope.form.newKnowledge) || $scope.form.newKnowledge < 1 || $scope.form.newKnowledge > 5) {
      $scope.showNewKnowledge = 'Error!!';
      $('#newKnowledge').select();
    }
    else {
      $scope.showNewKnowledge = $scope.getOptions5(parseInt($scope.form.newKnowledge) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoPracticalNature(nextFieldId) {
    if (!$.isNumeric($scope.form.practicalNature) || $scope.form.practicalNature < 1 || $scope.form.practicalNature > 5) {
      $scope.showPracticalNature = 'Error!!';
      $('#practicalNature').select();
    }
    else {
      $scope.showPracticalNature = $scope.getOptions5(parseInt($scope.form.practicalNature) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoPreparedToImplement(nextFieldId) {
    if (!$.isNumeric($scope.form.preparedToImplement) || $scope.form.preparedToImplement < 1 || $scope.form.preparedToImplement > 5) {
      $scope.showPreparedToImplement = 'Error!!';
      $('#preparedToImplement').select();
    }
    else {
      $scope.showPreparedToImplement = $scope.getOptions5(parseInt($scope.form.preparedToImplement) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  function DoRecommend(nextFieldId) {
    if (!$.isNumeric($scope.form.recommend) || $scope.form.recommend < 1 || $scope.form.recommend > 2) {
      $scope.showRecommend = 'Error!!';
      $('#recommend').select();
    }
    else {
      $scope.showRecommend = $scope.getOptions2(parseInt($scope.form.recommend) - 1);
      $('#' + nextFieldId).focus();
    }
  }
  $scope.getProvince = function (n) {
    return $scope.provinces[n];
  }
  $scope.getOptions5 = function (n) {
    return $scope.options5[n];
  }
  $scope.getOptions2 = function (n) {
    return $scope.options2[n];
  }
  $scope.getOptions3 = function (n) {
    return $scope.options3[n];
  }
  $scope.saveData = function () {
    var mediaPath = "http://www.redfeather.co.za/customyz/saveMYF.php";
    return $http.post(mediaPath, $scope.form).then(function (results) {
      if (results.data.id != undefined || results.data.id != null) {
        alert("ID = " + results.data.id);
      }
      else {
        alert('Item Saved!!!')
      }
        $scope.init();
        $('#province').focus();
      
    });
  }
  $scope.searchData = function () {
    var mediaPath = "http://www.redfeather.co.za/customyz/getMYF.php?id=" + $scope.searchText;
    return $http.get(mediaPath).then(function (results) {
      $scope.form.id = results.data[0].Id;
      $scope.form.province = results.data[0].Province;
      DoProvince('');
      $('#province').focus();
      $scope.form.district = results.data[0].District;
      $scope.form.date = results.data[0].EntryDate;
      $scope.form.district = results.data[0].District;
      $scope.form.invitation = results.data[0].invitation;
      DoInvitation('');
      $scope.form.venue = results.data[0].venue;
      DoVenue('');
      $scope.form.refreshments = results.data[0].refreshments;
      DoRefreshments('');
      $scope.form.length = results.data[0].length;
      DoLength('');
      $scope.form.presentationSkills = results.data[0].presentationSkills;
      DoPresentationSkills('');
      $scope.form.activities = results.data[0].activities;
      DoActivities('');
      $scope.form.receive = results.data[0].receive;
      DoReceive('');
      $scope.form.newKnowledge = results.data[0].newKnowledge;
      DoNewKnowledge('');
      $scope.form.practicalNature = results.data[0].practicalNature;
      DoPracticalNature('');
      $scope.form.preparedToImplement = results.data[0].preparedToImplement;
      DoPreparedToImplement('');
      $scope.form.meaningful = results.data[0].meaningful;
      $scope.form.recommend = results.data[0].recommend;
      DoRecommend('');
      $scope.form.recommendWhy = results.data[0].recommendWhy;
      $scope.form.comments = results.data[0].comments;
      $scope.crud = "Edit";
    });
  }
}]);