var cusid=prompt("Enter your Id number");
document.write("customer id= "+cusid+"<br><br>");

var Name=prompt("Enter your name");
document.write("Name= "+Name+"<br><br>");

var unit=prompt("Enter the unit consumed");
document.write("Name= "+unit+"<br><br>");

var total;
var surcharge;
var netamount;
if(unit<=199){
    total=unit*1.20;
    document.write("Total amount= "+total);
}

else if(unit>=200 && unit<400){
    total=unit*1.50;
    document.write("Total amount= "+total);
    if(total>=400){
        surcharge=total*15/100;
        if(surcharge>=100){
            document.write(" Surcharge Amount= "+surcharge+"<br></br>");
            netamount=total+surcharge;
            document.write("Net Amount= "+netamount);
        }
    }
}

else if(unit>=400  && unit<600){
    total=unit*1.80;
    document.write("Amount charges= "+total+"<br></br>");
    if(total>=400){
    surcharge=total*15/100;
        if(surcharge>=100){
            document.write(" Surcharge Amount= "+surcharge+"<br></br>");
            netamount=total+surcharge;
            document.write("Net Amount= "+netamount);
        }
    }
}

else if(unit>=600){
    total=unit*2;
    document.write("Amount charges= "+total+"<br></br>");
    if(total>=400){
    surcharge=total*15/100;
        if(surcharge>=100){
            document.write(" Surcharge Amount= "+surcharge+"<br></br>");
            netamount=total+surcharge;
            document.write("Net Amount= "+netamount);
        }
    }
}

