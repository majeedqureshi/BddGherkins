Feature: gmail login actions
@smoketest
Scenario Outline: validate Userid field
Given launch gmail site
When enter userid as "<x>" value
And click next
Then validate output for "<y>" criteria
And close site
Examples:
|          x         					|      y           |
|     gcreddy1997@gmail.com   |     valid        |
|     asdfghdfg     					|   invalid        |
|                    					|   invalid        |

Scenario Outline: validate pwd field
Given launch gmail site
When enter userid as "gcreddy1997@gmail.com" value
And click next
And enter password as "<x>" value
And click pwd next
Then validate result for "<y>" criteria
And close site
Examples:
|          x         |      y           |
|     8139945701     |     valid        |
|     8139945702     |   invalid        |
|                    |   invalid        |




