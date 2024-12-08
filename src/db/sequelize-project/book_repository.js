const { BookModel } = require('./models/book_model')
async function createBook() {
    try {
        const book1 = await BookModel.create({
            isbn: "123123",
            title: "Example Title",
            publisher_id: 1,
            format: "Hardcover",
            published: new Date(),
            year: 2024,
            status: true,
        },
            { raw: true });
        console.log("Book created successfully:", JSON.stringify(book1));
        return book1;
    } catch (error) {
        console.error("Error creating book:", error);
    }
}

async function fetchAllBooks() {
    try {
        const bookJSON = await BookModel.findAll({
            raw: true
        });
        return bookJSON;
    } catch (error) {
        console.error("Error creating book:", error);
    }
}
module.exports = {
    fetchAllBooks,
    createBook
};
