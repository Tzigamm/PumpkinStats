listClub = [    'CLUB AMOUR',
                'CLUB INSALAN',
                'CLUB 3D',
                'CLUB FOG',
                'CLUB ROBOT',
                'CLUB INSAKURA',
                'CLUB INSALIVE',
                'CLUB INSATISFAIT(E)S',
                'CLUB TRIP',
                'CLUB BRICO',
                'CLUB ENVIRONNEMENT',
                'CLUB IMPRO',
                'CLUB PHOTOS VIDEOS',
                'CLUB CHILL'];
            
dataTableUtilisations = [[  'Indice',
                'KPOTE',
                'INSALAN',
                'CLUB3D',
                'FOG18',
                'ROBOT',
                'INSAKURA',
                'LIVE',
                'CLITO',
                'RACLETTE18',
                'BRICO19',
                'RECYCLE',
                'PUTACLIC',
                'PHOTOVIDEO',
                'TOUTSCHUSS' ]];
                
dataTableActivations = [[  'Indice',
                'KPOTE',
                'INSALAN',
                'CLUB3D',
                'FOG18',
                'ROBOT',
                'INSAKURA',
                'LIVE',
                'CLITO',
                'RACLETTE18',
                'BRICO19',
                'RECYCLE',
                'PUTACLIC',
                'PHOTOVIDEO',
                'TOUTSCHUSS' ]];
                
dataTablePoints = [[  'Indice',
                'KPOTE',
                'INSALAN',
                'CLUB3D',
                'FOG18',
                'ROBOT',
                'INSAKURA',
                'LIVE',
                'CLITO',
                'RACLETTE18',
                'BRICO19',
                'RECYCLE',
                'PUTACLIC',
                'PHOTOVIDEO',
                'TOUTSCHUSS' ]];

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data tables.
    createTables();

    var dataUtil = google.visualization.arrayToDataTable(dataTableUtilisations)
    var dataActiv = google.visualization.arrayToDataTable(dataTableActivations)
    var dataPoints = google.visualization.arrayToDataTable(dataTablePoints)

    // Set chart options
    var optionsUtil = {'title':'Utilisations par Club',
                   'width':1000,
                   'height':700};
    var optionsActiv = {'title':'Activations par Club',
                   'width':1000,
                   'height':700};
    var optionsPoints = {'title':'Points par Club',
                   'width':1000,
                   'height':700};

    // Instantiate and draw our chart, passing in some options.
    var utilisationChart = new google.visualization.LineChart(document.getElementById('utilisation_chart'));
    utilisationChart.draw(dataUtil, optionsUtil);
    var navigationChart = new google.visualization.LineChart(document.getElementById('activation_chart'));
    navigationChart.draw(dataActiv, optionsActiv);
    var pointsChart = new google.visualization.LineChart(document.getElementById('points_chart'));
    pointsChart.draw(dataPoints, optionsPoints);
    
    document.querySelector('h2').style.display='none';
    document.querySelector('img').style.display='none';
}

function determineDate(minutes)
{
    //We don't know how Google Charts' API samples the x-axis
    // so we need this tricky function to calculate what's the date corresponding to the 'minutes' value
    round = 0
    semirange = 0.5
    newmin = minutes/720;
    hours = (12+Math.floor(minutes/60))%24
    if(newmin < round+semirange){
        return 'mardi 18, '+hours+'h'}
    else if(newmin>round+1-semirange && newmin <round+1+semirange){
        return 'mardi 18, '+hours+'h'}
    else if(newmin>round+2-semirange && newmin <round+2+semirange){
        return 'mercredi 19, '+hours+'h'}
    else if(newmin>round+3-semirange && newmin <round+3+semirange){
        return 'mercredi 19, '+hours+'h'}
    else if(newmin>round+4-semirange && newmin <round+4+semirange){
        return 'jeudi 20, '+hours+'h'}
    else if(newmin>round+5-semirange && newmin <round+5+semirange){
        return 'jeudi 20, '+hours+'h'}
    else if(newmin>round+6-semirange && newmin <round+6+semirange){
        return 'vendredi 21, '+hours+'h'}
    else if(newmin>round+7-semirange && newmin <round+7+semirange){
        return 'vendredi 21, '+hours+'h'}
    else if(newmin>round+8-semirange && newmin <round+8+semirange){
        return 'samedi 22, '+hours+'h'}
    else if(newmin>round+9-semirange && newmin <round+9+semirange){
        return 'samedi 22, '+hours+'h'}
    else if(newmin>round+10-semirange && newmin <round+10+semirange){
        return 'dimanche 23, '+hours+'h'}
    else if(newmin>round+11-semirange && newmin <round+11+semirange){
        return 'dimanche 23, '+hours+'h'}
    else if(newmin>round+12-semirange && newmin <round+12+semirange){
        return 'lundi 24, '+hours+'h'}
    else if(newmin>round+13-semirange && newmin <round+13+semirange){
        return 'lundi 24, '+hours+'h'}
    else if(newmin>round+14-semirange && newmin <round+14+semirange){
        return 'mardi 25, '+hours+'h'}
    else if(newmin>round+15-semirange && newmin <round+15+semirange){
        return 'mardi 25, '+hours+'h'}
    else if(newmin>round+16-semirange && newmin <round+16+semirange){
        return 'mercredi 26, '+hours+'h'}
    else if(newmin>round+17-semirange && newmin <round+17+semirange){
        return 'mercredi 26, '+hours+'h'}
    else if(newmin>round+18-semirange && newmin <round+18+semirange){
        return 'jeudi 27, '+hours+'h'}
    else if(newmin>round+19-semirange && newmin <round+19+semirange){
        return 'jeudi 27, '+hours+'h'}
    else if(newmin>round+20-semirange && newmin <round+20+semirange){
        return 'vendredi 28, '+hours+'h'}
    else if(newmin>round+21-semirange && newmin <round+21+semirange){
        return 'vendredi 28, '+hours+'h'}
    else if(newmin>round+22-semirange && newmin <round+22+semirange){
        return 'samedi 29, '+hours+'h'}
    else if(newmin>round+23-semirange && newmin <round+23+semirange){
        return 'samedi 29, '+hours+'h'}
    else if(newmin>round+24-semirange && newmin <round+24+semirange){
        return 'dimanche 30, '+hours+'h'}
    else if(newmin>round+25-semirange && newmin <round+25+semirange){
        return 'dimanche 30, '+hours+'h'}
    else if(newmin>round+26-semirange && newmin <round+26+semirange){
        return 'lundi 1, '+hours+'h'}
    else{
        return ''}
}

function createTables() 
{
    for(var index = 1; index < dataTableUtilisations[0].length; index++)
    {
        promoCode = dataTableUtilisations[0][index]
        dataOnpromoCode = document.getElementsByClassName(promoCode)
        for(var j = 0; j < dataOnpromoCode.length; j++)
        {
            nbrUtil = dataOnpromoCode[j].querySelector('.utilisation').innerText;
            nbrActiv = dataOnpromoCode[j].querySelector('.activation').innerText;
            nbrPoints = dataOnpromoCode[j].querySelector('.points').innerText;
            if(index==1) //First promo code
            {
                jdate = determineDate(j)
                dataTableUtilisations.push([jdate])
                dataTableActivations.push([jdate])
                dataTablePoints.push([jdate])
            }
            
            dataTableUtilisations[j+1].push(parseInt(nbrUtil,10));
            dataTableActivations[j+1].push(parseInt(nbrActiv,10));
            dataTablePoints[j+1].push(parseInt(nbrPoints,10));
        }
        
    }
}
