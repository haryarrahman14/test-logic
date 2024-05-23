# 3. Highest Palindrome (Score: 50)

Kamu memiliki string yang merepresentasikan angka 3943 lalu diberikan sebuah variabel k untuk melakukan replacement karakter sejumlah k pada string agar mendapatkan bentuk palindrom dengan nilai tertinggi.

## Sampel 1:

- Input:`string: 3943`
- k: 1
- palindrom:
  1. 39`4`3 => 39`9`3
  2. 3`9`43 => 3`4`43
- Output: 39`9`3
- Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 39`9`3 dikarenakan 39`9`3 > 3`4`43.

## Sampel 2:

- Input:`string: 3943`
- k: 1
- palindrom:
  1. 932239 => sudah palindrome
  2. Perlu replacement sebanyak k = 2 => 9`9`22`9`9
- Output: 9`9`22`9`9
- Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 9`9`22`9`9 dikarenakan 9`9`22`9`9 > 9`3`22`3`9.

## Aturan:

1. Jika dari sebuah string tidak ditemukan bentuk palindrome-nya meski sudah melakukan replacement dan tidak merepresentasikan sebuah angka maka akan mengeluarkan output `-1`.
2. Tidak boleh menggunakan fungsi bawaan/tools untuk pencarian/filter/sort.
3. Tidak boleh menggunakan looping.
4. Hanya diperkenankan menggunakan rekursif.

# Soal:

1. Buat fungsi yang digunakan untuk menyelesaikan permasalahan Highest Palindrome!
