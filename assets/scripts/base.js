window.onload = function () {
  "use strict";

  const pageId = document.body.id;
  const form1 = document.forms.form1;

  if (pageId === "start") {
    form1.addEventListener("submit", (e) => {
      // form1.elements
      e.preventDefault();
      // Found that fancy form data constructor - let's play with it
      // let formData = new FormData(form1);

      // console.log(formData.get("name"));
      // console.log(formData.get("gender"));

      // // Another experiment
      // let person = { name: "billy", age: 23 };

      // Display the key/value pairs
      // for (let pair of formData.entries()) {
      //   //console.log(pair[0] + ", " + pair[1]);
      //   localStorage.setItem(pair[0], pair[1]);
      // }

      // localStorage.setItem("user", JSON.stringify(formData.entries()));

      const formData = new FormData(e.target);
      const user = Object.fromEntries(formData.entries());
      localStorage.setItem("user", JSON.stringify(user)); // stringify object and store
    });
  }

  if (pageId === "verdict") {
    let userObj = JSON.parse(localStorage.getItem("user")); //retrieve the object
    ["name", "gender"].forEach((userAttr) => {
      document.querySelector(".user-" + userAttr).textContent = userObj
        ? userObj[userAttr]
        : "---";
    });
    // document.querySelector(".user-gender").textContent = userObj.gender;
  }
};
