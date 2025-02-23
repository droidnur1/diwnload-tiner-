<script>
    document.addEventListener('DOMContentLoaded', function () {
    function checkChildren(nodes, elemId) {
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].id == elemId) {
                return nodes[i];
            } else {
                return checkChildren(nodes[i].children, elemId);
            }
        }
    }

    function isNumeric(value) {
        var type = typeof value;
        return (type === 'number' || type === 'string') && !Number.isNaN(value - Number.parseFloat(value));
    }
    var nodes = document.querySelector('div.postBody').children;
    var splitdong = checkChildren(nodes, 'postSplit').innerHTML;
    var content = splitdong.split('<!--nextpage-->');
    var url = window.location.href;
    var url = url.split('?page=');
    var no = url[1] + '&m=4';
    var no = no.split('m');
    var no = no[0];
    var no = no.replace('&', '');
    var url = url[0];
    var i = 1;
    if (!isNumeric(no)) {
        var no = 1;
    }
    document.getElementById('postSplit').innerHTML = content[no - 1];
    if (content.length > 1) {
        document.getElementById('postSplit').innerHTML += "<div class='blogPg' id='postPager'><span class='page current'>Pages :</span></div>";
    }
    if (no > 1) {
        document.getElementById('postPager').innerHTML += "<!-- <a href='" + url + "?page=" + (no - 1) + "' title='Previous Page'>Prev</a> -->";
    }
    content.forEach(function (item) {
        if (no == i) {
            document.getElementById('postPager').innerHTML += "<span class='current'>" + i + "</span>";
        } else {
            document.getElementById('postPager').innerHTML += "<a href='" + url + "?page=" + i + "'>" + i + "</a>";
        }
        i++;
    });
    if (content.length > no) {
        var nn = parseInt(no) + 1;
        document.getElementById('postPager').innerHTML += "<a href='" + url + "?page=" + nn + "'>Next</a>";
    }
}); </script>
