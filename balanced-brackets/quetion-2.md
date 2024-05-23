# 2. Balanced Bracket (Score: 30)

## Sampe 1:

- Input: `{ [ ( ) ] }`
- Output: YES
- Penjelasan: Setiap bracket seimbang, antara bracket buka dan bracket tutup.
  - opening : { }
  - opening : [ ]
  - opening : ( }

## Sampel 2:

- Input: { [ ( ] ) }
- Output: NO
- Penjelasan: String `{ [ ( ] ) }` tidak seimbang untuk karakter yang diapit oleh `{` dan `}` yaitu `[ ( ] )`.

## Sampel 3:

- Input: `{ ( ( [ ] ) [ ] ) [ ] }`
- Output: YES
- Penjelasan: Setiap bracket seimbang, antara bracket buka dan bracket tutup, meskipun struktur bracket tidak beraturan.

## Aturan:

1. Tanda bracket / karakter yang diperbolehkan sebagai berikut: `(` , `)` , `{` , `}` , atau `[` , `]`.
2. Bracket bisa dipisahkan dengan atau tanpa whitespace.
3. Periksa tanda kurung yang memiliki kecocokan antara bracket buka dan bracket tutup dengan mengembalikan nilai string `YES` atau `NO`.

## Soal:

1. Buat fungsi untuk menemukan Balanced Bracket dengan kompleksitas paling rendah!
2. Berapa ukuran kompleksitas kodinganmu? Jelaskan detail kompleksitas jawaban No.2, cantumkan di README Repo!
