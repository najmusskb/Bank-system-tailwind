// ekta gmail are password diye valid check kora & new page e jawa  


document.getElementById('login-submit').addEventListener('click', function () {

    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;




    const Password = document.getElementById('user-password');
    const userPassword = Password.value;




    if (userEmail == 'www.najmussakib597@gmail.com' && userPassword == 'boka@@@@@coda') {

        window.location.href = 'banking.html'

    }

})