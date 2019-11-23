

sunucu.baglan('mongodb://127.0.0.1/sohbet', function(hata, veritabani){
    if(hata){
        throw hata;
    }
    konsol.logu('Sunucu Aktif');

    
