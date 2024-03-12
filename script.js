function addWork(){
    const inputs = document.getElementById('input').value;
    // const addToList = document.getElementById('lists').innerHTML;

   document.getElementById('lists').innerHTML = '1. ' + document.getElementById('input').value;
}