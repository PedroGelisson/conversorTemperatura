function convTemp(event){
    event.preventDefault();
    //capturando o valor de entrada no display
    let valorEntrada=parseFloat(document.getElementById("entrada").value);
    //capturando as opcoes de escalas
    let opcao=document.getElementById("escala").value;

    //variaveis de resultados
    let rCelsius;
    let rFarenheit;
    let rKelvin;
    let rRankine;

    //construcao dos calculos
    switch(opcao){
        case 'c':
            //celsius para farenheit
            rFarenheit=(valorEntrada*(9/5))+32;
            //celsius para kelvin
            rKelvin=valorEntrada+273.15;
            //celsius para rankine
            rRankine=valorEntrada*(9/5)+491.67;

            //resultado das conversoes de celsius
            document.getElementById("total1").value=rFarenheit.toFixed(2)+"°f";
            document.getElementById("total2").value=rKelvin.toFixed(2)+"°k";
            document.getElementById("total3").value=rRankine.toFixed(2)+"°r";
            break;
        
        case 'f':
            //farenheit para celsius
            rCelsius=(valorEntrada-32)*5/9;
            //farenheit para kelvin
            rKelvin=(valorEntrada-32)*(5/9)+273.15;
            //farenheit para rankine
            rRankine=valorEntrada+459.67;

            //resultado das conversoes de farenheit
            document.getElementById("total1").value=rCelsius.toFixed(2)+"°c";
            document.getElementById("total2").value=rKelvin.toFixed(2)+"°k";
            document.getElementById("total3").value=rRankine.toFixed(2)+"°r";
            break;

        case 'k':
            //kelvin para celsius
            rCelsius=valorEntrada-273.15;
            //kelvin para farenheit
            rFarenheit=(valorEntrada-273.15)*(9/5)+32;
            //kelvin para rankine
            rRankine=valorEntrada*1.8;

            //resultado das conversoes de kelvin
            document.getElementById("total1").value=rCelsius.toFixed(2)+"°c";
            document.getElementById("total2").value=rFarenheit.toFixed(2)+"°f";
            document.getElementById("total3").value=rRankine.toFixed(2)+"°r";
            break;

        case 'r':
            //rankine para celsius
            rCelsius=(valorEntrada-491.67)*(5/9);;
            //rankine para farenheit
            rFarenheit=valorEntrada-459.67;
            //rankine para kelvin
            rKelvin=valorEntrada*(5/9);
    
            //resultado das conversoes de rankine
            document.getElementById("total1").value=rCelsius.toFixed(2)+"°c";
            document.getElementById("total2").value=rFarenheit.toFixed(2)+"°f";
            document.getElementById("total3").value=rKelvin.toFixed(2)+"°k";
            break;
    }
}