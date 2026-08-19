<%
Function SafeTrim(value)
  If IsNull(value) Then
    SafeTrim = ""
  Else
    SafeTrim = Trim(CStr(value))
  End If
End Function
%>

