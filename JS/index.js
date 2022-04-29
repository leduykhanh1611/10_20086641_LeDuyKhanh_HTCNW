$(document).ready(function () {
    var i = 1;
    $("#btn2").click(function () {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return true;
        } else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("từ 1 đến 100");
            } else {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);

    function kiemTraCauLacBo() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#CLB").val() == "") {
            $("#tbCLB").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#CLB").val())) {
            $("#tbDc").html("Mỗi ký tự viết hoa");
            return true;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#CLB").blur(kiemTraCauLacBo);

    function kiemTraNTT() {

        if ($("#NTT").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate + 15);
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 15 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);

    function kiemTraSDT() {

        var mauKT = /^09\d{2}-\d{3}-\d{3}$/;

        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 09xx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    $("#save").click(function () {
        if (kiemTraTen() == true && kiemTraCauLacBo() == true && kiemTraNTT() == true && kiemTraSDT() == true && kiemTraSoAo() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#CLB").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhsach").append(row);
            $("#myModal").modal("hide");
        }
    })
})