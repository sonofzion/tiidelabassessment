<script>

        function processform(){
        fullname = document.getElementById('fullname').value
        username = document.getElementById('username').value
        password = document.getElementById('password').value
        cpassword = document.getElementById('confirmpassword').value
        email = document.getElementById('email').value

        if(password != cpassword){
            alert("password mismatch")
        }else{
                alert(" we've received your form " + fullname)
            }
     processform()
    </script>