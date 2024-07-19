import React, {useEffect} from "react";
import {getContacts} from "../helpers/contacts.js";
import Modal from "./Modal.jsx";

const Contacts = () => {
    const [contacts, setContacts] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [selectedContact, setSelectedContact] = React.useState(null);
    useEffect(() => {

        document.title = `About | Matrix Admin`
        getContacts().then(data => setContacts(data));
    }, [])
    const onView = (contact) => {
        setShowModal(true);
        setSelectedContact(contact);
    }
    return (<main className={"bg-[#f9f9f9] min-h-screen flex justify-center items-center"}>
        {/*// here we will list all the contact messages from the api*/}
        <div className={"bg-white p-4 rounded-md shadow-md w-fit"}>
            <h1 className={"text-2xl font-bold text-gray-800 mb-4"}>Contact Messages</h1>
            <div className={"flex flex-col gap-4"}>
                {contacts && contacts.map((contact, index) => (
                    <div key={index} className={"flex justify-between items-center gap-10"}>
                        <div className={"w-full"}>
                            <h2 className={"text-lg font-semibold text-gray-800"}>{contact.name}</h2>
                            <p className={"text-sm text-gray-500"}>
                                {contact.email}
                            </p>

                        </div>
                        <button
                            onClick={() => onView(contact)}
                            className={"bg-blue-500 text-white px-4 py-2 rounded-md"}>View
                        </button>
                        {/*<button className={"bg-red-500 text-white px-4 py-2 rounded-md"}>Delete</button>*/}
                    </div>))}
                {(!contacts) && <span className={"capitalize font-semibold text-center text-gray-600"}>
                        no data found
                    </span>}
                {showModal && <Modal
                    data={selectedContact}
                    onClose={() => setShowModal(false)}
                    title={"Contact Details"}
                />}
            </div>
        </div>
    </main>)
};

export default Contacts;