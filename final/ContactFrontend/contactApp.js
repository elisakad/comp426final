$(document).ready(() => {
    
    loadContacts();

    $("#add_contact").on('click', async (e) => {
       let contact = await Contact.create("First", "Last", "Email", "Phone", "Notes", "Url");
        new ContactView(contact, $('#contactList'), true);
        var popup = document.getElementById("add_contact");
        popup.classList.toggle("show");

        //add button to save modal stuff, /save contact.onclick
        //js in html
    });
});

const loadContacts = async () => {
    const contact_id_list = await Contact.findAll();
    contact_id_list.forEach(async (cid) => {
        const contact = await Contact.find(cid);
        new ContactView(contact, $('#contactList'));
    });
}