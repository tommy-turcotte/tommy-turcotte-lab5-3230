$(document).ready(function(){
        $("table tr th").click(function(){
            if ($(this).closest("tr").index() != 0){
                selectRow($(this).closest("tr").index());
            }
            else {
                selectColumn($(this).index()+1);
            }
        });
  });

  function selectRow(rowIndex){
      deselectAll();
      $("table tr:eq("+rowIndex+") td").css("background-color", "#e0e0ff")
  }
  function selectColumn(colIndex){
      deselectAll();
    $("table td:nth-child("+colIndex+")").css("background-color", "#e0e0ff")
  }

  function deselectAll(){
    $("table td").css("background-color","white")
  }

