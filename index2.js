// binary

var binc =document.querySelector(".binc");
var binsub = document.querySelector(".binsub");
var b = document.querySelector(".b");

//decimal
var decc = document.querySelector(".decc");
var decsub = document.querySelector(".decsub");
var d = document.querySelector(".d");

// hexadecimal
var hexc =  document.querySelector(".hexc");
var hexsub = document.querySelector(".hexsub");
var h = document.querySelector(".h");

//octal
var octc = document.querySelector(".octc");
var octsub = document.querySelector(".octsub");
var o = document.querySelector(".o");

// binary 
binsub.addEventListener("click", conv_bin);
function conv_bin()
{
    var bin_val = binc.value;
    if(bin_val==="")
    {
        b.innerHTML = `Fields Empty`;
        binc.value="";
       
    }
    else if(isNaN(bin_val))
    {
        b.innerHTML = `Invalid inputs`;
        binc.value="";
    }
    else{
    var b_d= parseInt(bin_val,2).toString(10);
    var b_h= parseInt(bin_val,2).toString(16);
    var b_o= parseInt(bin_val,2).toString(8);
    
    b.innerHTML=`The decimal conversion is ${b_d} <br>
                    The hexadecimal conversion is ${b_h} <br>
                    The octal conversion is ${b_o}<br>`;
    binc.value="";
    
    
    }
}

// decimal

decsub.addEventListener("click", conv_dec);
function conv_dec()
{
    var dec_val = decc.value;
    if(dec_val==="")
    {
        d.innerHTML=`Fileds empty`;
        decc.value="";
    }
    else if (isNaN(dec_val))
    {
        d.innerHTML = `Invalid input`;
    }
    else{
    var d_b= parseInt(dec_val,10).toString(2);
    
    var d_h= parseInt(dec_val,10).toString(16);
    var d_o= parseInt(dec_val,10).toString(8);
    
    d.innerHTML=`The binary conversion is ${d_b} <br>
    The hexadecimal conversion is ${d_h} <br>
    The octal conversion is ${d_o}<br>
    `;
    
    decc.value="";
    
    }
}


// hex 
hexsub.addEventListener("click", conv_hex);
function conv_hex()
{
    var hex_val = hexc.value;
    if(hex_val==="")
    {
        h.innerHTML=`Fileds empty`;
        hexc.value="";
        
    }
    else if(isNaN(hex_val))
    {
        h.innerHTML = `Invaid inputs<br><br>`;
        hexc.value="";
    }
    else{
    var h_b= parseInt(hex_val,16).toString(2);
    var h_d= parseInt(hex_val,16).toString(10);
    var h_o= parseInt(hex_val,16).toString(8);
    
    h.innerHTML=`The binary conversion is ${h_b} <br>
    The decimal conversion is ${h_d} <br>
    The octal conversion is ${h_o}`;

    hexc.value="";
    
    }
}

// octal
octsub.addEventListener("click", conv_oct);
function conv_oct()
{
    var oct_val = octc.value;
    if(oct_val==="")
    {
        o.innerHTML=`Fileds empty`;
        octc.value="";
    }
    else if(isNaN(oct_val))
    {
        o.innerHTML= ` Invalid Inputs`;
        octc.value="";
    }
    else{
    var o_b= parseInt(oct_val,8).toString(2);
   
    var o_d= parseInt(oct_val,8).toString(10);
    var o_h= parseInt(oct_val,8).toString(16);
    
    o.innerHTML=`The binary conversion is ${o_b} <br>
    The decimal conversion is ${o_d} <br>
    The hexadecimal conversion is ${o_h}<br>`;
    octc.value="";
    
    }
} 