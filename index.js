//alert(123);

// length 
var cm = document.querySelector(".dip");
var subcm = document.querySelector(".conv");
var appd = document.querySelector(".d");
//var create_l;
// time
var dtime = document.querySelector(".dtime");
var time = document.querySelector(".mins");
var appt = document.querySelector(".t");

// currency
var curr = document.querySelector(".curr");
var subcurr = document.querySelector(".dollar");
var appc =document.querySelector(".c")
// speed
var speed = document.querySelector(".sp");
var kmhr = document.querySelector(".kmhr");
var apps = document.querySelector(".s");

// for dist
subcm.addEventListener("click", conversion_dist);
function conversion_dist()
{
    var val = cm.value;
      
    if(val==="")
    {
        appd.innerHTML=`Fields Empty `;
        cm.value="";
    } else if (isNaN(val))
    {
        appd.innerHTML = ` Invalid input`;
        cm.value = "";
    }
else{
    var mm = val*10;
    var metre = val/100;
    var km = val/100000;
    appd.innerHTML = ` The millimetre conversion is  ${mm} mm<br><br>
                        The metre conversion is  ${metre} m<br><br> 
                        The kilometre conversion is  ${km} km<br><br>`;
    cm.value="";
}
}


// for time
time.addEventListener("click", conversion_time);
function conversion_time()
{
    var secs = dtime.value;
    //var deg_k = fah.value;
    if(secs==="")
    {
        appt.innerHTML=` Fields empty`;
        dtime.value="";
       
    }

    else if(isNaN(secs)){
    
            appt.innerHTML = `Invalid input <br><br>`;
            dtime.value="";
    }
  else{
    var min = secs/60
    var hour = secs/3600;
    var ms = secs*1000;
    appt.innerHTML = ` The time in minutes is ${min} mins <br><br>
                        The time in hours is ${hour} hours <br><br>
                        The time in milli seconds is ${ms} ms <br><br>`;
    dtime.value="";
  }
}

subcurr.addEventListener("click",conversion_curr);
function conversion_curr()
{
    var currency= curr.value;
    
    if(currency==="")
    {
        appc.innerHTML = ` Fields Empty<br>`;    
        curr.value="";
    }
    else if(isNaN(currency))
    {
        appc.innerHTML = `Invalid Input<br>`;
        curr.value="";
    }

    else{
  
    var doll = currency/71.24;
    var pound = currency/86.64;
    var yen = currency/0.67;
    appc.innerHTML = ` The amount in dollar is $${doll} <br><br>
                        The amount in pound is £${pound} <br><br>
                        The amount in Japanese is ${yen} <br><br> `;
    curr.value="";
    }
}

kmhr.addEventListener("click", conversion_speed)

function conversion_speed()
{
    var km = speed.value;
      
    if(km==="")
    {
        apps.innerHTML=`Fields Empty `;
        speed.value="";
       
    }

    else if(isNaN(km))
    {
        apps.innerHTML= `Invalid input`;
        speed.value= "";
    }

    else{
    var con_km = (km*5)/18;
    apps.innerHTML = ` The speed in km/hr is ${con_km}km/hr<br><br>`;
    speed.value="";
    }
}