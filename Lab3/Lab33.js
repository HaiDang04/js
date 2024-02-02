function tinhTuoiTrungBinhNguoi(ages) {
    // Bước 1: Tính tuổi của chó theo tuổi của con người
    var tuoiNguoi = ages.map(function(tuoi) {
      if (tuoi <= 2) {
        return tuoi * 2; // Nếu tuổi chó nhỏ hơn hoặc bằng 2, nhân tuổi đó với 2
      } else {
        return 16 + tuoi * 4; // Nếu tuổi chó lớn hơn 2, tính tuổi người bằng 16 cộng với tuổi chó nhân 4
      }
    });
  
    // Bước 2: Loại trừ chó có tuổi dưới 18
    var tuoiChoiTren18 = tuoiNguoi.filter(function(tuoi) {
      return tuoi > 18; // Lọc ra các tuổi chó trưởng thành (lớn hơn 18)
    });
  
    // Bước 3: Tính tuổi trung bình của chó trưởng thành
    var tong = tuoiChoiTren18.reduce(function(acc, tuoi) {
      return acc + tuoi; // Tính tổng các tuổi chó trưởng thành
    }, 0);
    var tuoiTrungBinh = tong / tuoiChoiTren18.length; // Chia tổng cho số lượng chó trưởng thành để tính tuổi trung bình
  
    // Bước 4: Trả về tuổi trung bình của chó trưởng thành
    return tuoiTrungBinh;
  }
  
  // Test Data 1
  var tuois1 = [5, 2, 4, 1, 15, 8, 3];
  var ketQua1 = tinhTuoiTrungBinhNguoi(tuois1);
  console.log("Tuổi trung bình của chó theo tuổi người cho dữ liệu kiểm tra 1:", ketQua1);
  
  // Test Data 2
  var tuois2 = [16, 6, 10, 5, 6, 1, 4];
  var ketQua2 = tinhTuoiTrungBinhNguoi(tuois2);
  console.log("Tuổi trung bình của chó theo tuổi người cho dữ liệu kiểm tra 2:", ketQua2);