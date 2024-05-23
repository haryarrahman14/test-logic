# 1. Weighted Strings (Score: 20)

Alfabet dari a sampai z memiliki bobot sebesar angka urutannya, misal: a = 1, b = 2, c = 3, ..., z = 26. Bobot sebuah string merupakan penjumlahan bobot dari kesuluruhan karakter.
Contoh: gits = 7 + 9 + 20 + 19 = 55

## Sampel:

Input:
Diberikan sebuah string abbcccd dengan queries [1, 3, 9, 8]. Queries digunakan untuk menentukan status dari angka di dalam queries dengan aturan:

1. Apabila angka di queries bernilai sama dengan bobot karakter/substring maka return Yes.
2. Apabila angka di queries bernilai beda dengan bobot karakter/substring maka return No.
   Pembobotan substring dan karakter:
   a = 1
   b = 2
   bb = 4
   c = 3
   cc = 6
   ccc = 9
   d = 4
   Output: [Yes, Yes, Yes, No]
   Penjelasan:
3. 1 => Yes, 3 => Yes, 9 => Yes, dan 8 => No.
4. Dari pembobotan substring dan karakter yang dimiliki abbcccd maka status dari queries [1, 3, 9, 8] adalah [Yes, Yes, Yes, No].

## Aturan:

1. Jika terdapat karakter yang berulang dan berurutan perlu dirincikan ke dalam bentuk substring dari perulangan pertama hingga n. Contoh: bbccc => b, bb, c, cc, ccc.

## Soal:

Buat fungsi untuk menyelesaikan permasalahan Weighted Strings!
