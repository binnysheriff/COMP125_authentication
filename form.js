function formValidation()

{

    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;

    var pwdRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    var posRegex=/^[A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d/;

    var fname = document.registration.fname.value;

    var lname = document.registration.lname.value;

    var add = document.registration.address.value;

    var city = document.registration.city.value;

    var postalcode = document.registration.postalcode.value;

    var province = document.registration.province.value;

    var passid = document.registration.passid.value;

    var age = document.registration.age.value;

    var confirm = document.registration.confirm.value;

    var email = document.registration.email.value;

    if( fname == "" )

    { alert(' Please enter the first name');

        document.registration.fname.focus() ;

        return false;

    }

    if( lname == "" )

    {

        document.registration.lname.focus() ;

        alert(' Please enter last name');

        return false;

    }

    if( add == "" )

    {

        document.registration.address.focus() ;

        alert(' Please enter your address');

        return false;

    }

    if( city == "" )

    {

        document.registration.city.focus() ;

        alert(' Please enter your City');

        return false;

    }

    if( postalcode == "" )

    {

        document.registration.postalcode.focus() ;

        alert(' PLease enter the postal code');

        return false;

    }

    else if(!posRegex.test(postalcode))

    {

        document.registration.postalcode.focus() ;

        alert('Postal code must be in the M1M1M1 format ');

        return false;

    }

     if(province.value == "")

{

    alert('Select your province from the list');

    document.registration.province.focus() ;

    return false;

}

    if( age == "" )

    {

        document.registration.age.focus() ;

        alert('Please enter the age');

        return false;

    }

    else if(age<"18"){

        document.registration.age.focus() ;

        alert('Age should be more than 18 years');

        return false;

    }

    if( passid == "" )

    {

        document.registration.passid.focus() ;

        alert(' Please enter the password');

        return false;

    }

    else if(!pwdRegex.test(passid))

    {

        document.registration.passid.focus() ;

        alert('Passwords must contain 6 characters and must contain at least one digit and one upper-case character ');

        return false;

    }

    if( confirm == "" )

    {

        document.registration.confirm.focus() ;

        alert('Please enter the password');

        return false;

    }

    else if(confirm !=passid)

    {

        document.registration.confirm.focus() ;

        alert('Please re-confirm password');

        return false;

    }

    if( email == "" )

    {

        document.registration.email.focus() ;

        alert('Please enter your email!');

        return false;

    }

    else if(!emailRegex.test(email)){

        alert('Please enter valid email');

        document.registration.email.focus();

        return false;

    }

    if(fname != '' && lname != '' && add != '' && city != '' && postalcode != '' && province != '' && age != ''&& passid != '' && confirm != '' && email !='')

    {

        alert('Thanks for registering, your customer records have been successfully created .');

    }

}