var data=[]
function saveData(){
    var itemNo = document.getElementById("no").value;
    var itemPhone = document.getElementById("phone").value;
    var itemfullName = document.getElementById("fullName").value;
    var itemcyclePoints = document.getElementById("cyclePoints").value;
    var itemaccumulatePoints = document.getElementById("accumulatePoints").value;
    var itemcurrentPoints = document.getElementById("currentPoints").value;
    var itemrank = document.getElementById("rank").value;

    var item = {
        no:itemNo,
        phone:itemPhone,
        fullName:itemfullName,
        cyclePoints:itemcyclePoints,
        accumulatePoints:itemaccumulatePoints,
        currentPoints:itemcurrentPoints,
        rank:itemrank
    }
    //Cảnh báo khi không nhập đủ thông tin
    if(itemNo==""){
        alert("Nhập Số thứ tự");
        return(data);
    }if(itemPhone==""){
        alert("Nhập số điện thoại");
        return(data);
    }if(itemfullName==""){
        alert("Nhập Họ và tên");
        return(data);
    }if(itemcyclePoints==""){
        alert("Nhập Điểm tích chu kỳ");
        return(data);
    }if(itemaccumulatePoints==""){
        alert("Nhập Điểm tích lũy kế");
        return(data);
    }if(itemcurrentPoints==""){
        alert("Nhập Điểm hiện tại");
        return(data);
    }if(itemrank==""){
        alert("Nhập Hạng");
        return(data);
    }
    //Lưu sau khi sửa, tìm tới địa chỉ index
    let index = data.findIndex((c)=>c.no==item.no);
    if(index>=0){
        data.splice(index,1,item);
    }else{
        data.push(item);
    }
    render();
    clear();

}

//Render ra bảng
function render(){
    table =`<tr >
    <th>STT</th>
    <th>Số điện thoại</th>
    <th>Họ và tên</th>
    <th>Điểm tích chu kỳ</th>
    <th>Điểm tích lũy kế</th>
    <th>Điểm hiện tại</th>
    <th>Hạng</th>
    <th>Hành động</th>
    </tr>`

    for( let i=0;i<data.length;i++){
        table +=`<tr >  
            <td>${data[i].no}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].fullName}</td>
            <td>${data[i].cyclePoints}</td>
            <td>${data[i].accumulatePoints}</td>
            <td>${data[i].currentPoints}</td>
            <td>${data[i].rank}</td>
            <td><button onclick="editItem(${data[i].no})" class="btn btn-warning" >Sửa</button>
            <button onclick="deleteItem(${data[i].no})" class="btn btn-danger">Xóa</button>
            </td>
            </tr>`
    }
    document.getElementById("tableData").innerHTML = table;
}
// Xóa nội dung mỗi khi nhập
function clear(){
    document.getElementById("no").value="";
    document.getElementById("phone").value="";
    document.getElementById("fullName").value="";
    document.getElementById("cyclePoints").value="";
    document.getElementById("accumulatePoints").value="";
    document.getElementById("currentPoints").value="";
    document.getElementById("rank").value="";
}
//Nút xóa, sửa
function deleteItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].no==x){
            data.splice(i,1)
            render();
        }
    }
}
function editItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].no==x){
            document.getElementById("no").value=data[i].no;
            document.getElementById("phone").value=data[i].phone;
            document.getElementById("fullName").value=data[i].fullName;
            document.getElementById("cyclePoints").value=data[i].cyclePoints;
            document.getElementById("accumulatePoints").value=data[i].accumulatePoints;
            document.getElementById("currentPoints").value=data[i].currentPoints;
            document.getElementById("rank").value=data[i].rank;
        }

    }

}