function isValidWalk(walk) {
    // Cek apakah panjang array walk sama dengan 10 menit
    if (walk.length !== 10) return false;
  
    // Koordinat or titik awal
    let x = 0;
    let y = 0;
  
    // Loop melalui setiap langkah dalam walk
    for (let direction of walk) {
      if (direction === 'n') y += 1;  // Utara menambah koordinat y
      if (direction === 's') y -= 1;  // Selatan mengurangi koordinat y
      if (direction === 'e') x += 1;  // Timur menambah koordinat x
      if (direction === 'w') x -= 1;  // Barat mengurangi koordinat x
    }
  
    // Jika kembali ke titik awal (0,0), return true, else return false
    return x === 0 && y === 0;
  }
  console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); 
  console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
  console.log(isValidWalk(['s', 'e', 's', 'e', 's', 'e', 's', 'e', 's', 'e'])); 
  console.log(isValidWalk(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'])); 
  console.log(isValidWalk(['n', 'n', 'n', 'n', 's', 's', 's',  's'])); 
  console.log(isValidWalk(['n', 'n', 'n', 'n', 'n','n','s', 's', 's', 's', 's', 's'])); 
    