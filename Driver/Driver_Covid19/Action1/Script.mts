'Apollo_COVID-19_Driver
	'purpose:Sprint 2
 	'moduleID: 06
 	'moduleName: COVID-19
	'created by: Anamika Sonavane
	'created on: 06/03/2022
	'created on: 11/03/2022 @@ script infofile_;_ZIP::ssf109.xml_;_

'---------------------------------------------------------------- @@ script infofile_;_ZIP::ssf95.xml_;_
 @@ script infofile_;_ZIP::ssf92.xml_;_

systemUtil.Run Environment("ChromePath"),Environment("ApolloPath")

Dim val1,split1,val2,split2
Dim karr
karr=Array("a","a","a","a","a","a","a","a","a","a")
Dim index,flag
index=0


Set objexcel=CreateObject("Excel.Application") @@ script infofile_;_ZIP::ssf108.xml_;_
Set objworkbook=objexcel.Workbooks.open("E:\UFT Classbook PDF\Apollo (COVID-19)\HybridDrivenFramework\Organizer\Apollo_Organizer_COVID19.xlsx")

Set objmodulesheet=objworkbook.Worksheets(1)
modrowcount=objmodulesheet.UsedRange.Rows.Count

Set objtestcasesheet=objworkbook.Worksheets(2)
tcrowcount=objtestcasesheet.UsedRange.Rows.Count

Set objteststepsheet=objworkbook.Worksheets(3)
tsrowcount=objteststepsheet.UsedRange.Rows.Count

Services.StartTransaction "Covid_Tr_1"

For i=1 to modrowcount Step 1
	
	modexe=objmodulesheet.cells(i,3)
	If modexe="Y" Then
	
	moduleid=objmodulesheet.cells(i,1)
	
		For j = 1 To tcrowcount Step 1
		
			tmoduleid=objtestcasesheet.cells(j,5)
			
			If moduleid=tmoduleid and objtestcasesheet.cells(j,4)="Y" Then
				
				tc_testcaseid=objtestcasesheet.cells(j,1)
				
				For k = 1 To tsrowcount Step 1
					ts_testcaseid=objteststepsheet.cells(k,5)
						If tc_testcaseid=ts_testcaseid Then
							keyword=objteststepsheet.cells(k,4)
							
							flag=0
							
							
							For p=0 To 9 Step 1
									If karr(p)=keyword Then
										flag=1
										objteststepsheet.cells(k,7)="Executed"
									End If
									Next
									
									If flag=0 Then
										karr(index)=keyword
										index=index+1
										
										
									Select Case keyword
										
										Case "co"
										msgbox "executing verifyCovidOption"
										objteststepsheet.cells(k,7)="Executed"
										verifyCovidOption
										
										Case "cs"
										msgbox "executing verifyCovidScan"
										objteststepsheet.cells(k,7)="Executed"
										verifyCovidScan
										
										Case "ht"
										msgbox "executing verifyHealthTools"
										verifyHealthTools
										objteststepsheet.cells(k,7)="Executed"
										
										Case "bmic"
										msgbox "executing BMICalculate"
										val1=objteststepsheet.cells(k,6)
										split1= split(val1,":")
										BMICalculate split1(0),split1(1),split1(2),split1(3)
										objteststepsheet.cells(k,7)="Executed"
										
										Case "brc"
										msgbox "executing VerifyRecalculate"
										VerifyRecalculate
										objteststepsheet.cells(k,7)="Executed"
										
										Case "vu"
										msgbox "executing verifyVaccineUpdates"
										verifyVaccineUpdates
										objteststepsheet.cells(k,7)="Executed"
										
										Case "va"
										msgbox "executing verifyArticles"
										verifyArticles
										objteststepsheet.cells(k,7)="Executed"
										Case "ep"
										msgbox "executing verifyEditorPicks"
										verifyEditorPicks
										objteststepsheet.cells(k,7)="Executed"
										
										Case "nwl"
										msgbox "executing verifyNewsletter"
										val2=objteststepsheet.cells(k,6)
										split2= split(val2,",")
										verifyNewsletter split2(0),split2(1)
										objteststepsheet.cells(k,7)="Executed"
									End Select	
									End If
							
						End If
				Next
			End If
			
		Next
		
	End If
	
Next


Services.EndTransaction "Covid_Tr_1"

objexcel.quit

Set objexcel=nothing
Set objworkbook=nothing
Set objmodulesheet=nothing
Set objtestcasesheet=nothing
Set objteststepsheet=nothing



