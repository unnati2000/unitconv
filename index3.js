// degree
var deg =document.querySelector(".deg");
var cond = document.querySelector(".cond");
var d = document.querySelector(".d");

// fahrenheit 
var fah = document.querySelector(".fah");
var conf = document.querySelector(".conf");
var f = document.querySelector(".f");

//kelvin
var kel = document.querySelector(".kel");
var conk = document.querySelector(".conk");
var k = document.querySelector(".k");

//work
var force = document.querySelector(".force");
var disp = document.querySelector(".disp");
var workdone = document.querySelector(".workdone");
var w = document.querySelector(".w"); 
// deg
cond.addEventListener("click", conv_deg);
function conv_deg()
{
    var deg_fkk = deg.value;
   
   
    if(deg_fkk==="")
    {
        d.innerHTML = `Fields Empty`;
        deg.value="";
       
    }

    else if(isNaN(deg_fkk))
    {
      d.innerHTML = `Invalid inputs`;
      deg.value="";
    }
  else{
    var d_f =  ((deg_fkk*9)/5)+32;
    var d_k =  deg_fkk + 273.15;
    
    d.innerHTML= `the fahrenheit value is ${d_f} F <br>
                  the kelvin value is ${d_k} K<br>`;
    
     deg.value="";
  }
}
conf.addEventListener("click", conv_fah);
function conv_fah()
{
    var deg_d = fah.value;
    if(deg_d==="")
    {
      f.innerHTML = `Fields Empty`;  
      fah.value="";
        
    }

    else if(isNaN(deg_d))
    {
      f.innerHTML = ` Fields Empty`;
      fah.value="";
    }
  else{
    var d_g =  ((deg_d-32)*5)/9;
   
    var f_k = ((deg_d+459.67)*5)/9;
    f.innerHTML= `The Degree value is ${d_g}  <br>
                  The kelvin value is ${f_k} K<br>`;
    
   
    fah.value="";
  }
}

// kelvin
conk.addEventListener("click", conv_kel);
function conv_kel()
{
    var deg_k = kel.value;
    if(deg_k==="")
    {
        k.innerHTML = `Fields Empty`;
        kel.value="";
     
    }
    else if(isNaN(deg_k))
    {
      k.innerHTML = `Invalid input`;
      kel.value="";
    }
  
    else{
    var dk =  ((deg_k-32)*5)/9;
    var f_kel = ((deg_k+459.67)*5)/9;
    
    k.innerHTML= `The Degree value is ${dk} F <br><br>
                  The Fahrenheit value is ${f_kel} K <br><br>`;
    kel.value="";
    }
}

// work done


workdone.addEventListener("click",conv_work);
function conv_work()
{
    var forc = force.value;
    var dis = disp.value;
    if(forc==="" || dis==="")
    {
        w.innerHTML = `Fields Empty`      
        force.value="";
        disp.value="";
    }
    else if(isNaN(forc) || isNaN(dis))
    {
      w.innerHTML = `Invalid Inputs`;
      force.value="";
      disp.value="";
    }

  else{
    var calc = forc*dis;
    w.innerHTML= `the workdone is ${calc} N`;
    force.value="";
    disp.value="";
  }
}