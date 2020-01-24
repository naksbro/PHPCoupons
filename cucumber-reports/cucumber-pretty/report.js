$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AdminCouponsPage.feature");
formatter.feature({
  "name": "Testing Dashboard",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@adminCoups"
    }
  ]
});
formatter.scenario({
  "name": "Verify coupon is created",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@adminCoups"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User opens admin home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdminHomePage_Steps.user_opens_admin_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Logs in",
  "keyword": "And "
});
formatter.match({
  "location": "AdminHomePage_Steps.logs_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to coupons page",
  "keyword": "When "
});
formatter.match({
  "location": "AdminCouponPage_Steps.user_navigates_to_coupons_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Creates new Coupon",
  "keyword": "And "
});
formatter.match({
  "location": "AdminCouponPage_Steps.creates_new_Coupon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verifies coupon is created",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminCouponPage_Steps.verifies_coupon_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});