const getContacts = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_HOST}/api/contact/all`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data?.data;
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return null; // or you can return an empty array or a default value
    }
}

export {getContacts};
