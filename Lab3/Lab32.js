function kiemTraCho(dogsJulia, dogsKate) {
    // Bước 1: Xóa tuổi mèo khỏi mảng của Julia
    const saoChepJulia = dogsJulia.slice(0);
    saoChepJulia.splice(0, 1); // Xóa phần tử đầu tiên trong mảng
    saoChepJulia.splice(-2); // Xóa hai phần tử cuối cùng trong mảng 

    // Bước 2: Tạo mảng mới chứa dữ liệu của Julia (đã sửa) và Kate
    const mangKetHop = saoChepJulia.concat(dogsKate); // Kết hợp mảng Julia đã sửa và mảng Kate
  
    // Bước 3: Kiểm tra từng con chó và hiển thị thông báo tương ứng
    mangKetHop.forEach(function (tuoiCho, index) {
      const thongBao =
        tuoiCho >= 3
          ? `Chó số ${index + 1} là chó trưởng thành và ${tuoiCho} tuổi`
          : `Chó số ${index + 1} vẫn là chó con`;
  
      console.log(thongBao); 
    });
  }
  
  // Dữ liệu thử nghiệm 1
  const choJulia1 = [3, 5, 2, 12, 7]; 
  const choKate1 = [4, 1, 15, 8, 3]; 
  
  console.log("Dữ liệu thử nghiệm 1:");
  kiemTraCho(choJulia1, choKate1); 
  
  // Dữ liệu thử nghiệm 2
  const choJulia2 = [9, 16, 6, 8, 3]; 
  const choKate2 = [10, 5, 6, 1, 4]; 
  console.log("Dữ liệu thử nghiệm 2:");
  kiemTraCho(choJulia2, choKate2); 