const simpleIntrest = (p,t,r) => {
    si = (p*t*r)/100;
    document.write("Simple Intrest ="+si);
}
x = parseInt(prompt("enter the p value"));
y = parseInt(prompt("enter the t value"));
z = parseInt(prompt("enter the r value"));
simpleIntrest(x,y,z);