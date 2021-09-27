// $(() => {
//     const clearMsg = () => $("#msg").text("");
//     const addedSuccess = () => {
//         $("#fname").val("");
//         $("#lname").val("");
//         $("#msg").text("Data added successfully");
//         $("#fname").focus();
//         setTimeout(clearMsg, 3000);
//     }
//     const noSuccess = () => {
//         $("#msg").text("Unable to reach server");
//         setTimeout(clearMsg, 10000);
//     }

//     $("#add").submit(() => {
//         const data = {
//             fname: $("#fname").val(),
//             lname: $("#lname").val(),
//             food: $("#food").val(),
//         };
//         $.post({
//             url: "/add",
//             data: JSON.stringify(data),
//             contentType: "application/json; charset=utf-8"
//         }).done(addedSuccess)
//             .fail(noSuccess);
//         return false;
//     });
// });

$(()=>{
    $("one").click(()=>{
        const data ={
            "cpu": "8 core 4Ghz",
            "ram": "16GB",
            "storage": "4TB NVME",
            "price": "$1500" 
        };
        $.post("/computers",{
           data: JSON.stringify(data)
        }).done(()=>{
            $("#cpu").text(data.cpu);
            $("#ram").text(data.ram);
            $("#storage").text(data.storage);
            $("#price").text(data.price);
        }).fail(()=>{
            $("#cpu").text("");
            $("#ram").text("");
            $("#storage").text("");
            $("#price").text("");
        })
    })
})