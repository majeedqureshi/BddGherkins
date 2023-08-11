package mypack;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features={"D:\\gmailbdd\\src\\test\\resources\\features\\feature2.feature"},
                plugin={"pretty","html:target\\Majeed",
		                "rerun:target\\bubu.txt"},
                 monochrome=true,
                // dryRun = false,
                // strict = false,
                	   tags={"@smoketest"}
                  ) 
                

public class Realtesting{
// iam able  to execute it is  executing but screenshot issue is there chekc with chatgpt it menntions system issue might be there






}