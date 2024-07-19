import {useEffect, useState} from "react";
import {getTopContacts} from "../helpers/contacts.js";
import Modal from "./Modal.jsx";

const Home = () => {
    const [contacts, setContacts] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    useEffect(() => {
        document.title = `Home | Matrix Admin`
        getTopContacts(3).then(data => setContacts(data))
    }, []);
    const onView = (contact) => {
        setShowModal(true);
        setSelectedContact(contact);
    }

    const onClose = () => {
        setShowModal(false);
        setSelectedContact(null);
    }

    return (<main className={"min-h-screen bg-[#f3f4f6] flex justify-evenly items-center flex-col gap-10"}>
        <h1 className={"text-4xl font-bold"}>Dashboard</h1>
        <section className={"bg-[#f9f9f9] p-10 rounded-md"} style={{
            boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.1) , -10px -10px 10px white", width: "calc(100% - 4em)"
        }}>
            <h2 className={"text-4xl font-bold"}>Recent Messages</h2>
            <ul className={"divide-y divide-gray-300"}>
                {contacts && contacts.map((contact, index) => {
                    return (<li key={index} className={"flex justify-between items-center gap-4 py-4"}>
                        <div className={"w-full"}>
                            <h3 className={"text-2xl font-semibold text-gray-800"}>{contact.name}</h3>
                            <p className={"text-sm text-gray-500"}>
                                {contact.email}
                            </p>
                        </div>
                        <div className={"flex gap-4"}>
                            <button
                                onClick={() => onView(contact)}
                                className={"bg-blue-500 text-white px-4 py-2 rounded-md"}>View
                            </button>
                            {/*<button className={"bg-red-500 text-white px-4 py-2 rounded-md"}>Delete</button>*/}
                        </div>
                    </li>);

                })}
                {(!contacts) && <span className={"capitalize font-semibold text-center text-gray-600"}>
                        no data found
                    </span>}
                {showModal &&
                    <Modal
                        title={"Contact Details"}
                        onClose={onClose}
                        data={selectedContact}
                    />}
            </ul>
        </section>


    </main>)
};

export default Home;