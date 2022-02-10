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

//on-ready
$(function () {
  createPage();
  addEvents();
});
//Create the page
function createPage() {
  console.log("Creating Page");

  //Creating filter div
  filter = $("<div></div>").attr("id", "filter"); //Div for filters
  //Creating Filters
  let tmp = [];
  selectBrand = $("<select></select>"); //Brand filter
  selectBrand.append($(`<option></option>`).text("All"));
  selectBrand.attr("name", "brand");
  for (let i of products) {
    if (!tmp.includes(i.brand)) {
      tmp.push(i.brand);
      selectBrand.append($(`<option></option>`).text(i.brand));
    }
  }
  tmp = [];
  selectOs = $("<select></select>"); //Os filter
  selectOs.attr("name", "brand");
  selectOs.append($(`<option></option>`).text("All"));
  for (let i of products) {
    if (!tmp.includes(i.os)) {
      tmp.push(i.os);
      selectOs.append($(`<option></option>`).text(i.os));
    }
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
      `<tr><td>${i.id}</td><td>${i.name}</td><td class="os">${i.os}</td><td class="brand">${i.brand}</td><td><a href="#">Delete</a></td></tr>`
    );
  }
  $("#main").append(table);

  //Creating search
  searchDiv = $("<div></div>").attr("id", "search_div");
  searchInput = $("<input type='text'>").attr("name", "search_input");
  searchButton = $(`<button>Search</button>`);
  searchDiv.append(searchInput);
  searchDiv.append(searchButton);
  $("#main").append(searchDiv);
}
//Add events
function addEvents() {
  //Search
  searchButton.click(function () {
    inpVal = searchInput.val().toUpperCase();
    $("tr").each(function () {
      //console.log($(this).html());
      $(this).show();
      chkVal1 = $(this).children("td").slice(0, 1).text().toUpperCase();
      chkVal2 = $(this).children("td").slice(1, 2).text().toUpperCase();
      if (!inpVal) {
      } else if (
        $(this).children("td").length > 0 &&
        !chkVal1.includes(inpVal) &&
        !chkVal2.includes(inpVal)
      ) {
        console.log();
        $(this).hide();
      }
    });
  });
  //Filter Events
  //Filter Brand
  selectBrand.change(function () {
    filterProducts();
  });
  //OS Filter
  selectOs.change(function () {
    filterProducts();
  });
  // Remove Entry
  $("a").click(function () {
    id = $(this).parents("tr").children("td").first().html();
    console.log(id);
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products.splice(i, 1);
        break;
      }
    }
    $(this).parents("tr").remove();
  });
}
function filterProducts() {
  let chkOs = selectOs.find(":selected").text();
  let chkBrand = selectBrand.find(":selected").text();
  $("tr").each(function () {
    if (
      (hasFilter("brand", chkBrand, $(this)) &&
      hasFilter("os", chkOs, $(this))) ||
      $(this).children("th").length>0
    ) {
      $(this).show();
    }
    else{
      $(this).hide();
    }
  });
}
function hasFilter(t, term, ele) {
  if (t.toUpperCase() == "BRAND") {
    cmp = ele.children(".brand").text().toUpperCase();
    console.log(cmp,term);
    return cmp == term.toUpperCase() || term == "All";
  } else if (t.toUpperCase() == "OS") {
    cmp = ele.children(".os").text().toUpperCase();
    console.log(cmp,term);
    return cmp == term.toUpperCase() || term == "All";
  }
}
