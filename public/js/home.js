async function fdata(e) {
  e.preventDefault();
  let email = document.getElementById("exampleInputEmail1").value;
  let res = document.getElementById("response");
  try {
    let data = await fetch_post("/api/isnumber", { email: email });
    if (data.err) {
      res.className = "red";
      res.innerText = data.err;
    } else {
      res.innerText = data.number;
      res.className = "";
    }
    console.log(data);
  } catch (e) {
    console.log("err", e);
  }
}
