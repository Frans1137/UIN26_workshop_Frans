const people = {
    name: "people", 
    title: "Personer",
    type: "document",
    fields: [
        // Navn input
        {
            name: "fullname", 
            title: "Fullt navn",
            type: "string"
        }, 
        // Bilde opplasting
        {
            name: "image",
            title: "Bilde", 
            type: "image"
        }
    ]
}

export default people