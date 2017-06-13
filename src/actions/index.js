export const BOOK_SELECTED = 'BOOK_SELECTED';
export function selectBook(book){
    console.log(book.title);
    //actioncreator needs to return an action
    return{
        type: BOOK_SELECTED,
        payload: book
    };
}