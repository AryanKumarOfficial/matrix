
const Home = () => {
    return (
        <main className={"min-h-screen bg-[#f3f4f6] flex justify-evenly items-center flex-col gap-10"}>
            <h1 className={"text-4xl font-bold"}>Dashboard</h1>
            <section className={"bg-[#f9f9f9] p-10 rounded-md"} style={{
                boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.1) , -10px -10px 10px white",
            }}>
                <h2 className={"text-2xl font-bold"}>Recent Messages</h2>
                <ul className={"divide-y divide-gray-300"}>
                    <li className={"py-2"}>
                        <h3 className={"font-semibold"}>Message 1</h3>
                        <p className={"text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam, quos.</p>
                    </li>
                    <li className={"py-2"}>
                        <h3 className={"font-semibold"}>Message 2</h3>
                        <p className={"text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam, quos.</p>
                    </li>
                    <li className={"py-2"}>
                        <h3 className={"font-semibold"}>Message 3</h3>
                        <p className={"text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam, quos.</p>
                    </li>
                </ul>
            </section>
        </main>
    )
};

export default Home;