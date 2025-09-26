// Musik dengan Howler.js
var sound = new Howl({
  src: ['sound.mp3'], 
  autoplay: true,
  loop: true,
  volume: 0.7
});

// Validasi nama
function cekNama() {
  const namaInput = document.getElementById("nama").value.trim();
  const pesan = document.getElementById("pesan");

  if (namaInput === "") {
    pesan.innerText = "😜 Eh... masa ga diisi, isi dong";
  } else if (namaInput.toLowerCase() !== "ria rahmawati") {
    pesan.innerText = "😝 Ups, salah! Coba lagi ya...";
  } else {
    document.getElementById("formPage").classList.add("hidden");
    document.getElementById("celebrationPage").classList.remove("hidden");

    // Update judul
    document.getElementById("judulUlangTahun").innerText =
      "🎉 Selamat Ulang Tahun " + namaInput + " 🎉";

    // Confetti
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });

    // Animasi cake
    gsap.from(".cake", { scale: 0, duration: 1.5, ease: "elastic" });

    // Animasi balon
    animasiBalon();

    // Tambah sprinkle topping
    tambahSprinkle();
  }
}

// Sprinkle
function tambahSprinkle() {
  const topLayer = document.querySelector(".layer-top");
  const colors = ["#ff4b5c", "#77dd77", "#779ecb", "#fdfd96", "#cbaacb"];

  for (let i = 0; i < 25; i++) {
    const sprinkle = document.createElement("div");
    sprinkle.classList.add("sprinkle");
    sprinkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    sprinkle.style.top = (Math.random() * 40) + "px";
    sprinkle.style.left = (Math.random() * 160) + "px";
    topLayer.appendChild(sprinkle);
  }
}

// Tiup lilin
function tiupLilin() {
  const flame = document.getElementById("flame");

  if (flame) {
    // Api padam
    gsap.to(flame, { 
      scale: 0, 
      duration: 1, 
      opacity: 0, 
      onComplete: () => {
        flame.remove(); 
      }
    });

    // Efek asap
    for (let i = 0; i < 10; i++) {
      confetti({
        particleCount: 10,
        spread: 40,
        startVelocity: 20,
        origin: { y: 0.3 },
        colors: ["#ccc", "#ddd", "#eee"]
      });
    }

    // Notifikasi cantik
    Swal.fire({
      title: 'Makin Tua Aja Ya 🤣',
      text: 'Semoga semua harapan dan impianmu terkabul 💖',
      confirmButtonText: 'Aamiin ✨',
      confirmButtonColor: '#ff69b4'
    });
  }
}

// Animasi balon
function animasiBalon() {
  const balloons = document.querySelectorAll(".balloon");
  balloons.forEach((balloon, i) => {
    gsap.fromTo(balloon, 
      { y: 300, opacity: 0 }, 
      { 
        y: -500, 
        opacity: 1,
        duration: 6 + Math.random() * 3,
        repeat: -1,
        delay: i * 2,
        ease: "power1.inOut"
      }
    );
  });
}
