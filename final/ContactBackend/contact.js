class Contact {

    constructor(id, first, last, email, phone, notes, url) {
        this.id = id;
        this.first = first;
        this.last = last;
        this.email = email;
        this.phone = phone;
        this.notes = notes;
        this.url = url;  
    }
}
//created a model class that helps us work with  contact info
//same library defined on front end == api linked to asynchornous object by which we ask for a specific id through an asynchronous call
//contact class used on front end contained methods marked as aynch bc theresults were not all available, don't have to do that within this framework because we don't have to make an exterior call

let database = []
//database == empty array in memory

//ensuing static functiosn:
Contact.findAll = () => {
    return database.map((c) => {
        return c.id; //takes an array of contact object and returns an array of all their ids
    });
};

Contact.find = (id) => {
    return database.find((c => {
        return c.id == id; //take in a specific id and use the functional method (find) which allows us to test ids
    }));
}

Contact.next_id = 0 //keeps track of next unique id
Contact.create = (first, last, email, phone, notes, url) => {
    //allows us to take in info for contact, create a new contact object, then pushes that obejct onto the database
    let result = new Contact(Contact.next_id, first, last, email, phone, notes, url);
    database.push(result);
    Contact.next_id += 1;
    return result;
}

Contact.delete = (id) => {
    database = database.filter((c) => {
        return c.id != id;
    });
}

// Hardcode some initial contacts.
//used to populate database
Contact.create("John", "Doe", "john_doe@email.unc.edu", "919-867-5309", "Notes: sdfjkl", "https://ideas.time.com/wp-content/uploads/sites/5/2011/11/a2390_ds023_cmyk_final.jpg?w=600");
Contact.create( "Sally", "Walters", "sally_walters@email.unc.edu", "919-867-5309", "Notes: affsdasd", "https://www.courant.com/resizer/D9qmAnzR8PY5q-GBdUBBVuNVUTs=/415x311/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/NTWCZKYTDJBI7CASRJ32F2RN6E.jpg");
Contact.create( "Rajan", "Shah", "rajan_shah@email.unc.edu", "919-867-5309", "Notes: gjfkls", "https://am22.mediaite.com/tms/cnt/uploads/2019/12/olaf-frozen.jpg" );
Contact.create( "Anita", "Rao", "anita_rao@email.unc.edu", "919-867-5309", "Notes: f sdhjfsjh", "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181101090541-the-grinch.jpg");
Contact.create( "Sejal", "Patel", "sejal_patel@email.unc.edu", "919-867-5309", "Notes: fadhjkgahkj", "https://i.pinimg.com/236x/0e/cb/7d/0ecb7dee5699de6d25ab56a8fc926925.jpg");
Contact.create( "Darshan", "Mayer", "darshan_mayer@email.unc.edu", "919-867-5309", "Notes: fdus9", "https://i.ytimg.com/vi/GxjsWlUTz7U/maxresdefault.jpg");

//Subsequent Contact entries are additional contacts given/hardcoded to the database

// Contact.create("Lisa", "Rinna", "rinna@gmail.com", "939-847-6309", "Notes: RHOBH", "https://media2.s-nbcnews.com/i/newscms/2019_08/1411958/lisa-rinna-new_look-today-main-190221_380033a181f545a62c8a15c516c85d50.jpg");
// Contact.create( "Lisa", "Vanderpump", "lisav@carolina.rr.come", "239-453-5309", "Notes: RHOBH", "chttps://www.bravotv.com/sites/bravo/files/styles/blog-post-embedded--mobile/public/2020-01/lisa-vanderpump-young-woman-dogs.jpg?itok=7JExy7_d");
// Contact.create( "Kyle", "Richards", "kylerunsmanymiles@outlook.com", "919-143-6903", "Notes: RHOBH", "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2020-08/kyle-teddi-gettyimages-1156675604.jpg?h=9ffb04cf&itok=cxf5GkS_" );
// Contact.create( "Andy", "Cohen", "sassyandy123@gmail.com", "919-576-5309", "Notes: RHOBH", "https://s2.r29static.com/bin/entry/8d9/x,80/1944310/image.jpg");
// Contact.create( "Denise", "Richards", "deniseimrich@email.unc.edu", "919-895-2230", "Notes: RHOBH", "https://static.onecms.io/wp-content/uploads/sites/20/2020/09/03/denise-richards-rhobh-reunion.jpg");

// Contact.create("Jack", "Dorsey", "john_doe@email.unc.edu", "919-867-5309", "Notes: twitter dude, beard is a little weird", "https://media.vanityfair.com/photos/5f99cdf2faf1b82d3425a8d2/master/pass/jack-dorsey-congress.jpg");
// Contact.create( "Mark", "Zuckerberg", "sally_walters@email.unc.edu", "919-867-5309", "Notes: remember to add as fb friend", "https://www.incimages.com/uploaded_files/image/1920x1080/GettyImages-1201476988_448569.jpg");
// Contact.create( "Jeff", "Bezos", "rajan_shah@email.unc.edu", "919-867-5309", "Notes: ehhh", "https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e" );
// Contact.create( "Elizabeth", "Holmes", "anita_rao@email.unc.edu", "919-867-5309", "Notes: whoah. haven't heard that name in a while", "https://upload.wikimedia.org/wikipedia/commons/d/da/Elizabeth_Holmes_2014_cropped.jpg");

module.exports = Contact;

//ultimately exporting Contact object