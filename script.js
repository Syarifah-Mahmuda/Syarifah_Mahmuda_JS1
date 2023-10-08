// Contoh penggunaan if, else
let nilai = 75;

if (nilai >= 70) {
  console.log('Selamat, Anda lulus!');
} else {
  console.log('Maaf, Anda tidak lulus.');
}

// nested if
let umur = 18;
let memilikiSIM = true;

if (umur >= 17) {
  console.log('Anda cukup umur.');

  if (memilikiSIM) {
    console.log('Anda dapat mengemudi.');
  } else {
    console.log('Anda perlu mengurus SIM.');
  }
} else {
  console.log('Anda belum cukup umur untuk memiliki SIM.');
}

// Contoh penggunaan switch case
let hari = 'Senin';

switch (hari) {
  case 'Senin':
    console.log('Hari ini adalah awal minggu.');
    break;
  case 'Selasa':
    console.log('Hari ini adalah hari kedua dalam minggu.');
    break;
  case 'Rabu':
    console.log('Hari ini adalah hari pertengahan minggu.');
    break;
  case 'Kamis':
    console.log('Hari ini sudah mendekati akhir minggu.');
    break;
  case 'Jumat':
    console.log('Hari ini adalah hari Jumat, sebentar lagi libur.');
    break;
  case 'Sabtu':
  case 'Minggu':
    console.log('Hari ini adalah akhir pekan!');
    break;
  default:
    console.log('Hari yang Anda masukkan tidak valid.');
}

// Contoh penggunaan for statement
for (let i = 0; i <= 5; i++) {
  console.log('Nomor ' + i);
}

// Contoh penggunaan while
let nomor = 1;
while (nomor <= 5) {
  console.log('Nomor: ' + nomor);
  nomor++;
}

// Contoh penggunaan do while
let nomor2 = 1;
do {
  console.log('Nomor ke 2: ' + nomor2);
  nomor2++;
} while (nomor2 <= 5);

// Contoh penggunaan function
function kurang(a, b) {
  return a - b;
}

let hasilPengurangan = kurang(10, 5);
console.log('Hasil pengurangan: ' + hasilPengurangan);
