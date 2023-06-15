let count=0;
document.getElementById("cont").innerText = count;

function doIncrement(){
    count = count+1;
    document.getElementById("cont").innerText = count;
}

function doReset() {
    count = 0;
    document.getElementById("cont").innerText = count;
}