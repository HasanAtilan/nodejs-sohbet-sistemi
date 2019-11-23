sunucu.baglan('mongodb://127.0.0.1/sohbet', function(hata, veritabani){
    if(hata){
        throw hata;
    }
    konsol.logu('Sunucu Aktif');

  


        // --- fonksiyon baslat --- \\

            let kullaniciaktifligi = 0;
            let toplammesaj = 0;

            sohbet.ara().sayi(function(hata, veri){
                toplammesaj = 2;
                var genelOnline = 0;
                var oyuncuAramaOnline = 0;
                kullanici.in('genel').kullanicilar((hata, kullanicilar) => {
                    if (hata) throw hata;
                    genelOnline = kullanicilar.sayi;
                    soket.girisi.v2('loglar', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                    soket.verial('istatistik', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                });
                kullanici.in('oyuncuarama').kullanicilar((hata, kullanicilar) => {
                    if (hata) throw hata;
                    genelOnline = kullanicilar.sayi;
                    soket.girisi.v2('loglar', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                    soket.verial('istatistik', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                })
				 kullanici.in('twitter').kullanicilar((hata, kullanicilar) => {
                    if (hata) throw hata;
                    genelOnline = kullanicilar.sayi;
                    soket.girisi.v2('loglar', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                    soket.verial('istatistik', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                })
                 kullanici.in('teamspeak3').kullanicilar((hata, kullanicilar) => {
                    if (hata) throw hata;
                    genelOnline = kullanicilar.sayi;
                    soket.girisi.v2('loglar', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                    soket.verial('istatistik', {aktif: toplamaktif, mesaj: toplammesaj, kanallar: {genel: genelOnline, oyuncu_arama: oyuncuAramaOnline}});
                })
            });
        }
