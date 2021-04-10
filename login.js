function validate(){
    if(uname.value.trim() == "" || passw.value.trim() ==""){
        alert("Fields cannot be empty");
        return false;
    }
    else
    {
        return true;
       // alert("validation is proper");
    }
    }
    
    function validate1() {
        var Password = document.getElementById("Password").value;
        var Username=document.getElementById("Username").value;
        if(Username == "admin" && Password == "12345")
        {
            alert("login successively");
            return false;
        }
        else
        {
            alert("login failed");
        }
    }
    
    