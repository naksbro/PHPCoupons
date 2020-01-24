@adminCoups
  Feature: Testing Dashboard
    Scenario: Verify coupon is created
      Given User opens admin home page
      And Logs in
      When User navigates to coupons page
      And Creates new Coupon
      Then Verifies coupon is created