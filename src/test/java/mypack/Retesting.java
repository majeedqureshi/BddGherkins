package mypack;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features={"E:\\Apron\\NagesharRaoSirPrograms\\gmailbdd\\src\\test\\resources\\features"},
             plugin={"pretty","html:target\\rashmi",
					"rerun:target\\ankita.txt"},
             monochrome=true)
public class Retesting
{

}










