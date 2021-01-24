# visualnovel.github.io
Web visual novel

# Cara Mengubah Cerita?
- Buka file db.json
- key backgrounds: list nama file background yang akan digunakan, kosongkan untuk index array
- key sfx: nama file sound effect
- key name: nama character
- key char: nama file gambar character 
- key teks: teks dialog / cerita
- key bg: background yang akan dipake sesuaikan dengan list index pada key backgrounds
- Contoh:
- "name": "myname",
- "char": "people.png",
- "teks": "hi kawan-kawan selamat pagi",
- "bg": 1 (sesuaikan dengan urutan index pada key backgrounds )

- Simpan file gambar dan audio sound effect kalian pada folder assets
- Untuk gambar kalian bisa simpan di folder assets/images
- Untuk sound effect bisa kalian simpan di folder assets/audios
- Untuk backsound nya kalian bisa edit pada file app.json di variabel music (let music = "backsound.mp3")

# Demo:
- https://pamekasancode.github.io/visualnovel.github.io
