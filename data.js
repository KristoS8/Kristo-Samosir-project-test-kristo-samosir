let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById('ulList').classList.remove('hidden');
  } else {
    document.getElementById('ulList').classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
};

// Logika untuk mengubah jumlah card yang ditampilkan dan mengurutkannya
const perPageSelect = document.getElementById('perPage');
const sortSelect = document.getElementById('sort');
const cardContainer = document.getElementById('cardContainer');

perPageSelect.addEventListener('change', updatePage);
sortSelect.addEventListener('change', updatePage);

function updatePage() {
  const perPage = perPageSelect.value;
  const sort = sortSelect.value;

  // Lakukan pemrosesan data sesuai dengan perPage dan sort
  // ...

  // Hapus semua card yang ada sekarang
  cardContainer.innerHTML = '';

  // Tambahkan card sesuai dengan hasil pemrosesan data
  // ...

  // Contoh penambahan card
  for (let i = 0; i < perPage; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="https://placekitten.com/300/${200 + i}" alt="Kitten">
        <p>Date: January ${i + 1}, 2023</p>
        <h3>Title ${i + 1}</h3>
      `;
    cardContainer.appendChild(card);
  }
}

// Inisialisasi halaman pertama
updatePage();
