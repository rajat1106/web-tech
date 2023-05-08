lines = x.responseText.split("\n");
for (i=0; i < lines.length; i++)
{
    test1 = lines[i].split(",")
    username.push(test1[0]);
    password.push(test1[1]);

}
var tempUsername = document.getElementById('username').value;
var tempPassword = document.getElementById('password').value;
var arraycontainsusername = (username.indexOf(tempUsername) > -1);
var arraycontainspassword = (password.indexOf(tempPassword) > -1);
alert(password);
if (arraycontainsusername && arraycontainspassword) {
    window.location.href = "listing.htm";
};