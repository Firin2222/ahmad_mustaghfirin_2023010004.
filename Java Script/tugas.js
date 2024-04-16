// Daftar nama siswa dan rata-rata nilai mereka
var students = [
    { nama: "John", Nilai: 85 },
    { nama: "Sarah", Nilai: 72 },
    { nama: "Mike", Nilai: 90 },
    { nama: "Emily", Nilai: 65 },
    { nama: "Alex", Nilai: 50 }
];

// Fungsi untuk menentukan kategori kelas berdasarkan rata-rata nilai
function getClassCategory(Nilai) {
    var category;

    // Multiconditional statement
    if (Nilai >= 90) {
        category = "A";
    } else if (Nilai >= 80) {
        category = "B";
    } else if (Nilai >= 70) {
        category = "C";
    } else if (Nilai >= 60) {
        category = "D";
    } else {
        category = "E";
    }

    return category;
}

// Iterasi melalui setiap siswa dan menampilkan informasi kelas mereka
students.forEach(function(student) {
    var className = getClassCategory(student.Nilai);

    // Switch style untuk menampilkan informasi kelas
    switch (className) {
        case "A":
            console.log(student.nama + " memiliki rata-rata nilai A.");
            break;
        case "B":
            console.log(student.nama + " memiliki rata-rata nilai B.");
            break;
        case "C":
            console.log(student.nama + " memiliki rata-rata nilai C.");
            break;
        case "D":
            console.log(student.nama + " memiliki rata-rata nilai D.");
            break;
        case "E":
            console.log(student.nama + " Silahkan Melakukan Ujian Susulan.");
            break;
        default:
            console.log("Informasi kelas tidak tersedia untuk " + student.nama);
    }
});