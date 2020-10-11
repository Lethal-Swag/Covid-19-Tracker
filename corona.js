let input = document.getElementById('input');
let TC = document.getElementById('TC');
let TR = document.getElementById("TR");
let TD = document.getElementById("TD");
let NC = document.getElementById("NC");
let C = document.getElementById('C');


async function corono()
{
    const response = await fetch(`https://api.covid19api.com/summary`);
    const data = await response.json();
    
    let table = document.querySelector('.table');
    for( let i = 1; i < data['Countries'].length;i++){
            let x = table.insertRow();
            
            x.insertCell(0);
            table.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country'];
            table.rows[i].cells[0].style.backgroundColor = '#FFDAB9';
            
            x.insertCell(1);
            table.rows[i].cells[1].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
            table.rows[i].cells[1].style.backgroundColor = '#87CEEB';

            x.insertCell(2);
            table.rows[i].cells[2].innerHTML = data['Countries'][i-1]['TotalRecovered'];
            table.rows[i].cells[2].style.backgroundColor = '#3CB371';

            x.insertCell(3);
            table.rows[i].cells[3].innerHTML = data['Countries'][i-1]['TotalDeaths'];
            table.rows[i].cells[3].style.backgroundColor = '#CD5C5C';

            x.insertCell(4);
            table.rows[i].cells[4].innerHTML = data['Countries'][i-1]['NewConfirmed'];
            table.rows[i].cells[4].style.backgroundColor = '#D8BFD8';


    }
} 
corono();

async function Search()
{
    const response = await fetch(`https://api.covid19api.com/summary`);
    const data = await response.json();
    let Countries = data['Countries'];
    let key;
    let s_country = input.value;
    try{
        if(input.value = "") throw "Empty";
        console.log(typeof(input.value));
   for(let i=0;i<Countries.length;i++){
       if(s_country===Countries[i].Country){
        key=i;
        break;
       }
   }
   C.value = Countries[key].Country;
   TC.value = Countries[key].TotalConfirmed;
   TD.value = Countries[key].TotalDeaths;
   TR.value = Countries[key].TotalRecovered;
   NC.value = Countries[key].NewConfirmed;
}catch(err ){
    alert(err);
}
}
