// degree to radian
var ipdeg = document.querySelector(".dtor");
var subdeg = document.querySelector(".degree");
var d = document.querySelector(".d");

// rad to deg
 var iprad = document.querySelector(".rtod");
 var subrad = document.querySelector(".radian");
 var r = document.querySelector(".r");

 //percentage 

 var val =document.querySelector(".val");
 var tot = document.querySelector(".tot");
 var per = document.querySelector(".per");
 var p = document.querySelector(".p");
 
 //si 
var principal = document.querySelector(".principal");
var rate = document.querySelector(".rate");
var years = document.querySelector(".years");
var si = document.querySelector(".si");
var s = document.querySelector(".s");

//ci
var princi = document.querySelector(".principal-c");
var rate_c =document.querySelector(".rate-c");
var years_c = document.querySelector(".years-c");
var time_c = document.querySelector(".time-c");
var subci = document.querySelector(".ci");
var c =document.querySelector(".c");

// deg to radian 
subdeg.addEventListener("click", conversion_rad);
function conversion_rad()
{
    var degval = ipdeg.value;
    if(degval ===""){
        
        d.innerHTML = `Fields Empty`;
        ipdeg.value="";
        
    }

    else if(isNaN(degval))
    {
        d.innerHTML = `Inavlid Input <br><br>`;
        ipdeg.value="";
    }
    else{
    var calcd = (degval*3.14)/180;
    d.innerHTML=`the radian conversion is ${calcd} rad`;
    ipdeg.value="";
    }
}

// rad to deg
subrad.addEventListener("click", conversion_deg);
function conversion_deg()
{
    var radval = iprad.value;
      
    if(radval==="")
    {
        r.innerHTML = `Fields Empty`;
        iprad.vale="";
       
    }

    else if(isNaN(radval))
    {
            r.innerHTML = `Invalid Input`;
            iprad.value="";
    }
else{
    var calcr = (radval*180)/3.14;
    r.innerHTML=`the radian conversion is ${calcr}`;
    iprad.value="";
}
}

// percentage conversion
per.addEventListener("click", conversion_per);
function conversion_per()
{
    var valp = val.value;
    var totp = tot.value;

if(valp==="" || totp==="")
{
    p.innerHTML = `Fileds Empty`; 
    val.value="";
    tot.value="";
}   

else if(isNaN(valp) || isNaN(totp))
{
        p.innerHTML = `Invalid Input`;
        val.value="";
}
else{
    var calcp = (valp/totp)*100;
    s.innerHTML = ` The percentage is ${calcp}% <br<br>`;
    val.value="";
    tot.value="";
}
}
//si
si.addEventListener("click", conversion_si);
function conversion_si()
{
    var val_p = principal.value;
    var r_p = rate.value;
    var n_p = years.value;
   
if(val_p==="" || r_p==="" || n_p==="")
{
    s.innerHTML =` Fields Empty`;
    principal.value="";
    rate.value="";
    years.value="";

}   

else if(isNaN(val_p) || isNaN(r_p) || isNaN(n_p))
    {
            s.innerHTML = `Invalid Input`;
            principal.value="";
            rate.value="";
            years.value="";
    }
else{
    var calcsi= (val_p*r_p*n_p)/100;
    
    s.innerHTML=`the simple interests  is ${calcsi}`;
    //console.log(create_per);
    principal.value="";
    rate.value="";
    years.value="";
}
}
//ci
subci.addEventListener("click", conversion_ci);
function conversion_ci()
{
    var p_c = princi.value;
    var r_c = rate_c.value;
    var n_c = years_c.value;
    var t_c = time_c.value;
      
if(p_c==="" || r_c==="" || n_c==="" || t_c==="")
{
    c.innerHTML = `Fields Empty`;
    princi.value="";
    rate_c.value="";
    years_c.value="";
    time_c.value=""; 
}

else if(isNaN(p_c) || isNaN(r_c) || isNaN(n_c) || isNaN(t_c))
    {
            c.innerHTML = `Invalid Input`;
            princi.value="";
    rate_c.value="";
    years_c.value="";
    time_c.value="";

    }
else{
    var pow = parseInt(Math.pow(1+(r_c/n_c), n_c*t_c));
    var calc = p_c*pow;
    
    c.innerHTML=`the compund interests  is ${calc}`;
     princi.value="";
    rate_c.value="";
    years_c.value="";
    time_c.value="";

    
}
}
