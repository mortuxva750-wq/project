function toggleDetails(btn){
    let row = $(btn).closest("tr").next();

    if(row.css("display") === "none"){
        row.css("display", "table-row");
    } else {
        row.css("display", "none");
    }
}

function checkout(){
    let meals = $(".meal:checked");

    if(meals.length === 0){
        alert(" يجب اختيار وجبة واحدة على الأقل");
        return;
    }

    $("#overlay").show();
    $("#formBox").show();
}

function closeForm(){
    $("#overlay").hide();
    $("#formBox").hide();
}

function submitOrder() {

    const name = $("#name").val().trim();
    const national = $("#national").val().trim();
    const birth = $("#birth").val().trim();
    const phone = $("#phone").val().trim();
    const email = $("#email").val().trim();

    // التحقق من الرقم الوطني
    if (national.length !== 11) {
        alert("الرقم الوطني غير صحيح، يجب أن يكون 11 رقم");
        return;
    }

    // حساب إجمالي الوجبات
    let total = 0;

    $(".meal:checked").each(function () {
        total += Number($(this).val());
    });

    // حساب الضريبة والفاتورة النهائية
    const tax = total * 0.05;
    const finalTotal = total + tax;

    // عرض النتيجة
    alert(
        `👤 الاسم: ${name}
         المجموع: ${total}
         الضريبة: ${tax}
         الإجمالي النهائي: ${finalTotal}`
    );
}