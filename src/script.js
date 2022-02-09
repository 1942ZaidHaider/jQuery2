var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

$(function () {
  createPage();
});
function createPage() {
  console.log("Creating Page");

  //Creating filter div
  filter = $("<div></div>").attr("id", "filter"); //Div for filters
  selectBrand = $("<select></select>"); //Brand filter
  selectBrand.append($(`<option></option>`).text("All"));
  selectBrand.attr("name", "brand");
  for (let i of products) {
    selectBrand.append($(`<option></option>`).text(i.brand));
  }
  //Creating Filters
  selectOs = $("<select></select>"); //Os filter
  selectOs.attr("name", "brand");
  selectOs.append($(`<option></option>`).text("All"));
  for (let i of products) {
    selectOs.append($(`<option></option>`).text(i.os));
  }
  filter.append($("<label></label>").text("Brand").attr("for", "brand"));
  filter.append(selectBrand);
  filter.append(
    $("<label></label>").text("Operating System").attr("for", "os")
  );
  filter.append(selectOs);
  $("#main").append(filter);
  
  //Creating table
  content = $("<div></div>").attr("id", "content");
  table = $("<table></table>");
  table.append(
    `<tr><th>ID</th><th>Name</th><th>Operating system</th><th>Brand</th><th>Remove</th></tr>`
  );
  for (i of products) {
    table.append(
      `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.os}</td><td>${i.brand}</td><td><a href="#">Delete</a></td></tr>`
    );
  }
  $("#main").append(table);
  //Creating search
}
