function combineStrings(str1, str2, str3) {
    let result = ''; // Penampung hasil
    let maxLength = Math.max(str1.length, str2.length, str3.length);

    // Looping setiap karakter dari string
    for (let i = 0; i < maxLength; i++) {
      result += (str1[i] || '') + (str2[i] || '') + (str3[i] || ''); // menggabungkan karakter dari ketiga string
    } 
    
    return result; // mengembalikan hasil 
  }
  
  
  console.log(combineStrings("aa", "bb", "cc"));  
  console.log(combineStrings("aad", "bbd", "ccd"));  
  console.log(combineStrings("aa", "bb", "cc", "dd")); 
  console.log(combineStrings("hello", "world", "123")); 