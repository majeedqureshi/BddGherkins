$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/gmailbdd/src/test/resources/features/feature2.feature");
formatter.feature({
  "line": 1,
  "name": "gmail login actions",
  "description": "",
  "id": "gmail-login-actions",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validate Userid field",
  "description": "",
  "id": "gmail-login-actions;validate-userid-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch gmail site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"\u003cx\u003e\" value",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click next",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validate output for \"\u003cy\u003e\" criteria",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close site",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "gmail-login-actions;validate-userid-field;",
  "rows": [
    {
      "cells": [
        "x",
        "y"
      ],
      "line": 10,
      "id": "gmail-login-actions;validate-userid-field;;1"
    },
    {
      "cells": [
        "gcreddy1997@gmail.com",
        "valid"
      ],
      "line": 11,
      "id": "gmail-login-actions;validate-userid-field;;2"
    },
    {
      "cells": [
        "asdfghdfg",
        "invalid"
      ],
      "line": 12,
      "id": "gmail-login-actions;validate-userid-field;;3"
    },
    {
      "cells": [
        "",
        "invalid"
      ],
      "line": 13,
      "id": "gmail-login-actions;validate-userid-field;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 205200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "validate Userid field",
  "description": "",
  "id": "gmail-login-actions;validate-userid-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch gmail site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"gcreddy1997@gmail.com\" value",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click next",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validate output for \"valid\" criteria",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Gmailmethods.method2()"
});
formatter.result({
  "duration": 14577460300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gcreddy1997@gmail.com",
      "offset": 17
    }
  ],
  "location": "Gmailmethods.method6(String)"
});
formatter.result({
  "duration": 336874300,
  "status": "passed"
});
formatter.match({
  "location": "Gmailmethods.method7()"
});
formatter.result({
  "duration": 1860097200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 21
    }
  ],
  "location": "Gmailmethods.method8(String)"
});
formatter.write("Userid test was interrupted");
formatter.result({
  "duration": 724668600,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat mypack.Gmailmethods.method8(Gmailmethods.java:139)\r\n\tat ✽.Then validate output for \"valid\" criteria(D:/gmailbdd/src/test/resources/features/feature2.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Gmailmethods.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 30600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "validate Userid field",
  "description": "",
  "id": "gmail-login-actions;validate-userid-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch gmail site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"asdfghdfg\" value",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click next",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validate output for \"invalid\" criteria",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Gmailmethods.method2()"
});
formatter.result({
  "duration": 12864830300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdfghdfg",
      "offset": 17
    }
  ],
  "location": "Gmailmethods.method6(String)"
});
formatter.result({
  "duration": 212729500,
  "status": "passed"
});
formatter.match({
  "location": "Gmailmethods.method7()"
});
formatter.result({
  "duration": 1984435300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 21
    }
  ],
  "location": "Gmailmethods.method8(String)"
});
formatter.write("Userid test was interrupted");
formatter.result({
  "duration": 17341760400,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat mypack.Gmailmethods.method8(Gmailmethods.java:139)\r\n\tat ✽.Then validate output for \"invalid\" criteria(D:/gmailbdd/src/test/resources/features/feature2.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Gmailmethods.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 42900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "validate Userid field",
  "description": "",
  "id": "gmail-login-actions;validate-userid-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch gmail site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"\" value",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click next",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validate output for \"invalid\" criteria",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Gmailmethods.method2()"
});
formatter.result({
  "duration": 15510551200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "Gmailmethods.method6(String)"
});
formatter.result({
  "duration": 175244700,
  "status": "passed"
});
formatter.match({
  "location": "Gmailmethods.method7()"
});
formatter.result({
  "duration": 1156978600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 21
    }
  ],
  "location": "Gmailmethods.method8(String)"
});
formatter.write("Userid test was interrupted");
formatter.result({
  "duration": 13033425000,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat mypack.Gmailmethods.method8(Gmailmethods.java:139)\r\n\tat ✽.Then validate output for \"invalid\" criteria(D:/gmailbdd/src/test/resources/features/feature2.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Gmailmethods.method4()"
});
formatter.result({
  "status": "skipped"
});
});