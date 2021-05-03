function DeleteArticleByAdmin(articleID) {
    let html = ``;
    html = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" Onclick="DeleteArticleByAdminAjax('${articleID}')">Delete Article </button>`
            $('.modal-footer').html(html);

}

function DeleteArticleByAdminAjax(articleID) {
    console.log(articleID);
        $.ajax({
        type: "DELETE",
        url: "/article/deleteArticleByAdmin/" + articleID,
        success: function (response) {
            let html = `<div class="alert alert-success w-100" role="alert">
                            Article Deleted successfully by admin
                        </div>`
            $('.modal-footer').html(html);
            setTimeout(() => {
                location.reload()
            }, 1500);

        }
    });
    
}