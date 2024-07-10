function upperCase()
{
    
    UpperCase = document.getElementById("text").value;
    k=UpperCase.toUpperCase();
    document.getElementById("text").value = k;
}
function lowerCase()
{
    lowercase = document.getElementById("text").value;
    k = lowercase.toLowerCase();
    document.getElementById("text").value = k;
}

function capt()
        {
            let k = document.getElementById("text").value; 
            const strArray = [];
            let str = "";
            for (let i = 0; i < k.length; i++) {
            if (k[i] === " ") {
            str = str.charAt(0).toUpperCase() + str.slice(1); 
            strArray.push(str); 
            str = ""; 
        } 
        else {
            str += k[i]; 
        }
        }
        str = str.charAt(0).toUpperCase() + str.slice(1); 
        strArray.push(str);
        total="";
        for(let i of strArray)
        {
        total=total+" "+i;
        }
       document.getElementById("text").value = total;
       }


function length()
    {
        k = document.getElementById("text").value; 
        z = k.length;
        document.getElementById("result").innerHTML = z;
    }
