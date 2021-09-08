# Book List API

The app has been deployed to Heroku so can be tested using the following requests:

### Create a book entry:
post - https://week7booklist-api.herokuapp.com/book/create

accepted fields are title, author and read\
n.b. request body must contain title field

### Show (Read) list of books
get - https://week7booklist-api.herokuapp.com/books

### Show (Read) a book by id
get - https://week7booklist-api.herokuapp.com/book/id/

n.b. id must exist in the list

### Show (Read) a book by title
get - https://week7booklist-api.herokuapp.com/book/title/

n.b. title must exist in the list

### Show (Read) a book by specified author
get - https://week7booklist-api.herokuapp.com/book/author/

n.b. author must exist in the list

### Update a book entry (using id)
put - https://week7booklist-api.herokuapp.com/book/

n.b. id must exist in the list and title field is required

### Delete an item (using id)
delete - https://week7booklist-api.herokuapp.com/book/

n.b. id must exist in the list


