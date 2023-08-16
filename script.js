// Hàm đếm số lượng các chữ cái Tiếng Việt có thể được tạo thành trong 1 chuỗi chữ cái latin nhập vào từ bàn phím
// Cách gõ các chữ cái Tiếng Việt bằng các chữ cái latin của kiểu gõ telex: ă=aw, â=aa, đ=dd, ê=ee, ô=oo, ơ=ow, ư=w
function countVietnameseCharacters(input) {
  // Khai báo 1 biểu thức chính quy (regular expression) viCharacters, dựa theo các chữ cái tiếng Việt cần tìm
  const viCharacters = /aw|aa|dd|ee|oo|ow|w/g;

  // Sử dụng phương thức match() để tìm các ký tự trong input khớp với viCharacters
  // Kết quả trả về là 1 mảng chứa tất cả các kí tự khớp, hoặc null nếu không có kí tự nào khớp.
  const matches = input.match(viCharacters);
  // console.log(matches);

  // Kiểm tra nếu matches tồn tại (không phải null), thì trả về độ dài của matches (số lượng ký tự tiếng Việt đã tìm thấy). Nếu không, trả về 0
  return matches ? `${matches.length} (${matches})` : 0;
}

// 10 test case
const input1 = "hfdawhwhcoomdd"; console.log(countVietnameseCharacters(input1)); // Output: 4 (aw,w,oo,dd)
const input2 = "awaaddaaooww"; console.log(countVietnameseCharacters(input2)); // Output: 7 (aw,aa,dd,aa,oo,w,w)
const input3 = "nothing"; console.log(countVietnameseCharacters(input3)); // Output: 0
const input4 = "oopww"; console.log(countVietnameseCharacters(input4)); // Output: 3 (oo,w,w)
const input5 = "awdawaaee"; console.log(countVietnameseCharacters(input5)); // Output: 4 (aw,aw,aa,ee)
const input6 = "wowoda"; console.log(countVietnameseCharacters(input6)); // Output: 2 (w,ow)
const input7 = "ddaawwow"; console.log(countVietnameseCharacters(input7)); // Output: 5 (dd,aa,w,w,ow)
const input8 = "dddooaoeowwdwowooaoewowowwwaaaaoo"; console.log(countVietnameseCharacters(input8)); // Output: 15 (dd,oo,ow,w,w,ow,oo,w,ow,ow,w,w,aa,aa,oo)
const input9 = "aawwooddaawwaa"; console.log(countVietnameseCharacters(input9)); // Output: 9 (aa,w,w,oo,dd,aa,w,w,aa)
const input10 = "aeeeeaaa"; console.log(countVietnameseCharacters(input10)); // Output: 3 (ee,ee,aa)
