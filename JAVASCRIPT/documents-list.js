function show_upload_pop_up() {
    document.getElementById("upload-pop-up").style.display = "block";
}

function show_edit_pop_up() {
    document.getElementById("edit-pop-up").style.display = 'block';
}

function show_delete_pop_up() {
    document.getElementById("delete-pop-up").style.display = 'block';
}

function clicked_upload() {
    document.getElementById("upload-pop-up").style.display = "none";
}

function clicked_save() {
    document.getElementById("edit-pop-up").style.display = "none";
}

function clicked_ok() {
    document.getElementById("delete-pop-up").style.display = "none";
}

function clicked_cancel(para) {
    document.getElementById(para).style.display = "none";
}