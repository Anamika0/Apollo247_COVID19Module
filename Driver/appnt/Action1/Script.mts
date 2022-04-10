
systemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://www.magicbricks.com/"
'Browser("micclass:=Browser","name:= Real Estate.*").Page("micclass:=Page","title:= Real Estate.*").Link("micclass:=Link","name:=Rent","html id:= rentheading").Click
'Browser("micclass:=Browser","name:= Real Estate.*").Page("micclass:=Page","title:= Real Estate.*").Link("micclass:=Link","name:=Owner Properties").Click

Browser("micclass:=Browser","name:=Property in Mumbai.*").Page("micclass:=Page","title:=Property in Mumbai.*").Link("micclass:=Link","name:=Square Feet to Square Meter").Click

Browser("micclass:=Browser","name:=Property in Mumbai.*").Page("micclass:=Page","title:=Property in Mumbai.*").Link("micclass:=Link","name:=Post Property Free","height:=33").Click
 @@ script infofile_;_ZIP::ssf61.xml_;_

Browser("micclass:=Browser","name:= Apollo.*").Page("micclass:=Page","title:= Apollo.*").Link("micclass:=Link","html tag:=A","name:=DoctorsConsult Online").Click


'Browser("micclass:=Browser","name:= Apollo.*").Page("micclass:=Page","title:= Apollo.*").Link("micclass:=Link","html tag:=A","name:= Book Appointment with Apollo Doctors","innerhtml:=Book Appointment with Apollo Doctors").Click


Browser("micclass:=Browser","name:= Apollo.*").Page("micclass:=Page","title:= Apollo.*").WebElement("micclass:=WebElement","innertext:= Book Appointment with Apollo Doctors","class:=MuiPaper-root jss532 jss533 MuiPaper-elevation1 MuiPaper-rounded").Click

Browser("Apollo 247 - Online Doctor").Page("Apollo 247 - Online Doctor").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf50.xml_;_

Browser("Apollo 247 - Online Doctor_2").Page("Apollo 247 - Online Doctor").Link("Manage Profiles").Click @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Apollo").Page("Apollo").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("Apollo").Page("Apollo").Image("Profile").Click @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("Apollo").Page("Apollo").Link("My Payments").Click @@ script infofile_;_ZIP::ssf55.xml_;_


Browser("micclass:=Browser","name:= Apollo.*").Page("micclass:=Page","title:= Apollo.*").Link("micclass:=Link","name:= Covid-19Latest updates").Click

Browser("Health Blogs Apollo 24|7_2").Page("Health Blogs Apollo 24|7").Link("COVID-19 Scanner").Check CheckPoint("COVID-19 Scanner") @@ script infofile_;_ZIP::ssf49.xml_;_

Set Browser1=Description.Create
Set Page1=Description.Create
Set Page1= Description.Create
Set Link1 =Description.Create


'Browser Description
Browser1("micclass").Value="Browser"
Browser1("name").Value="Apollo.*"
Browser1("title").Value="Apollo.*"

'Page Description
Page1("micclass").Value="Page"
Page1("title").Value="Health.*"
 @@ script infofile_;_ZIP::ssf48.xml_;_
Link1("micclass").Value="Link"
Link1("name").Value="COVID-19 Scanner"

Browser(Browser1).Page(Page1).Link(Link1).Click


Browser("COVID-19 Risk Assessment").Page("COVID-19 Risk Assessment").WebElement("Coronavirus Risk Scan").Check CheckPoint("Coronavirus Risk Scan")

'Browser("micclass:=Browser","name:=Apollo 247 - Online Doctor").Page("micclass:=Page","name:=Apollo 247 - Online Doctor").Link("micclass:=Link","name:=Covid-19Latest updates")

'systemutil.run "C:\Program Files\Google\Chrome\Application\chrome.exe", "http://automationpractice.com/index.php"
'
'
'
''To click on the sign in button
'Set Browser1=Description.Create
'Set Page1=Description.Create
'Set Login =Description.Create
'Set Page1= Description.Create
'Set Link1 =Description.Create
'Set LoginBrowser=Description.Create
'Set LoginPage=Description.Create
'
''To SignIn
'Set Email=Description.Create
'Set Password=Description.Create
'Set SignIn=Description.Create
'
'
''To Logout
'Set LogoutBrowser=Description.Create
'Set LogoutPage=Description.Create
'
'Set LogoutLink=Description.Create
'
''Browser Description
'Browser1("micclass").Value="Browser"
'Browser1("name").Value="My Store"
'Browser1("title").Value="My Store"
'
'Page1("micclass").Value="Page"
'Page1("title").Value="My Store"
'
'
''Sign In Link Description
'LoginBrowser("micclass").Value="Browser"
'LoginBrowser("name").Value=("Login - My Store")
'
'LoginPage("micclass").Value="Page"
'LoginPage("title").Value=("Login - My Store")
'
'Link1("micclass").Value="Link"
'Link1("name").Value="Sign in"
'
'
''Sign In Description
'Email("name").Value="email"
'Email("html id").Value="email"
'Password("name").Value="passwd"
'
'SignIn("micclass").Value="WebButton"
'SignIn("name").Value="Sign in"
'
'
'
''Logout Description
'LogoutBrowser("micclass").Value="Browser"
'LogoutBrowser("name").Value=("My account - My Store")
'
'
'LogoutPage("micclass").Value="Page"
'LogoutPage("title").Value=("My account - My Store")
'
'LogoutLink("micclass").Value="Link"
'LogoutLink("text").Value="Sign out"
'LogoutLink("title").Value="Log me out"
'
''Set obj1=Browser(Browser1).Page(Page1)
'wait 5
'
'Browser(Browser1).Page(Page1).Link(Link1).Click
'wait 5
'Browser(LoginBrowser).Page(LoginPage).WebEdit(Email).Set "abc2s@gmail.com"
'wait 2
'Browser(LoginBrowser).Page(LoginPage).WebEdit(Password).Set "123456"
'wait 2
'Browser(LoginBrowser).Page(LoginPage).WebButton(SignIn).Click
'wait 4
'Browser(LogoutBrowser).Page(LogoutPage).Link(LogoutLink).Click
'


systemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://www.apollo247.com"



a= Browser("Health Blogs Apollo 24|7").Page("Health Blogs Apollo 24|7").WebElement("Which Is The Best Oil").Check (CheckPoint("Which Is The Best Oil For Cooking?")) @@ script infofile_;_ZIP::ssf57.xml_;_
msgbox a
msgbox "True"




Browser("index:=0").Close


systemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://www.apollopharmacy.in/"

Browser("Online Medical Store,").Page("Online Medical Store,").WebElement("Your Orders").Click @@ script infofile_;_ZIP::ssf59.xml_;_
Browser("micclass:=Browser","title:= https://www.apollopharmacy.in/orders","name:= https://www.apollopharmacy.in/orders").Page("micclass:=Page","title:= https://www.apollopharmacy.in/orders").WebElement("micclass:=WebElement","innertext:=Order Now").Click


a=Browser("Apollo").Page("Apollo").Link("My Payments").Exist
msgbox a

 @@ script infofile_;_ZIP::ssf58.xml_;_
'Browser("Health Blogs Apollo 24|7").Page("Health Blogs Apollo 24|7").WebElement("Editor’s Pick").Click

'/html/body/div[1]/div/div[2]/div[4]/div
systemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://www.apollo247.com/blog"
Set filterObj = Description.Create()
filterObj("xpath").value = "/html/body/div[1]/div/div[2]/div[4]/div"
a= Browser("Health Blogs Apollo 24|7").Page("Health Blogs Apollo 24|7").Childobjects(filterObj) @@ script infofile_;_ZIP::ssf58.xml_;_
msgbox a.count()



systemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://www.apollo247.com/blog"
Set myElement = Description.Create
myElement("micclass").value = "WebElement"
'myElement("class").value = "jss15"
'myElement("outertext").Value = "Editor’s Pick.*"
myElement("xpath").Value="/html/body/div[1]/div/div[2]/div[4]/div"
Set z=Browser("Health Blogs Apollo 24|7").Page("Health Blogs Apollo 24|7").ChildObjects(myElement)
 x=z(0).GetROProperty("innertext")

splitval1=split(x,"By Apollo 24|7,")
msgbox "Top "&UBound(splitval1)&" articles displayed"
For i=0 to ubound(splitval1)-1 Step 1
	msgbox splitval1(i)
Next

Browser("Health Blogs Apollo 24|7").Page("Health Blogs Apollo 24|7").WebButton("view more").Click @@ script infofile_;_ZIP::ssf60.xml_;_
Set s=Browser("Health Blogs Apollo 24|7").Page("Health Blogs Apollo 24|7").ChildObjects(myElement)
 c=s(0).GetROProperty("innertext")

splitval2=split(c,"2022")
msgbox "Top "&UBound(splitval2)&" articles displayed"
Set z=Browser("Health Blogs Apollo 24|7").Page("Health Blogs Apollo 24|7").ChildObjects(myElement)
jss307




Browser("miclass:=Browser","name:=Apollo.*").Page("miclass:=Page","title:=Apollo.*").WebElement("miclass:=WebElement","html tag:=LI","innertext:=Blood.*").Click @@ script infofile_;_ZIP::ssf64.xml_;_
'Browser("Apollo").Page("Apollo_2").WebElement("<iframe src='https://www.googl").Click @@ script infofile_;_ZIP::ssf65.xml_;_
'Browser("Apollo").Page("Apollo_2").WebList("Select A+ A- B+ B- AB+").Select "AB-" @@ script infofile_;_ZIP::ssf66.xml_;_
'Browser("Apollo").Page("Apollo_2").WebButton("Update").Click @@ script infofile_;_ZIP::ssf67.xml_;_
Browser("Browser_5").Page("Page").WebButton("OK, GOT IT").Click @@ script infofile_;_ZIP::ssf72.xml_;_
Browser("Browser_5").Page("Page").WebButton("VIEW DETAILS").Click @@ script infofile_;_ZIP::ssf73.xml_;_
Browser("Apollo").Page("Apollo_4").WebButton("MANAGE").Click @@ script infofile_;_ZIP::ssf74.xml_;_
Browser("Apollo").Page("Apollo_4").WebButton("Cancel Appointment").Click @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Apollo").Page("Apollo_4").WebButton("Cancel Consult").Click @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Apollo").Page("Apollo_4").WebElement("<iframe src='https://www.googl").Click @@ script infofile_;_ZIP::ssf77.xml_;_
Browser("Apollo").Page("Apollo_4").WebList("Select reason for cancellingDo").Select "Booked with wrong user details" @@ script infofile_;_ZIP::ssf78.xml_;_
Browser("Apollo").Page("Apollo_4").WebButton("Submit Request").Click @@ script infofile_;_ZIP::ssf79.xml_;_


systemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://apollo247.com/"

Browser("Apollo 247 - Online Doctor").Page("Apollo 247 - Online Doctor").Link("Appointments").Click @@ script infofile_;_ZIP::ssf68.xml_;_
Browser("Browser_2").Page("Page_2").WebButton("VIEW DETAILS").Click @@ script infofile_;_ZIP::ssf69.xml_;_
Browser("Apollo").Page("Apollo_3").WebButton("MANAGE").Click @@ script infofile_;_ZIP::ssf70.xml_;_
Browser("Apollo").Page("Apollo_4").WebButton("Cancel Appointment").Click @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Apollo").Page("Apollo_4").WebButton("Cancel Consult").Click @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Apollo").Page("Apollo_4").WebElement("<iframe src='https://www.googl").Click @@ script infofile_;_ZIP::ssf77.xml_;_
Browser("Apollo").Page("Apollo_4").WebList("Select reason for cancellingDo").Select "Booked with wrong user details" @@ script infofile_;_ZIP::ssf78.xml_;_
Browser("Apollo").Page("Apollo_4").WebButton("Submit Request").Click @@ script infofile_;_ZIP::ssf79.xml_;_
 @@ script infofile_;_ZIP::ssf71.xml_;_
