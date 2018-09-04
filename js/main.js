var feedback = document.querySelector(".feedback-btn");

var popap = document.querySelector(".modal-feedback");

var close = popap.querySelector(".modal-close");

var user = popap.querySelector(".feedback-user");

feedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	popap.classList.add("modal-show");
	user.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popap.classList.remove("modal-show");
});

