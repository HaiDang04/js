// Hàm chuyển đổi từ kiểu underscore_case sang camelCase
function convertToCamelCase(underscoreString) {
    var words = underscoreString.split('_');
    var camelCaseString = words[0];
  
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word[0].toUpperCase() + word.slice(1);
      camelCaseString += capitalizedWord;
    }
  
    return camelCaseString;
  }
  
  // Đoạn văn bản đầu vào
  var inputText = "underscore_case\nfirst_name\nSome_Variable\ncalculate_AGE\ndelayed_departure";
  
  // Chuyển đổi các biến từ underscore_case sang camelCase
  var variableList = inputText.split('\n');
  for (var j = 0; j < variableList.length; j++) {
    var variable = variableList[j];
    var camelCaseVariable = convertToCamelCase(variable);
    console.log(camelCaseVariable + ' ✅'.repeat(j + 1));
  }