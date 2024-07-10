const array = () => {
    a = [14, 53, 96, 25, 78];
    min = a[0];
    for (let i of a) {
        if (i < min) {
            min = i;
        }
    }
    document.write("Lowest Number = " + min);
    document.write("<br>");
    // a.sort();
    odd = a[0];
    for (let i of a) {
        if (i % 2 !== 0) {

            document.write(i+"<br>");
        }
    }
    document.write("<br>");
    l=a.length;
    mid = parseInt(l/2);
    // document.write(l);
    // document.write(mid);
    document.write("Middle Value:"+a[mid]);
}
array();