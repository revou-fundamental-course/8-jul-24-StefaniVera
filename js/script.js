// Input only number 
function process(input) {
    let value = input.value;
    let numbers = value.replace(/[^0-9]/g, "");
    input.value = numbers;
  }

  // Calculation Algorithm
  function calculate() {
    // Input from user
    const beratBadan = document.querySelector('#input-berat-badan').value;
    const tinggiBadan = (document.querySelector('#input-tinggi-badan').value) / 100;
    const usia = document.querySelector('#input-usia').value;
    const jenisKelamin = document.querySelector("input[name='gender']:checked").value;
  

    // Validation
    if(beratBadan == 0 || tinggiBadan == 0 || usia == 0) {
      alert('Inputan tidak boleh kosong!');
    } else {
      // Image Display
      document.querySelector('#body-index').style.display = "block";


      // BMI Formulation
      let bmi = (beratBadan / (tinggiBadan * tinggiBadan));
  
      
      // Variable Initiation
      document.getElementById("result").innerHTML = 'Hasil';
      document.getElementById("bmi-output").innerHTML = bmi.toFixed(1);


      // Qualification Output
      if(bmi < 18.5 && (jenisKelamin == 'Pria' || jenisKelamin == 'Wanita')) {
        document.querySelector('#range').innerHTML = "Hasil kurang dari 18.5"
        document.getElementById('keterangan').innerHTML = "Kekurangan Berat Badan";
        document.getElementById('penjelasan').innerHTML = "Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan."
      } else if(bmi >= 18.5 && bmi <= 24.9 && (jenisKelamin == 'Pria' || jenisKelamin == 'Wanita')) {
        document.querySelector('#range').innerHTML = "Hasil diantara 18.5 dan 24.9"
        document.getElementById('keterangan').innerHTML = "Normal (Ideal)";
        document.getElementById('penjelasan').innerHTML = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda."
      } else if(bmi >= 25 && bmi <= 29.9 && (jenisKelamin == 'Pria' || jenisKelamin == 'Wanita')) {
        document.querySelector('#range').innerHTML = "Hasil diantara 25 dan 29.9"
        document.getElementById('keterangan').innerHTML = "Kelebihan Berat Badan";
        document.getElementById('penjelasan').innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga badan normal."
      } else {
        document.querySelector('#range').innerHTML = "Hasil lebih dari 29.9"
        document.getElementById('keterangan').innerHTML = "Kegemukan (Obesitas)";
        document.getElementById('penjelasan').innerHTML = "Anda berada dalam kategori obesitas. Usahakan menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan unutk mengetahui resiko yang Anda miliki terkait berat badan berlebih."
      }

      document.getElementById('bmi-note').innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai kekhawatiran Anda terkait dengan berat badan Anda."
    }
  }
  
  // Clear Page
  function reload() {
    window.location.reload();
  }