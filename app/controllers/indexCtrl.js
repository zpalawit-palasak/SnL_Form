var app = angular.module("MyApp", ["ngMaterial", "ngMessages"]);

app.controller("ApplicationCtrl", function appCtrl($sce, $scope, $controller) {
  const sl = this;
  let dateNow = new Date();
  sl.currentNavItem = "leaveForm";

  sl.goto = function (page) {
    $scope.status = "Goto " + page;
  };
  
  sl.getDateNowTH = function(now) {
    // now = new Date();
    var thday = new Array(
      "อาทิตย์",
      "จันทร์",
      "อังคาร",
      "พุธ",
      "พฤหัส",
      "ศุกร์",
      "เสาร์"
    );
    var thmonth = new Array(
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม"
    );

    return (
      now.getDate() +
      " " +
      thmonth[now.getMonth()] +
      " " +
      (now.getFullYear() + 543)
    );
  };

  sl.name = "MyApp";
  $scope.name2 = "TestTest";

  $scope.documentParam = {
    NO: 1234,
    docDate: sl.getDateNowTH(dateNow),
    subject: "abcd",
    toEmployer1: "",
    toEmployer2: "",
    titleName: "",
    myName: "",
    surName: "",
    startWorkDate: "(ระบุวันที่เริ่มทำงาน)",
    endWorkDate: "(ระบุวันที่เริ่มทำงาน)",
    currentPosition: "God",
    dept: "Heaven",
    leaveReason: "cuz Money",
  }

  $scope.user = {
    title: 'Developer',
    email: 'ipsum@lorem.com',
    firstName: '',
    lastName: '',
    company: 'Google',
    address: '1600 Amphitheatre Pkwy',
    city: 'Mountain View',
    state: null,
    stateOfBirth: 'CA',
    description: 'Loves TypeScript 💖',
    postalCode: '94043',
    licenseAccepted: true,
    submissionDate: null,
    marketingOptIn: true
  };

  $scope.gens = ('ชาย หญิง').split(' ').map(function (gen) {
    return {abbrev: gen};
  });

});
