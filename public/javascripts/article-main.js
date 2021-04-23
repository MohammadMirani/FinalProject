function ValidateCreateArticle() {


    const articleImage = $("#articleImage").val();
    const bodyArticle = $("#bodyArticle").val();
    const description = $("#description").val();
    const title = $("#title").val();


    let count = 0;


    if (title == null || title == "") {

        alert("Please Enter title")
        count++
    }
    if (description == null || description == "") {
        alert("Please Enter description");
        count++
    }
    if (bodyArticle == null || bodyArticle == "") {
        alert("Please Enter bodyArticle");
        count++
    }
    if (articleImage == null || articleImage == "") {
        alert("Please Enter articleImage");
        count++
    }


    if (count !== 0) return false

}