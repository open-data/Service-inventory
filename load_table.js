
function loadEnablementTable(e_enablement) {
  console.log(e_enablement);
  let table = document.getElementById('e_enablement');
  for (index in e_enablement) {
    var row = document.getElementById(index);
    var cell = row.insertCell(1);
    if (e_enablement[index] == "Y") {
      cell.innerHTML = '<span class="glyphicon glyphicon-ok"></span> Enabled';
      cell.setAttribute("style","color:green; white-space: nowrap;");
      console.log(cell);
    } else if (e_enablement[index] == "N") {
      cell.innerHTML = '<span class="glyphicon glyphicon-remove"></span> Not enabled';
      cell.setAttribute("style","color:#CD0000; white-space: nowrap;");
      console.log(cell);
    } else {
      cell.innerHTML = 'Not applicable for this service';
      cell.setAttribute("style","color:grey");
    }


    // var (e_enablement[index])
  }
}





function populateTable(data, id) {

  let tableData = _.map(data, function(obj) {
    return _.values(obj);
  });

  let headers = _.map(_.keys(data[0]), function(header) {
    return { title: header };
  });

  if (data.length > 0) {
    $(document).ready(function() {
      $('#table2').DataTable( {
        autoWidth : false,
        paging : false,
        searching : false,
        bInfo : false,
        data: tableData,
        columns: headers
      });
    });
  }


}
