

Set objexcel=CreateObject("Excel.Application")
Set objworkbook=objexcel.Workbooks.open("E:\UFT Classbook PDF\Apollo (COVID-19)\HybridDrivenFramework\Organizer\new.xlsx")
Set objmodulesheet=objworkbook.Worksheets(1)
modrowcount=objmodulesheet.UsedRange.Rows.Count
msgbox modrowcount
objmodulesheet.cells(1,2)="Executed"
objworkbook.close
objexcel.quit

Set objexcel=nothing
Set objworkbook=nothing

