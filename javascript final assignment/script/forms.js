function validation()
{
var name=document.getElementById('name').Value;
var name=document.getElementById('fname').Value;
var email=document.getElementById('email').Value;
var rExp=/^([a-z A-Z 0-9]+)@([A-Z a-z]+).([a-z A-Z]{3})&/
if(name.Value.trim=="")
{
    alert("enter valid name");
 document.getElementById('name').style.visibility="visible";
 return false;
}
if(fname.Value.trim=="")
{
    alert("enter valid name")
    document.getElementById('fname').Value;
}
if(rExp.test(email))
{
    document.getElementById('email').style.visibility="visible";
    return false;
}

}

