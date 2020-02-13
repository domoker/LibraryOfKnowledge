function changePage(page, id) {
    var url;

    switch (page) {
        case "edit":
            document.location.href = "/posts/edit/" + id;
            break;
        case "remove":
            if(confirm("Do you really want to remove this post?")) {
				document.location.href = "/posts/remove/" + id;	
			}
    }
}