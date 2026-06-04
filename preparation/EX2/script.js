
let title=$("#title").val();
let price=$("#price").val().trim();
let taxes=$("#taxes").val().trim();
let ads=$("#ads").val().trim();
let discount=$("#discount").val().trim();
let total=0;
let count=$("#count").val().trim();
let category=$("#category").val();

function getTotal(){
    if(price != ""){
        let result=(+price + +taxes + +ads) - +discount;
        total=result;
        $("#total").html(result);
        $("#total").css("background","green");
    }else{
        $("#total").html("");
        $("#total").css("background","#a00d02");
    }
}

$("#price,#taxes,#ads,#discount").on("keyup",function(){
    getTotal();
});

let dataPro;
if(localStorage.product != null){
    dataPro=JSON.parse(localStorage.product);
}else{
    dataPro=[];
}

$("#submit").on("click",function(){
    let newPro={
        title:title,
        price:price,
        taxes:taxes,
        ads:ads,
        discount:discount,
        total:total,
        count:count,
        category:category
    }
    if(title != "" && price != "" && category != "" && newPro.count < 100){
        if(count > 1){
            for(let i=0;i<count;i++){
                dataPro.push(newPro);
            }
        }else{
            dataPro.push(newPro);
        }
        localStorage.setItem("product",JSON.stringify(dataPro));
        clearData();
        showData();
    }
});

function clearData(){
    $("#title").val("");
    $("#price").val("");
    $("#taxes").val("");
    $("#ads").val("");
    $("#discount").val("");
    $("#total").html("");
    $("#count").val("");
    $("#category").val("");
}

function showData(){
    let table="";
    for(let i=0;i<dataPro.length;i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button id="delete">delete</button></td>
        </tr>
        `
    }
    $("#tbody").html(table);
    let btnDelete=document.getElementById("delete");
    btnDelete.onclick=function(){
        localStorage.clear();
        dataPro.splice(0);
        showData();
    }
}

showData();
