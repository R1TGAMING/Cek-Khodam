function handleSubmit() {
  const khodam = ["Bintang Skibidi", "Mewing", "Alomani", "Si Atmin", "Raja Sigma", "Mr. Ironi", "Mahkluk Jawa", "Ambatron", "Singa Emas", "Macan Putih", "Sosok Hytam", "Nugroho", "Mamang Rusdi", "Reimu Hakurei", "Cirno Jawa", "Onde Mande", "T-Rex Super Gyatt", "Knek", "Little Princess Si Dongo", "Go And Jo", "Mahkluk Komunis", "Si Kumis Penguasa", "Kucing Meow Meow", "Apeci Apecu", "Pace Yunus", "Toni 99 Kapolres", "Roblok Mewing", "Rehan Wangsaff", "Si Suki", "Wibu Kelas Kakap", "Si Nolep", "Icikiwir", "Mawurah Cik", "Pecinta Anak Kecil", "Pemain Blue Archive", "Onee-San Alamak", "Raja Iblis", "Dewa Kehidupan", "Dewa Kematian", "Penyihir Hitam", "Bocil Kematian", "BSK • RUOK", "Jago Pepeng", "Si Ucok", "Boboiboy Kuase Sigma", "Garena", "Moontod", "Sepuh", " Dark Sistem", "Marisa Kirisame", "Johan Liebert", "Aizen Tukang Satir", "Kiyotaka Ayanokouji", "Sigit Rendang", "Aing Maung", "Rahmat Mejikom", "Anos Voldigoad", "Rimuru Tempest", "Kaori Cicak", "Kai Cenat", "Sungut Lele", "Gelombang Laut Blukutuk", "Raja Kripto", "Sule Prikitiw", "Mas Narji", "Tempe Goreng", "Kak Gem"];
  const form = document.getElementById("form-khodam");
  const result = document.getElementById("result");
  const nama = document.getElementById("form-name").value;
  const random = Math.floor(Math.random() * khodam.length);
  
  form.innerHTML = "<p>Selamat " + nama + " Khodam Mu Adalah <p>"+ "<br><h2><span class = khodamResult>"+khodam[random]+"</span><h2><br><h3>Jika Kalian Suka Support Terus Ipii Ya!!";
  
}