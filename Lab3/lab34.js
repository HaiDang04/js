const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];
  
  // Yêu cầu 1
  dogs.forEach(function(cho) {
    cho.khauPhanAnDeNghi = Math.trunc(cho.weight ** 0.75 * 28);
  });
  
  // Yêu cầu 2
  const choCuaSarah = dogs.find(function(cho) {
    return cho.owners.includes('Sarah');
  });
  console.log(choCuaSarah);
  console.log(choCuaSarah.curFood > choCuaSarah.khauPhanAnDeNghi ? "Chó của Sarah ăn quá nhiều!" : "Chó của Sarah ăn quá ít!");
  
  // Yêu cầu 3
  const chuAnNhieu = dogs
    .filter(function(cho) {
      return cho.curFood > cho.khauPhanAnDeNghi;
    })
    .flatMap(function(cho) {
      return cho.owners;
    });
  
  const chuAnIt = dogs
    .filter(function(cho) {
      return cho.curFood < cho.khauPhanAnDeNghi;
    })
    .flatMap(function(cho) {
      return cho.owners;
    });
  
  // Yêu cầu 4
  console.log(`${chuAnNhieu.join(' và ')} ăn quá nhiều!`);
  console.log(`${chuAnIt.join(' và ')} ăn quá ít!`);
  
  // Yêu cầu 5
  const khauPhanAnChinhXac = dogs.some(function(cho) {
    return cho.curFood === cho.khauPhanAnDeNghi;
  });
  console.log(khauPhanAnChinhXac);
  
  // Yêu cầu 6
  const khauPhanAnHopLy = dogs.every(function(cho) {
    return cho.curFood > cho.khauPhanAnDeNghi * 0.9 && cho.curFood < cho.khauPhanAnDeNghi * 1.1;
  });
  console.log(khauPhanAnHopLy);
  
  // Yêu cầu 7
  const choKhauPhanAnHopLy = dogs.filter(function(cho) {
    return cho.curFood > cho.khauPhanAnDeNghi * 0.9 && cho.curFood < cho.khauPhanAnDeNghi * 1.1;
  });
  console.log(choKhauPhanAnHopLy);
  
  // Yêu cầu 8
  const choMoi = dogs.slice().sort(function(a, b) {
    return a.khauPhanAnDeNghi - b.khauPhanAnDeNghi;
  });
  console.log(choMoi);