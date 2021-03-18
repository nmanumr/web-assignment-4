$(function () {
 $('#myForm').validate({
  rules: {
    name: {
      required: true,
      minlength: 5,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 8,
    },
    password2: {
      minlength: 8,
      equalTo : "#password"
    },
  },
  submitHandler: function (form) { // for demo
    alert('valid form submitted'); // for demo
    return false; // for demo
  }
});
});
