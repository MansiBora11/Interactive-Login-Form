function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin" && password=="user")
{
    alert("Login successful!");
    return 0;
}
else
{
    alert("Login failed!");
}
}