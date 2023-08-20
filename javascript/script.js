fetch("https://api.npoint.io/99c279bb173a6e28359c/data")
  .then((response) => response.json())
  .then((data) => {
    displayData(data);
  });

function displayData(data) {
  const container = document.getElementById("container");
  data.map((val) => {
    const surah = document.createElement("div");
    const h4Element = document.createElement("h4");
    const h3Element = document.createElement("h3");
    const h5Element = document.createElement("h5");
    const pElement = document.createElement("p");
    h3Element.textContent = val.nama;
    h4Element.textContent = `(${val.arti})`;
    h5Element.textContent = `${val.ayat} ayat`;
    pElement.innerHTML = val.keterangan;
    surah.classList.add("surah");
    h3Element.classList.add("nama-surah");
    h4Element.classList.add("arti-surah");
    h5Element.classList.add("jumlah-ayat");
    pElement.classList.add("keterangan");
    container.appendChild(surah);
    surah.appendChild(h3Element);
    surah.appendChild(h4Element);
    surah.appendChild(h5Element);
    surah.appendChild(pElement);
  });
}
