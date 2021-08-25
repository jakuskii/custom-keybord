document.getElementById("product5").style.display = "none";

document.getElementById('60button').addEventListener('click',
function(){
    document.querySelector('.bg-modal60').style.display = 'flex';
});
document.querySelector('.close60').addEventListener('click',
function() {
 document.querySelector('.bg-modal60').style.display = 'none';
});


document.getElementById('75button').addEventListener('click',
function(){
    document.querySelector('.bg-modal75').style.display = 'flex';
});
document.querySelector('.close75').addEventListener('click',
function() {
 document.querySelector('.bg-modal75').style.display = 'none';
});

document.getElementById('80button').addEventListener('click',
function(){
    document.querySelector('.bg-modal80').style.display = 'flex';
});
document.querySelector('.close80').addEventListener('click',
function() {
 document.querySelector('.bg-modal80').style.display = 'none';
});

document.getElementById('100button').addEventListener('click',
function(){
    document.querySelector('.bg-modal100').style.display = 'flex';
});
document.querySelector('.close100').addEventListener('click',
function() {
 document.querySelector('.bg-modal100').style.display = 'none';
});

function base5(){
    document.getElementById("boxall").style.display = "none";
    document.getElementById("product5").style.display = "inline";
}
function close(){
    document.getElementById("boxall").style.display = "inline";   
    document.getElementById("product5").style.display = "none";
}
