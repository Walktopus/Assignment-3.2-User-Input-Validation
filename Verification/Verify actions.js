function Verify() {
    var Happy = "Happy.png";
  const First = document.getElementById("FirstName").value;
    const Last = document.getElementById("LastName").value;
      const Zip = document.getElementById("ZipCode").value;
  console.log(First);
  const result = First + " " + Last;
 console.log(result);
if (result.length < 20 && Zip.length == 5)
    {
    document.getElementById("Header").innerHTML = "Thankyou for verifying";
    document.body.style.color = "green";
            document.getElementById("-_-").src = Happy;
    }
}
