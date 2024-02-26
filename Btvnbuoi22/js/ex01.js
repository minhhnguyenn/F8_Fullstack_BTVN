var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

function getError(field) {
    for (var error in errors) {
        if (field === error) {
            console.log(errors[error]["required"]);
        } else if (field.includes(".")) {
            for (var key in errors[error]) {
                if (field.slice(0, field.indexOf(".")) === error && field.slice(field.indexOf(".") + 1) === key) {
                    console.log(errors[error][key]);
                }
            }
        }
    }
}
getError("name");
getError("name.min");
getError("email");
getError("email.email");
getError("email.unique");
getError("password");
getError("password.same");