function process() {
  kode = document.getElementById("input_kode").value;
  qty = document.getElementById("input_qty").value;

  if (document.getElementById(kode) != null) {
    harga = document.getElementById(kode).innerText;
    jumlah = harga * qty;
    alert("Total pembayaran adalah : " + jumlah);
    kembalian = bayar(jumlah);

    if (kembalian < 0) {
      alert("Uang anda kurang : " + kembalian);
    } else {
      alert("total kembalian anda adalah : " + kembalian);
    }
  } else {
    if (kode === "" || 0) {
      alert("Harap diisi");
    } else {
      alert("Kode : " + kode + " Tidak ditemukan");
    }
  }
}

function bayar(jumlah) {
  uang_user = prompt("masukan uang user : ", "0");
  kembalian = uang_user - jumlah;
  return kembalian;
}
