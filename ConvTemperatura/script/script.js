
function converterTemp(event){
    event.preventDefault();
    let valorEntrada= parseFloat( document.getElementById("display").value);
    let opcao = document.getElementById("escala").value;
   //variaveis para respostas das conversoes
    let resFarenheit;
    let resKelvin;
    let resRankine;
    let resCelsius;

    switch(opcao){
        case 'c':
        //celsius para farenheit
        resFarenheit=(valorEntrada*1.8)+32;
        //celsius para kelvin
        resKelvin=(valorEntrada+273.15);
        //celsius para rankine
        resRankine=(valorEntrada*(9/5)+491.67);
        //Resultados da conversao de celsius
        document.getElementById("total1").value= resFarenheit.toFixed(2) + "°f";
        document.getElementById("total2").value= resKelvin.toFixed(2) + "°k";
        document.getElementById("total3").value= resRankine.toFixed(2) + "°r";
        break;

        case 'f':
            //farenheit para celsius 
            resCelsius=(valorEntrada-32)*(5/9);
            //farenheit para kelvin
            resKelvin=(valorEntrada-32)*(5/9)+273.15;
            //farenheit para rankine
            resRankine=valorEntrada+459.67;
            //Resultados da conversao de farenheit
            document.getElementById("total1").value= resCelsius.toFixed(2) + "°c";
            document.getElementById("total2").value= resKelvin.toFixed(2) + "°k";
            document.getElementById("total3").value= resRankine.toFixed(2) + "°r";
            break;

        case 'k':
            //kelvin para celsius
            resCelsius=valorEntrada-273.15;
            //kelvin  para farenheit
            resFarenheit=(valorEntrada-273.15)*(9/5)+32;
            //kelvin para rankine
            resRankine=valorEntrada*1.8;
            //Resultados da conversao de kelvin
            document.getElementById("total1").value= resCelsius.toFixed(2) + "°c";
            document.getElementById("total2").value= resFarenheit.toFixed(2) + "°f";
            document.getElementById("total3").value= resRankine.toFixed(2) + "°r"; 
            break;
        
        case 'r':
            //rankine para celsius
            resCelsius=(valorEntrada-491.67)*5/9;
            //rankine para farenheit
            resFarenheit=valorEntrada-459.67;
            //rankine para kelvin
            resKelvin=valorEntrada*(5/9);
            //Resultados da conversao de kelvin
            document.getElementById("total1").value= resCelsius.toFixed(2) + "°c";
            document.getElementById("total2").value= resFarenheit.toFixed(2) + "°f";
            document.getElementById("total3").value= resKelvin.toFixed(2) + "°k";
           //console.log(resCelsius,resFarenheit,resRankine);
    }
}